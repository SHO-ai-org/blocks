import { gql } from "@apollo/client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Text,
  styled,
  Gutter,
  Flex,
  Button,
} from "@sho-ai-org/pattern-library";
import useIsMounted from "ismounted";
import { FC, useContext, useState } from "react";
import slugify from "slugify";

import {
  CreatePageInput,
  PageCategory,
  UpdateBlockMutationFn,
  UpdatePageMutationFn,
  useCreatePageMutation,
  useDeletePageMutation,
  useUpdatePageSlugMutation,
} from "../../../graphql/operations";
import { snackbarContext } from "../../../utils/context-utils";
import { convertAWSDateToHumanReadableDate } from "../../../utils/date-utils";
import { authenticatedPaths } from "../../../utils/route-utils";
import Form from "../Form";
import MaterialIcon from "../MaterialIcon";
import PubEditArticle from "./PubEditArticle";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";
import { useRouter } from "next/router";
import React from "react";
import { Hit as AlgoliaHit } from "@algolia/client-search";
import { AlgoliaDoc } from "../../../../../models/types";
import { SearchBox } from "../AlgoliaSearch/SearchBox";
import { Hits } from "../AlgoliaSearch/Hits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
);

const FormContainer = styled("div", {
  width: "400px",
  padding: "35px",
  backgroundColor: "white",
});

type PubCreateArticleTemplate = {
  pageCategories: PageCategory[];
  createPageInput?: Omit<CreatePageInput, "slug">;
  slugPrefix?: string;
  onUpdateBlock: UpdateBlockMutationFn;
  onUpdatePage: UpdatePageMutationFn;
};

const slugifyConfig = {
  lower: true,
  remove: /[:]/g,
};

let timerId;

const PubCreateArticleTemplate: FC<PubCreateArticleTemplate> = ({
  pageCategories,
  createPageInput,
  slugPrefix = "",
  onUpdateBlock,
  onUpdatePage,
}) => {
  const isMounted = useIsMounted();
  const openSnackbar = useContext(snackbarContext);
  const router = useRouter();
  const [showEditMode, setShowEditMode] = useState<boolean>(false);
  const [slugChosen, setSlugChosen] = useState<string | null>(null);
  const [pageIdChosen, setPageIdChosen] = useState<string | null>(null);
  const siteId = router.query.siteDashboard as string;

  const [onCreatePage] = useCreatePageMutation({
    update(cache, { data }) {
      const createPage = data?.createPage;
      if (createPage) {
        cache.modify({
          fields: {
            listSitePages(existingRefs = [], { readField }) {
              const newRef = cache.writeFragment({
                data: createPage,
                fragment: gql`
                  fragment newSitePage on Page {
                    slug
                    id
                  }
                `,
              });
              if (existingRefs.items) {
                if (
                  existingRefs.items.some((ref) => {
                    readField("id", ref) === createPage.id;
                  })
                ) {
                  return existingRefs.items;
                }
                return [...existingRefs.items, newRef];
              } else {
                // Quick safety check - if the new comment is already present in the cache, we don't need to add it again.
                if (
                  existingRefs.some((ref) => {
                    readField("id", ref) === createPage.id;
                  })
                ) {
                  return existingRefs;
                }
                return [...existingRefs, newRef];
              }
            },
          },
        });
      }
    },
    onError: (error) => {
      console.error("error creating page", error);
      if (isMounted && openSnackbar) {
        openSnackbar({ message: "Error creating page" });
      }
    },
    onCompleted: (data) => {
      console.log("Brand has been updated:", data);
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Page ${data.createPage.slug} created` });
      }
    },
  });

  const [onDeletePage] = useDeletePageMutation({
    update(cache, { data }) {
      const updatePage = data?.deletePage;
      if (updatePage) {
        cache.modify({
          optimistic: true,
          fields: {
            listSitePages(existingRefs = [], { readField }) {
              const updatedRef = cache.writeFragment({
                data: updatePage,
                fragment: gql`
                  fragment updatePageSlug on Page {
                    slug
                    sk
                    id
                  }
                `,
              });
              return existingRefs?.items?.map((ref) =>
                readField("id", ref) === updatePage.id ? updatedRef : ref,
              );
            },
          },
        });
      }
    },
    onError: (error) => {
      console.error("error deleting site page", error);
      if (isMounted && openSnackbar) {
        openSnackbar({ message: "Error deleting page" });
      }
    },
    onCompleted: (data) => {
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Page ${data.deletePage.slug} deleted` });
      }
    },
  });

  const [onUpdatePageSlug] = useUpdatePageSlugMutation({
    onError: (error) => {
      console.error("error updating page slug", error);
      if (isMounted && openSnackbar) {
        openSnackbar({ message: "Error updating page slug" });
      }
    },
    onCompleted: (data) => {
      if (isMounted && openSnackbar) {
        openSnackbar({
          message: `Page ${data.updatePageSlug.slug} slug updated`,
        });
      }
    },
  });

  const onBack = () => {
    setSlugChosen(null);
    setPageIdChosen(null);
    setShowEditMode(!showEditMode);
  };

  return (
    <Gutter>
      <Flex justify="between" css={{ marginTop: "40px" }}>
        <Text variant="h5">Articles</Text>
        {createPageInput && (
          <Dialog.Root>
            <Dialog.Trigger>
              <Text css={{ margin: "$1" }}>create new Article</Text>
            </Dialog.Trigger>
            <Dialog.Content>
              <FormContainer>
                <Form
                  buttonLabel="Add"
                  callback={({ slug }) => {
                    const sanitizedSlug = slugify(slug, slugifyConfig);
                    const fullSlug = `${slugPrefix}${sanitizedSlug}/`;
                    onCreatePage({
                      variables: {
                        page: {
                          ...createPageInput,
                          slug: fullSlug,
                        },
                      },
                    });
                  }}
                  fields={[
                    {
                      autocomplete: "off",
                      // hintText: '',
                      name: "slug",
                      fieldType: "input",
                      type: "text",
                    },
                  ]}
                  title={"Add article slug"}
                />
              </FormContainer>
            </Dialog.Content>
          </Dialog.Root>
        )}
      </Flex>

      {showEditMode && slugChosen && (
        <>
          <Button label="back" onClick={onBack} />
          <br />
          <br />
          <br />

          <PubEditArticle
            slug={slugChosen}
            onUpdateBlock={onUpdateBlock}
            lastPublish={null}
            // lastPublish={hit.publishedAt}
            pathTo="/articles/"
            onBack={onBack}
          />
        </>
      )}

      <InstantSearch
        indexName={`${process.env.NEXT_PUBLIC_STAGE_NAME}-${siteId}`}
        searchClient={searchClient}
      >
        {!showEditMode && (
          <SearchBox
            placeholder="Search"
            queryHook={(query, search) => {
              clearTimeout(timerId);
              timerId = setTimeout(() => search(query), 1000);
            }}
          />
        )}
        <Hits
          hitComponent={({ hit }: { hit: AlgoliaHit<AlgoliaDoc> }) => {
            const hasUnsavedChanges = hit.updatedAt !== hit.publishedAt;
            return showEditMode ? (
              <></>
            ) : (
              <li>
                <Flex
                  key={hit.objectID}
                  justify="between"
                  style={{ paddingTop: 10 }}
                  align="start"
                >
                  <div>
                    <Text>slug: "{hit.slug}"</Text>
                    {hit.releaseDate && (
                      <Text variant="overline">
                        Release Date: {hit.releaseDate}
                      </Text>
                    )}
                  </div>
                  ... more code
                </Flex>
              </li>
            );
          }}
        />
      </InstantSearch>
    </Gutter>
  );
};

export default PubCreateArticleTemplate;

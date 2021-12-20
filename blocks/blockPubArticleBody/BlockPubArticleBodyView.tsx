import { Box, Wisiwig } from "@sho-ai-org/pattern-library";
import Link from "next/link";
import { FC, useEffect } from "react";

import { BlockViewProps } from "../../../../../utils/typescript-utils";
import Image from "../../../Image";
import { BlockPubArticleHeaderProps } from "../blockPubArticleHeader/blockPubArticleHeader";
import { BlockPubSectionMainViewProps } from "../blockPubSectionMain/blockPubSectionMain";
import { BlockPubArticleBodyProps } from "./blockPubArticleBody";

type HeroArticleData = {
  href: string;
  title: string | undefined;
  src: string | undefined;
  releaseDate: string;
};

type TagData = {
  href: string;
  name: string;
};

const BlockPubArticleBodyView: FC<BlockViewProps<BlockPubArticleBodyProps>> = (
  props,
) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  const articleReferenceBlock = props?.listPageLocalBlocks?.items?.find(
    (block) => block.blockCategory === "PubArticleHeader",
  );
  const articleReferenceBlockData = articleReferenceBlock?.data
    ? (JSON.parse(articleReferenceBlock.data) as BlockPubArticleHeaderProps)
    : null;

  if (!articleReferenceBlock || !articleReferenceBlockData) {
    return null;
  }

  let tagListBlock: TagData[] = [];
  if (articleReferenceBlockData?.tags) {
    tagListBlock = articleReferenceBlockData?.tags.reduce(
      (tot: TagData[], tagId: string): TagData[] => {
        const tagBlock = articleReferenceBlock.listExternalBlocks?.items.find(
          (externalBlock) => externalBlock.id === tagId,
        );
        const blockTagData = tagBlock?.data
          ? (JSON.parse(tagBlock.data) as BlockPubSectionMainViewProps)
          : null;
        const name = blockTagData?.name;
        const href = tagBlock?.getPage?.slug;

        return name && href
          ? [
              ...tot,
              {
                name,
                href,
              },
            ]
          : tot;
      },
      [],
    );
  }

  const relatedArticles = articleReferenceBlock.listExternalBlocks?.items
    .reduce((tot: HeroArticleData[], block): HeroArticleData[] => {
      const articlesToAdd: HeroArticleData[] = [];
      if (
        block.blockCategory === "PubSectionMain" ||
        block.blockCategory === "PubTagHeader"
      ) {
        block.listExternalBlocks?.items.forEach((nestedBlock) => {
          if (
            nestedBlock.blockCategory === "PubArticleHeader" &&
            nestedBlock.data
          ) {
            const data = JSON.parse(
              nestedBlock.data,
            ) as BlockPubArticleHeaderProps;
            const href = nestedBlock.getPage?.slug;
            if (
              nestedBlock.releaseDate &&
              href &&
              data.image &&
              (data.section === articleReferenceBlockData.section ||
                data.tags?.find((tag) =>
                  articleReferenceBlockData.tags?.includes(tag),
                ))
            ) {
              articlesToAdd.push({
                title: data.title,
                href,
                src: data.image,
                releaseDate: nestedBlock.releaseDate,
              });
            }
          }
        });
      }
      return [...tot, ...articlesToAdd];
    }, [])
    .sort((a, b) => {
      const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date();
      const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date();
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 4);

  return (
    <div
      className="article-body wf-section"
      style={{ backgroundColor: "white" }}
    >
      <div className="progress-bar-section">
        <div className="main-container">
          <div className="article-progress-bar-title">
            <h6 className="no-bottom-margin">
              {articleReferenceBlockData.title}
            </h6>
          </div>
          <div className="article-progress-bar-container">
            <div className="article-progress-bar dan-background-brand"></div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="w-layout-grid article-grid">
          <div className="article-author-aside">
            <div className="div-block-23">
              {/* TODO: GOOGLE AD  */}
              <ins
                className="adsbygoogle"
                style={{
                  display: "block",
                }}
                data-ad-client="ca-pub-5826862484148534"
                data-ad-slot="1506808819"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          </div>
          <div className="article-container" style={{ width: "100%" }}>
            <div className="article w-richtext">
              <Box
                css={{
                  backgroundColor: "white",
                  "*": {
                    color: "#1b1b1b",
                  },
                }}
              >
                {props.data.content && (
                  <Wisiwig
                    readOnly={true}
                    initialValue={JSON.parse(props.data.content)} // TODO: need to get the proper type from wisiwig
                  />
                )}
              </Box>
            </div>
            <div className="article-tags">
              <div className="w-dyn-list">
                <div role="list" className="tag-list w-dyn-items">
                  {tagListBlock.map((el) => (
                    <div role="listitem" className="w-dyn-item" key={el.name}>
                      <Link href={el.href} passHref>
                        <a
                          className="tag w-inline-block"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className={`overline-brand no-margin ${
                              el.name?.toLocaleLowerCase() ===
                              "sponsored content"
                                ? "dan-brand"
                                : ""
                            }`}
                          >
                            {el.name}
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {!!relatedArticles?.length && (
            <div className="article-related-sidebar">
              <div className="sidebar-title">
                <div className="overline-brand muted">related articles</div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="sidebar-post-grid w-dyn-items">
                  {relatedArticles?.map((el) => (
                    <div role="listitem" className="w-dyn-item" key={el.href}>
                      <Link href={el.href} passHref>
                        <a
                          className="horizontal-article w-inline-block"
                          style={{ cursor: "pointer" }}
                        >
                          {el.src && (
                            <Box
                              className="margin-right"
                              css={{
                                width: "100%",
                                "& > div": {
                                  paddingBottom: "100%",
                                  width: "100%",
                                  height: "100%",
                                },
                              }}
                            >
                              <Image
                                alt={el.title}
                                layout="fill"
                                className="small-square-image"
                                objectFit="cover"
                                asset={{
                                  public: true,
                                  key: el.src,
                                }}
                              />
                            </Box>
                          )}
                          <h5 className="text-dark">{el.title}</h5>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockPubArticleBodyView;

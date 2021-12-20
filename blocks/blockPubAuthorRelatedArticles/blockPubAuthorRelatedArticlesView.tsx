import { Box } from "@sho-ai-org/pattern-library";
import Link from "next/link";
import { FC } from "react";

import { BlockViewProps } from "../../../../../utils/typescript-utils";
import Image from "../../../Image";
import { BlockPubArticleHeaderProps } from "../blockPubArticleHeader/blockPubArticleHeader";

type HeroArticleData = {
  href: string;
  summary: string | undefined;
  src: string | undefined;
  title: string | undefined;
  youtubeLink: string | undefined;
  sectionName: string | undefined;
  sectionHref: string | undefined;
  // sectionName: string | undefined
};

const BlockPubAuthorRelatedArticles: FC<BlockViewProps> = (props) => {
  const authorBlock = props?.listPageLocalBlocks?.items?.find(
    (block) => block.blockCategory === "PubAuthorOverview",
  );
  const authorName = authorBlock?.data
    ? JSON.parse(authorBlock?.data)?.name
    : null;

  if (!authorBlock || !authorName) {
    return null;
  }

  const articlesByAuthor = authorBlock.listExternalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === "PubArticleHeader" && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps;
        if (data?.authors?.includes(authorBlock.id) && block.releaseDate) {
          const sectionBlock = block.listExternalBlocks?.items.find(
            (externalBlock) => externalBlock.id === data.section,
          );
          const sectionName = sectionBlock?.data
            ? JSON.parse(sectionBlock.data)?.name
            : undefined;
          const href = block.getPage?.slug;
          if (href) {
            return [
              ...tot,
              {
                title: data.title,
                summary: data.summary,
                src: data.image,
                href,
                youtubeLink: data.youtubeLink,
                sectionName,
                sectionHref: sectionBlock?.getPage?.slug,
              },
            ];
          } else return tot;
        } else return tot;
      } else return tot;
    },
    [],
  );

  if (!articlesByAuthor?.length) {
    return null;
  }

  return (
    <div
      className="tag-articles section wf-section"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="main-container">
        <div className="w-dyn-list">
          <div
            role="list"
            className="wide-posts-grid-wrapper border-top w-dyn-items"
          >
            {articlesByAuthor.map((el) => (
              <Link href={el.href} key={el.href} passHref>
                <div
                  role="listitem"
                  className="w-dyn-item"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="w-layout-grid wide-post-grid"
                    style={{ display: el.src ? "grid" : "block" }}
                  >
                    {el.src && (
                      <a className="post-thumbnail-link-block w-inline-block">
                        <Box
                          css={{
                            width: "100%",
                            "& > div": {
                              paddingBottom: "60%",
                              width: "100%",
                              height: "100%",
                            },
                          }}
                        >
                          <Image
                            alt={el.title}
                            layout="fill"
                            objectFit="cover"
                            asset={{
                              public: true,
                              key: el.src,
                            }}
                          />
                        </Box>
                        {el.youtubeLink && (
                          <div className="video-play-icon centered-icon">
                            <img src="images/Icon-Play.svg" alt="play" />
                          </div>
                        )}
                      </a>
                    )}
                    <div className="post-preview-title wide-post-grid-title">
                      {el.sectionHref && el.sectionName && (
                        <Link href={el.sectionHref} passHref>
                          <a
                            className="w-inline-block"
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className={`overline-brand ${
                                el.sectionName?.toLocaleLowerCase() ===
                                "sponsored content"
                                  ? "dan-brand"
                                  : ""
                              }`}
                            >
                              {el.sectionName}
                            </div>
                          </a>
                        </Link>
                      )}
                      <div
                        className="w-inline-block"
                        style={{ display: "block" }}
                      >
                        <h2>{el.title}</h2>
                        <div className="post-preview-summary">{el.summary}</div>
                        <div className="author">
                          <div className="caption-brand">by </div>
                          <div className="caption-brand">{authorName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockPubAuthorRelatedArticles;

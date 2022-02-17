import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubSectionRelatedArticlesCustomPageData } from './blockPubSectionRelatedArticles'

const BlockPubSectionRelatedArticlesView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubSectionRelatedArticlesCustomPageData
  }>
> = props => {
  const { articlesBySection, sectionName } = props.blockCustomData

  if (!articlesBySection?.length || !sectionName) {
    return null
  }

  return (
    <div className="section-related-stories section wf-section" style={{ backgroundColor: '#fff' }}>
      <div className="main-container">
        <div className="bordered-title">
          <h3 className="bordered-title-heading h6-brand">Latest</h3>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="wide-posts-grid-wrapper w-dyn-items">
            {articlesBySection.slice(0, 4).map(el => (
              <div role="listitem" className="w-dyn-item" key={el.href}>
                <div className="w-layout-grid wide-post-grid">
                  <Link passHref href={el.href}>
                    <a className="horizontal-article-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                      <Box
                        css={{
                          width: '100% !important',
                        }}>
                        <Image
                          alt={el.title}
                          layout="responsive"
                          width={el.imageWidth}
                          height={el.imageHeight}
                          asset={{
                            public: true,
                            key: el.imageSrc,
                          }}
                        />
                      </Box>
                      {el.youtubeLink && (
                        <div className="video-play-icon centered-icon">
                          <div data-w-id="d50cd0e6-45a8-2e9e-a64a-f2b2826d1a0b" className="icon sue-brand w-embed">
                            <span className="material-icons-outlined" style={{ fontSize: '60px' }}>
                              play_circle_filled
                            </span>
                          </div>
                        </div>
                      )}
                    </a>
                  </Link>
                  <div className="post-preview-title wide-post-grid-title">
                    <a className="w-inline-block">
                      <div className="overline-brand">{sectionName}</div>
                    </a>
                    <Link passHref href={el.href}>
                      <a className="post-link-block _70ch w-inline-block">
                        <h3>{el.title}</h3>
                        <div className="post-preview-summary">{el.summary}</div>
                        <div className="hr qui-background-brand"></div>
                        <div className="_20px"></div>
                      </a>
                    </Link>

                    {el.byline ? (
                      <div className="author small-text">
                        <div className="overline-brand qui-brand no-margin">Author</div>
                        <div className="h5-brand no-margin">{el.byline}</div>
                      </div>
                    ) : (
                      el.authorHref && (
                        <Link href={el.authorHref} passHref>
                          <a className="link-block-2 w-inline-block" style={{ cursor: 'pointer' }}>
                            {el?.authorPicture && (
                              <Box
                                css={{
                                  width: '90px',
                                  '& > div': {
                                    paddingBottom: '100%',
                                    width: '100%',
                                    height: '100%',
                                  },
                                }}>
                                <Image
                                  className="avatar small"
                                  alt="author picture"
                                  layout="fill"
                                  objectFit="cover"
                                  asset={{
                                    public: true,
                                    key: el.authorPicture,
                                  }}
                                />
                              </Box>
                            )}
                            <div className="_20px edit"></div>
                            <div className="author small-text">
                              <div className="overline-brand qui-brand no-margin">Author</div>
                              <div className="h5-brand no-margin">{el.authorName}</div>
                              <div className="caption-brand muted">{el.authorPosition}</div>
                            </div>
                          </a>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubSectionRelatedArticlesView

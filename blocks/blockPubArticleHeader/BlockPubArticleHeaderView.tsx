import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleCustomPageData } from './blockPubArticleHeader'

const BlockPubArticleHeader: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleCustomPageData
  }>
> = props => {
  const { sectionName, sectionSlug, day, month, year, authorBlocksData, title, youtubeLink, summary, byline, image } =
    props.blockCustomData

  return (
    <>
      {/* ARTICLE HEADER  */}
      <div className="article-header wf-section" style={{ backgroundColor: '#fff' }}>
        <div className="main-container">
          <div className="section">
            <div className="post-title-container">
              <div className="div-block-16">
                {sectionSlug && (
                  <>
                    <Link href={sectionSlug}>
                      <a
                        className="overline-brand no-margin ben-brand"
                        style={{ cursor: sectionSlug ? 'pointer' : 'default' }}>
                        {sectionName}
                      </a>
                    </Link>
                    <div className="_5px"></div>
                    <div className="overline-brand no-margin"> | </div>
                    <div className="_5px"></div>
                  </>
                )}
                <div className="overline-brand opacity-90">
                  {monthNames[month]} {day}, {year}
                </div>
              </div>
              <h1 className="h2-brand" data-w-id="718e5325-78f5-ca43-db66-00de300264a3">
                {title}
              </h1>
              <div className="body1-brand qui-brand">{summary}</div>
              {!!authorBlocksData?.length &&
                authorBlocksData.map(authorBlock => {
                  return authorBlock.slug ? (
                    <Link href={authorBlock.slug} key={authorBlock.id}>
                      <a
                        className="link-block-2 w-inline-block"
                        style={{ cursor: sectionSlug ? 'pointer' : 'default', marginBottom: '10px' }}>
                        {authorBlock?.picture && (
                          <>
                            <Box
                              css={{
                                width: '90px',
                                height: '90px',
                                marginBottom: '10px',
                                borderRadius: '50%',
                                '& > div': {
                                  paddingBottom: '100%',
                                  width: '100%',
                                  height: '100%',
                                  span: {
                                    borderRadius: '50%',
                                  },
                                },
                              }}>
                              <Image
                                alt={authorBlock?.name}
                                layout="fill"
                                objectFit="cover"
                                asset={{
                                  public: true,
                                  key: authorBlock.picture,
                                }}
                              />
                            </Box>
                            <div className="_20px edit"></div>
                          </>
                        )}
                        {authorBlock?.name && (
                          <>
                            <div className="author small-text">
                              <div className="no-margin">{authorBlock?.name}</div>
                              {authorBlock?.position && (
                                <div className="caption-brand muted">{authorBlock?.position}</div>
                              )}
                            </div>
                          </>
                        )}
                      </a>
                    </Link>
                  ) : null
                })}

              {byline && (
                <div className="author small-text">
                  <div className="no-margin">
                    <div className="h5-brand muted">{byline}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!youtubeLink && image && (
        <div style={{ overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#fff' }}>
            <div className="article-media wf-section">
              <Box
                css={{
                  width: '60%',
                  margin: '0 auto',
                  '& > div': {
                    paddingBottom: '66%',
                    width: '100%',
                    height: '100%',
                  },
                }}>
                <Image
                  className="main-post-image"
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  asset={{
                    public: true,
                    key: image,
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      )}
      {youtubeLink && (
        <div className="article-media wf-section">
          <div className="video-wrapper" style={{ height: 'auto' }}>
            <div style={{ paddingTop: '56.17021276595745%', height: '100%' }} className="article-video w-video w-embed">
              <iframe
                className="embedly-embed"
                src={youtubeLink}
                scrolling="no"
                title="YouTube embed"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlockPubArticleHeader

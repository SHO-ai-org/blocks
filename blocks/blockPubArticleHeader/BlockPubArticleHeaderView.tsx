import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubAuthorOverviewDataProps } from '../blockPubAuthorOverview/blockPubAuthorOverview'
import { BlockPubArticleHeaderProps } from './blockPubArticleHeader'

const BlockPubArticleHeader: FC<BlockViewProps<BlockPubArticleHeaderProps>> = props => {
  // console.log('props article Header', props)

  const sectionBlock = props?.listExternalBlocks?.items?.find(block => block.id === props.data.section)
  const sectionName = sectionBlock?.data ? JSON.parse(sectionBlock?.data)?.name : null

  const authorBlock = props.listExternalBlocks?.items?.filter(block => block.blockCategory === 'PubAuthorOverview')?.[0]
  const authorBlockData = authorBlock?.data ? (JSON.parse(authorBlock.data) as BlockPubAuthorOverviewDataProps) : null

  const releaseDate = props.block?.releaseDate || Date.now()
  const date = new Date(releaseDate)
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth()

  // console.log(props.data.articleAccess)

  return (
    <>
      {/* ARTICLE HEADER  */}
      <div className="article-header wf-section" style={{ backgroundColor: '#fff' }}>
        <div className="main-container">
          <div className="section">
            <div className="post-title-container">
              <div className="div-block-16">
                <Link href={sectionBlock?.getPage?.slug || '#'}>
                  <a
                    className="overline-brand no-margin ben-brand"
                    style={{ cursor: sectionBlock?.getPage?.slug ? 'pointer' : 'default' }}>
                    {sectionName}
                  </a>
                </Link>
                <div className="_5px"></div>
                <div className="overline-brand no-margin"> | </div>
                <div className="_5px"></div>
                <div className="overline-brand opacity-50">
                  {monthNames[month]} {day}, {year}
                </div>
              </div>
              <h2 data-w-id="718e5325-78f5-ca43-db66-00de300264a3">{props.data.title}</h2>
              <div className="subtitle1-brand qui-brand">{props.data.summary}</div>
              {props.data.byline ? (
                <div className="author small-text">
                  <div className="no-margin">{props.data.byline}</div>
                </div>
              ) : (
                authorBlock &&
                authorBlock?.getPage?.slug && (
                  <Link href={authorBlock.getPage.slug}>
                    <a
                      className="link-block-2 w-inline-block"
                      style={{ cursor: sectionBlock?.getPage?.slug ? 'pointer' : 'default' }}>
                      {authorBlockData?.picture && (
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
                            alt={authorBlockData?.name}
                            layout="fill"
                            objectFit="cover"
                            asset={{
                              public: true,
                              key: authorBlockData.picture,
                            }}
                          />
                        </Box>
                      )}
                      {authorBlockData?.name && (
                        <>
                          <div className="_20px edit"></div>
                          <div className="author small-text">
                            <div className="no-margin">{authorBlockData?.name}</div>
                            {authorBlockData?.position && (
                              <div className="caption-brand muted">{authorBlockData?.position}</div>
                            )}
                          </div>
                        </>
                      )}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {!props.data?.youtubeLink && props.data?.image && (
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
                  alt={props.data.title}
                  layout="fill"
                  objectFit="cover"
                  asset={{
                    public: true,
                    key: props.data.image,
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      )}
      {props.data?.youtubeLink && (
        <div className="article-media wf-section">
          <div className="video-wrapper" style={{ height: 'auto' }}>
            <div style={{ paddingTop: '56.17021276595745%', height: '100%' }} className="article-video w-video w-embed">
              <iframe
                className="embedly-embed"
                src={props.data?.youtubeLink}
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

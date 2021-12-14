import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubAuthorOverviewDataProps } from '../blockPubAuthorOverview/blockPubAuthorOverview'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type HeroArticleData = {
  date: Date
  title: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
  youtubeLink: string | undefined
  summary: string | undefined
  sectionName: string | undefined
  sectionHref: string | null | undefined
  authorName: string | undefined
  authorPosition: string | undefined
  authorhref: string | undefined
  authorPicture: string | undefined
  byline: string | undefined
}

const BlockPubLatestArticlesView: FC<BlockViewProps> = props => {
  const latestArticles = props?.listPageAdditionalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data && block.releaseDate) {
        const blockArticleData = JSON.parse(block.data) as BlockPubArticleHeaderProps
        const date = new Date(block?.releaseDate)
        const day = date.getUTCDate()
        const year = date.getUTCFullYear()
        const month = date.getUTCMonth() //months from 1-12

        const blockAuthor = block.listExternalBlocks?.items?.find(
          externalBlock => externalBlock.blockCategory === 'PubAuthorOverview',
        )
        const blockAuthorData = blockAuthor?.data
          ? (JSON.parse(blockAuthor.data) as BlockPubAuthorOverviewDataProps)
          : null

        const blockSection = block.listExternalBlocks?.items?.find(
          externalBlock => externalBlock.blockCategory === 'PubSectionMain',
        )
        const blockSectionData = blockSection?.data
          ? (JSON.parse(blockSection.data) as BlockPubSectionMainViewProps)
          : null
        const href = block.getPage?.slug

        if (href) {
          return [
            ...tot,
            {
              date,
              title: blockArticleData.title,
              day,
              year,
              month,
              src: blockArticleData.image,
              summary: blockArticleData.summary,
              youtubeLink: blockArticleData.youtubeLink,
              href,
              sectionName: blockSectionData?.name,
              sectionHref: blockSection?.getPage?.slug,
              authorName: blockAuthorData?.name,
              authorPosition: blockAuthorData?.position,
              authorhref: blockAuthor?.getPage?.slug,
              authorPicture: blockAuthorData?.picture,
              byline: blockArticleData.byline,
            },
          ]
        } else return tot
      } else return tot
    },
    [],
  )

  return (
    <div className="home-section section wf-section" style={{ backgroundColor: 'white' }}>
      <div className="main-container">
        <div className="w-dyn-list">
          <div role="list" className="wide-posts-grid-wrapper w-dyn-items">
            {latestArticles?.map(el => (
              <div role="listitem" className="w-dyn-item" key={el.href}>
                <div className="wide-post-grid">
                  <Link href={el.href}>
                    <a className="post-thumbnail-link-block w-inline-block">
                      {el.src && (
                        <Box
                          css={{
                            width: '100%',
                            '& > div': {
                              paddingBottom: '66%',
                              width: '100%',
                              height: '100%',
                            },
                          }}>
                          <Image
                            className="corners"
                            alt={el.title}
                            layout="fill"
                            objectFit="cover"
                            asset={{
                              public: true,
                              key: el.src,
                            }}
                          />
                        </Box>
                      )}
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
                  <div className="post-preview-title reduced-margin">
                    {el.sectionHref && (
                      <Link href={el.sectionHref}>
                        <a className="w-inline-block">
                          <div className="div-block-16">
                            <div className="overline-brand no-margin">{el.sectionName}</div>
                            <div className="_5px"></div>
                            <div className="overline-brand no-margin"> | </div>
                            <div className="_5px"></div>
                            <div className="caption-brand no-margin cal-brand">
                              {monthNames[el.month]} {el.day}, {el.year}
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                    <Link href={el.href}>
                      <a className="post-link-block w-inline-block">
                        <h3>{el.title}</h3>
                        <div className="hr qui-background-brand"></div>
                        <div className="_20px"></div>
                        <div className="post-preview-summary">{el.summary}</div>
                      </a>
                    </Link>
                    {el.byline ? (
                      <div className="author small-text">
                        <div className="overline-brand qui-brand no-margin">Author</div>
                        <div className="h5-brand no-margin">{el.byline}</div>
                      </div>
                    ) : (
                      el.authorhref && (
                        <Link href={el.authorhref}>
                          <a className="link-block-2 w-inline-block">
                            {el?.authorPicture && (
                              <Box
                                css={{
                                  width: '120px',
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
                            <div className="_20px"></div>
                            <div className="author small-text">
                              <div className="overline-brand qui-brand no-margin">Author</div>
                              <div className="h5-brand no-margin">{el.authorName}</div>
                              <div className="caption-brand opacity-50">{el.authorPosition}</div>
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

export default BlockPubLatestArticlesView

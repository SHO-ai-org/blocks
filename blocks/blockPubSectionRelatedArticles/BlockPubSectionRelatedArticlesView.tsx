import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubAuthorOverviewDataProps } from '../blockPubAuthorOverview/blockPubAuthorOverview'

type HeroArticleData = {
  date: Date
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string
  href: string
  youtubeLink: string | undefined
  authorName: string | undefined
  authorPicture: string | undefined
  authorHref: string | undefined
  byline: string | undefined
  authorPosition: string | undefined
}

const BlockPubSectionRelatedArticlesView: FC<BlockViewProps> = props => {
  const sectionBlock = props?.listPageLocalBlocks?.items?.find(block => block.blockCategory === 'PubSectionMain')

  if (!sectionBlock) {
    return null
  }

  // in BlockPubSectionTopStories, we return the first 5 articles that are top stories
  // since we don't want those stories to be repeated, we filter out the 5 top stories in the section
  let topStoryCount = 0

  const articlesBySection = sectionBlock.listExternalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps
        if (data?.section === sectionBlock.id && block.releaseDate && data.image) {
          // If the article is a top story and it is the first 5 ones, it will be displayed in BlockPubSectionStoriesView block
          // so skip it.
          if (data.externalDisplay === 'topStory' && topStoryCount < 5) {
            topStoryCount = topStoryCount + 1
            return tot
          } else {
            const date = new Date(block.releaseDate)
            const day = date.getUTCDate()
            const year = date.getUTCFullYear()
            const month = date.getUTCMonth() //months from 1-12

            let authorName
            let authorPicture
            let authorPosition
            let authorHref

            if (data.authors?.length) {
              const authorBlock = block.listExternalBlocks?.items.find(
                externalBlock => externalBlock.id === data.authors?.[0],
              )
              const authorBlockData = authorBlock?.data
                ? (JSON.parse(authorBlock.data) as BlockPubAuthorOverviewDataProps)
                : null

              authorName = authorBlockData?.name
              authorPicture = authorBlockData?.picture
              authorPosition = authorBlockData?.position
              authorHref = authorBlock?.getPage?.slug
            }

            const href = block.getPage?.slug

            if (href) {
              return [
                ...tot,
                {
                  date,
                  title: data.title,
                  summary: data.summary,
                  youtubeLink: data.youtubeLink,
                  day,
                  year,
                  month,
                  src: data.image,
                  href,
                  authorName,
                  authorPicture,
                  authorHref,
                  byline: data.byline,
                  authorPosition,
                },
              ]
            } else return tot
          }
        } else return tot
      } else return tot
    },
    [],
  )

  if (!articlesBySection?.length) {
    return null
  }

  const sectionName = sectionBlock.data ? JSON.parse(sectionBlock.data)?.name : ''

  return (
    <div className="section-related-stories section wf-section" style={{ backgroundColor: '#fff' }}>
      <div className="main-container">
        <div className="bordered-title">
          <h6 className="bordered-title-heading">Latest</h6>
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
                          '& > div': {
                            paddingBottom: '60%',
                            width: '100%',
                            height: '100%',
                          },
                        }}>
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

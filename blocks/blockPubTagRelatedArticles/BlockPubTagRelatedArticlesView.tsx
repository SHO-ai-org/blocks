import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubAuthorOverviewDataProps } from '../blockPubAuthorOverview/blockPubAuthorOverview'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type HeroArticleData = {
  href: string
  summary: string | undefined
  src: string
  title: string | undefined
  youtubeLink: string | undefined
  authorName: string | undefined
  authorHref: string | undefined
  byline: string | undefined
  sectionName: string | undefined
  sectionHref: string | undefined
}

const BlockPubTargArticlesView: FC<BlockViewProps> = props => {
  const tagBlock = props?.listPageLocalBlocks?.items?.find(block => block.blockCategory === 'PubTagHeader')

  if (!tagBlock) {
    return null
  }

  const articlesByTag = tagBlock.listExternalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps
        if (data?.tags?.includes(tagBlock.id) && block.releaseDate && data.image) {
          const authorBlock = block.listExternalBlocks?.items.find(
            externalBlock => externalBlock.id === data.authors?.[0],
          )
          const authorBlockData = authorBlock?.data
            ? (JSON.parse(authorBlock.data) as BlockPubAuthorOverviewDataProps)
            : null
          const authorName = authorBlockData?.name
          const authorHref = authorBlock?.getPage?.slug

          const sectionBlock = block.listExternalBlocks?.items.find(externalBlock => externalBlock.id === data.section)
          const sectionBlockData = sectionBlock?.data
            ? (JSON.parse(sectionBlock.data) as BlockPubSectionMainViewProps)
            : null
          const sectionName = sectionBlockData?.name
          const sectionHref = sectionBlock?.getPage?.slug

          const href = block.getPage?.slug
          if (href) {
            return [
              ...tot,
              {
                title: data.title,
                summary: data.summary,
                src: data.image,
                href,
                youtubeLink: data.youtubeLink,
                authorName,
                authorHref,
                byline: data.byline,
                sectionName,
                sectionHref,
              },
            ]
          } else return tot
        } else return tot
      } else return tot
    },
    [],
  )

  if (!articlesByTag?.length) {
    return null
  }

  return (
    <div className="tag-articles section wf-section" style={{ backgroundColor: '#fff' }}>
      <div className="main-container">
        <div className="w-dyn-list">
          <div role="list" className="wide-posts-grid-wrapper border-top w-dyn-items">
            {articlesByTag.map(el => (
              <Link href={el.href} key={el.href} passHref>
                <div role="listitem" className="w-dyn-item" style={{ cursor: 'pointer' }}>
                  <div className="w-layout-grid wide-post-grid">
                    <a className="post-thumbnail-link-block w-inline-block">
                      <Box
                        css={{
                          width: '100%',
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
                          <img src="images/Icon-Play.svg" alt="" />
                        </div>
                      )}
                    </a>
                    <div className="post-preview-title wide-post-grid-title">
                      <Link href={el.sectionHref || '#'} passHref>
                        <a className="w-inline-block" style={{ cursor: el.sectionHref ? 'pointer' : 'default' }}>
                          <div
                            className={`overline-brand ${
                              el.sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''
                            }`}>
                            {el.sectionName}
                          </div>
                        </a>
                      </Link>
                      <Link href={el.href} passHref>
                        <a className="post-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                          <h2>{el.title}</h2>
                          <div className="post-preview-summary">{el.summary}</div>
                          <div className="author">
                            <div className="caption-brand">by </div>
                            {el.byline ? (
                              <div className="caption-brand">{el.byline}</div>
                            ) : (
                              el.authorHref && (
                                <Link href={el.authorHref} passHref>
                                  <div className="caption-brand">{el.authorName}</div>
                                </Link>
                              )
                            )}
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubTargArticlesView

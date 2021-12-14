import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type HeroArticleData = {
  href: string
  src: string
  title: string | undefined
  youtubeLink: string | undefined
  sectionName: string | undefined
  day: string | number
  year: string | number
  month: string | number
  sectionHref: string | undefined
}

const BlockPubArticleRelatedArticlesView: FC<BlockViewProps> = props => {
  const articleReferenceBlock = props?.listPageLocalBlocks?.items?.find(
    block => block.blockCategory === 'PubArticleHeader',
  )
  const articleReferenceBlockData = articleReferenceBlock?.data
    ? (JSON.parse(articleReferenceBlock.data) as BlockPubArticleHeaderProps)
    : null

  if (!articleReferenceBlock || !articleReferenceBlockData) {
    return null
  }

  const relatedArticles = props?.listPageAdditionalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (tot.length === 4) return tot // take only the 1st 4
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps

        if (
          block.releaseDate &&
          data.image &&
          (data.section === articleReferenceBlockData.section ||
            data.tags?.find(tag => articleReferenceBlockData.tags?.includes(tag)))
        ) {
          const sectionBlock = block.listExternalBlocks?.items.find(externalBlock => externalBlock.id === data.section)
          const sectionBlockData = sectionBlock?.data
            ? (JSON.parse(sectionBlock.data) as BlockPubSectionMainViewProps)
            : null
          const sectionName = sectionBlockData?.name
          const sectionHref = sectionBlock?.getPage?.slug

          const date = new Date(block.releaseDate)
          const day = date.getUTCDate()
          const year = date.getUTCFullYear()
          const month = date.getUTCMonth()
          const href = block.getPage?.slug

          if (href) {
            return [
              ...tot,
              {
                title: data.title,
                src: data.image,
                href,
                youtubeLink: data.youtubeLink,
                sectionName,
                sectionHref,
                day,
                year,
                month,
              },
            ]
          } else return tot
        } else return tot
      } else return tot
    },
    [],
  )

  if (!relatedArticles?.length) {
    return null
  }

  return (
    <div className="article-related roy-background-brand section wf-section">
      <div className="main-container">
        <div className="bordered-title">
          <h3 className="bordered-title-heading">Related articles</h3>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="grid-thirds w-dyn-items">
            {relatedArticles.map(el => (
              <div role="listitem" className="w-dyn-item" key={el.href}>
                <div className="grid-post">
                  <Link href={el.href} passHref>
                    <a className="post-thumbnail-link-block w-inline-block" style={{ cursor: 'pointer' }}>
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
                  </Link>
                  <div className="post-preview-title reduced-margin">
                    <Link href={el.sectionHref || '#'} passHref>
                      <a className="w-inline-block" style={{ cursor: el.sectionHref ? 'pointer' : 'default' }}>
                        <div className="_20px"></div>
                        <div className="div-block-16">
                          <div
                            className={`overline-brand no-margin ${
                              el.sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''
                            }`}>
                            {el.sectionName}
                          </div>
                          <div className="_5px"></div>
                          <div className="overline-brand no-margin"> | </div>
                          <div className="_5px"></div>
                          <div className="caption-brand no-margin cal-brand">
                            {monthNames[el.month]} {el.day}, {el.year}
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link href={el.href} passHref>
                      <a className="post-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                        <h4 className="medium-heading">{el.title}</h4>
                      </a>
                    </Link>
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

export default BlockPubArticleRelatedArticlesView

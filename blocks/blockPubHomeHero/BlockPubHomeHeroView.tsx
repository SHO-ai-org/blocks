import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'
import { monthNames } from '../../../../../utils/date-utils'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type HeroArticleData = {
  date: Date
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
  sectionName: string | undefined
}

const BlockPubHomeHeroView: FC<BlockViewProps> = props => {
  const articlesForHeroImage = props?.listPageAdditionalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (tot.length < 4 && block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps
        if (data?.externalDisplay === 'hero' && block.releaseDate) {
          const date = new Date(block.releaseDate)
          const day = date.getUTCDate()
          const year = date.getUTCFullYear()
          const month = date.getUTCMonth() //months from 1-12

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
                title: data.title,
                summary: data.summary,
                day,
                year,
                month,
                src: data.image,
                href,
                sectionName: blockSectionData?.name,
              },
            ]
          } else return tot
        } else return tot
      } else return tot
    },
    [],
  )

  if (!articlesForHeroImage?.length) {
    return null
  }

  return (
    <div className="home-hero w-dyn-list" style={{ backgroundColor: '#fff' }}>
      <div role="list" className="collection-list w-dyn-items">
        {articlesForHeroImage.map((el: HeroArticleData) => (
          <div role="listitem" className="collection-item-3 w-dyn-item" key={el.src}>
            <Link href={el.href} passHref>
              <a className="fullscreen-post-link-block w-inline-block">
                {el.src && (
                  <Box
                    css={{
                      width: '100%',
                      height: '70vh',
                      '& > div': {
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
                )}
                <div className="fullscreen-title-container">
                  <div>
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
                    <h2>{el.title}</h2>
                    <div className="_70ch">{el.summary}</div>
                    <div className="body1-brand dan-brand">Read more</div>
                  </div>
                </div>
                <div className="scrim"></div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlockPubHomeHeroView

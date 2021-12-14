import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'
import { BlockPubArticlesBySectionProps } from './blockPubArticlesBySection'

type HeroArticleData = {
  date: Date
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
}

const BlockPubArticlesBySectionView: FC<BlockViewProps<BlockPubArticlesBySectionProps>> = props => {
  if (!props.data?.section) {
    return null
  }

  let sectionName: string | undefined
  let sectionHref: string | undefined

  const articlesBySection = props?.listPageAdditionalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps
        if (
          data?.externalDisplay !== 'topStory' &&
          data?.externalDisplay !== 'hero' &&
          block.releaseDate &&
          data.section === props.data.section
        ) {
          const date = new Date(block.releaseDate)
          const day = date.getUTCDate()
          const year = date.getUTCFullYear()
          const month = date.getUTCMonth() //months from 1-12
          const href = block.getPage?.slug

          const blockSection = block.listExternalBlocks?.items?.find(
            externalBlock => externalBlock.blockCategory === 'PubSectionMain',
          )
          const blockSectionData = blockSection?.data
            ? (JSON.parse(blockSection.data) as BlockPubSectionMainViewProps)
            : null

          if (!sectionName && blockSectionData?.name) {
            sectionName = blockSectionData?.name
          }

          if (!sectionHref && blockSection?.getPage?.slug) {
            sectionHref = blockSection?.getPage?.slug
          }

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
              },
            ]
          } else return tot
        } else return tot
      } else return tot
    },
    [],
  )

  if (!sectionName || !sectionHref || !articlesBySection?.length) return null

  const topArticlesBySection = articlesBySection.slice(0, 4)

  return (
    <div className="home-section section wf-section" style={{ background: '#fff' }}>
      <div className="main-container">
        <div className="bordered-title">
          <Link href={sectionHref}>
            <a className="w-inline-block" style={{ cursor: 'pointer' }}>
              <h6 className={`${sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''}`}>
                {sectionName}
              </h6>
            </a>
          </Link>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="grid-thirds w-dyn-items">
            {topArticlesBySection.map(el => (
              <div role="listitem" className="w-dyn-item" key={el.href}>
                <div className="grid-post">
                  <Link href={el.href} passHref>
                    <a className="w-inline-block" style={{ cursor: 'pointer' }}>
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
                      <div className="_20px"></div>
                    </a>
                  </Link>
                  <div className="post-preview-title reduced-margin">
                    {sectionHref && (
                      <Link href={sectionHref}>
                        <a className="w-inline-block" style={{ cursor: 'pointer' }}>
                          <div className="div-block-16">
                            <div className="overline-brand no-margin">{sectionName}</div>
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
                    <Link href={el.href} passHref>
                      <a className="post-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                        <h5>{el.title}</h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="center-align">
          <div className="_40px"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link href={sectionHref}>
                  <a className="button button-brand button-secondary-brand sue-brand w-button">
                    View all {sectionName}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubArticlesBySectionView

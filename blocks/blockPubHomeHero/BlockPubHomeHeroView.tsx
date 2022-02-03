import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubHomeHeroCustomPageData } from './blockPubHomeHero'

const BlockPubHomeHeroView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubHomeHeroCustomPageData
  }>
> = props => {
  const { articlesForHeroImage } = props.blockCustomData

  if (!articlesForHeroImage?.length) {
    return null
  }

  return (
    <div className="home-hero w-dyn-list" style={{ backgroundColor: '#fff' }}>
      <div role="list" className="collection-list w-dyn-items">
        {articlesForHeroImage.map(el => (
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
                      <div className="overline-brand opacity-50 no-margin">
                        {monthNames[el.month]} {el.day}, {el.year}
                      </div>
                    </div>
                    <h2 style={{ maxWidth: '900px' }}>{el.title}</h2>
                    <div className="_70ch">{el.summary}</div>
                    <div className="body2-brand dan-brand">Read more</div>
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

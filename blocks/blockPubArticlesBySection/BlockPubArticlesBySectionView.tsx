import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticlesBySectionProps, PubArticlesBySectionCustomDataProps } from './blockPubArticlesBySection'

const BlockPubArticlesBySectionView: FC<
  BlockViewProps<{
    ShapeOfBlockDataInDB: BlockPubArticlesBySectionProps
    ShapeOfCustomPropsDerivedFromPageData: PubArticlesBySectionCustomDataProps
  }>
> = props => {
  const { topArticlesBySection, sectionName, sectionHref } = props.blockCustomData

  if (!sectionName || !sectionHref || !topArticlesBySection?.length) return null

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
                            <div className="overline-brand opacity-50 no-margin">
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

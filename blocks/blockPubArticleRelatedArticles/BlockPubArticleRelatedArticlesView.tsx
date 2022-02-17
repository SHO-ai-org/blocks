import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleRelatedArticlesCustomPageData } from './blockPubArticleRelatedArticles'

const BlockPubArticleRelatedArticlesView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleRelatedArticlesCustomPageData
  }>
> = props => {
  const { articlesToAddSorted } = props.blockCustomData
  console.log('articlesToAddSorted', articlesToAddSorted)

  if (!articlesToAddSorted?.length) {
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
            {articlesToAddSorted.map(el => (
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
                    <a className="w-inline-block" style={{ cursor: el.sectionHref ? 'pointer' : 'default' }}>
                      <div className="_20px"></div>
                      <div className="div-block-16">
                        {((el.sectionName && el.sectionHref) || (el.tagName && el.tagHref)) && (
                          <Link href={el.sectionHref || el.tagHref || '#'} passHref>
                            <>
                              {el.sectionName && el.sectionHref ? (
                                <div
                                  className={`overline-brand no-margin ${
                                    el.sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''
                                  }`}>
                                  {el.sectionName}
                                </div>
                              ) : (
                                <div className="tag w-inline-block" style={{ cursor: 'pointer' }}>
                                  <div
                                    className={`overline-brand no-margin ${
                                      el.tagName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''
                                    }`}>
                                    {el.tagName}
                                  </div>
                                </div>
                              )}
                              <div className="_5px"></div>
                              <div className="overline-brand no-margin"> | </div>
                            </>
                          </Link>
                        )}
                        <div className="_5px"></div>
                        <div className="overline-brand opacity-90 no-margin">
                          {monthNames[el.month]} {el.day}, {el.year}
                        </div>
                      </div>
                    </a>
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

import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubMediaTopStorieCustomPageData } from './blockPubMediaTopStories'

const BlockPubMediaTopStoriesView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubMediaTopStorieCustomPageData
  }>
> = props => {
  const { topStoryArticlesWithYoutubeLink } = props.blockCustomData

  if (!topStoryArticlesWithYoutubeLink?.length) {
    return null
  }

  const featuredArticle = topStoryArticlesWithYoutubeLink[0]
  const latestVideoArticles = topStoryArticlesWithYoutubeLink.slice(1, 4)

  return (
    <div className="home-media section ota-background-brand sue-brand wf-section">
      <div className="main-container">
        <div className="w-layout-grid video-grid">
          <div>
            <div className="bordered-title white">
              <h6>Media gallery</h6>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link href={featuredArticle.href} passHref>
                    <a className="video-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                      {featuredArticle.src && (
                        <Box
                          css={{
                            width: '100%',
                            '& > div': {
                              paddingBottom: '100%',
                              width: '100%',
                              height: '100%',
                            },
                          }}>
                          <Image
                            alt={featuredArticle.title}
                            layout="fill"
                            objectFit="cover"
                            asset={{
                              public: true,
                              key: featuredArticle.src,
                            }}
                          />
                        </Box>
                      )}
                      <div className="scrim video-scrim"></div>
                      <div className="icon edit-aa w-embed">
                        <span className="material-icons-outlined" style={{ fontSize: '60px' }}>
                          play_circle_filled
                        </span>
                      </div>
                      <div className="video-link-block-title edit-visibility">
                        <div data-w-id="cf1489ce-262e-86c7-c4b4-f0a72439343a" className="icon w-embed">
                          <span className="material-icons-outlined" style={{ fontSize: '60px' }}>
                            play_circle_filled
                          </span>
                        </div>
                        <div className="_20px"></div>
                        <div>
                          <div className="div-block-16">
                            <div className="overline-brand no-margin">{featuredArticle.sectionName}</div>
                            <div className="_5px"></div>
                            <div className="overline-brand no-margin"> | </div>
                            <div className="_5px"></div>
                            <div className="overline-brand opacity-50 no-margin">
                              {monthNames[featuredArticle.month]} {featuredArticle.day}, {featuredArticle.year}
                            </div>
                          </div>
                          <h3 className="no-margin">{featuredArticle.title}</h3>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {!!latestVideoArticles.length && (
            <div>
              <div className="bordered-title white">
                <h6>Latest</h6>
              </div>
              <div className="w-dyn-list">
                {latestVideoArticles.map(el => (
                  <div role="list" className="video-grid-list w-dyn-items" key={el.href}>
                    <div role="listitem" className="w-dyn-item">
                      <div className="horizontal-video-post">
                        {el.src && (
                          <Link href={el.href} passHref>
                            <a className="video-thumbnail-link w-inline-block" style={{ cursor: 'pointer' }}>
                              <Box
                                className="video-thumbnail"
                                css={{
                                  width: '138px',
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
                              <div className="video-play-icon small sue-brand">
                                <div data-w-id="cf1489ce-262e-86c7-c4b4-f0a724393453" className="icon w-embed">
                                  <span className="material-icons-outlined" style={{ fontSize: '60px' }}>
                                    play_circle_filled
                                  </span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        )}
                        <div>
                          {el.sectionHref && (
                            <Link href={el.sectionHref} passHref>
                              <a className="text-white w-inline-block" style={{ cursor: 'pointer' }}>
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
                              </a>
                            </Link>
                          )}
                          <Link href={el.href} passHref>
                            <a className="text-white w-inline-block" style={{ cursor: 'pointer' }}>
                              <h5>{el.title}</h5>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockPubMediaTopStoriesView

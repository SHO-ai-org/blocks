import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { monthNames } from '../../../../../utils/date-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubHomeTopStoriesCustomPageData } from './blockPubHomeTopStories'

const BlockPubHomeTopStoriesView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubHomeTopStoriesCustomPageData
  }>
> = props => {
  const { topStoryArticles } = props.blockCustomData

  if (!topStoryArticles?.length) {
    return null
  }

  const featuredArticle = topStoryArticles?.[0]
  const smallFeaturedArticles = topStoryArticles?.slice(1, 5)
  const adSidebarArticles = topStoryArticles?.slice(5, 8)
  const lastArticle = topStoryArticles?.[8]

  return (
    <div className="home-top-stories section no-top-padding wf-section" style={{ backgroundColor: '#fff' }}>
      <div className="main-container">
        <div className="w-layout-grid digest-grid">
          <div>
            <div className="_50px">
              <div className="_10px"></div>
            </div>
            <div className="w-layout-grid featured-articles-grid">
              <div className="featured-article-wrapper w-dyn-list">
                <Link href={featuredArticle.href} passHref>
                  <div role="list" className="w-dyn-items" style={{ cursor: 'pointer' }}>
                    <div role="listitem" className="collection-item-2 w-dyn-item">
                      <div className="sticky" style={{ width: '100%' }}>
                        <div className="w-inline-bl ock">
                          {featuredArticle.src && featuredArticle.width && featuredArticle.height && (
                            <Box
                              css={{
                                width: '100%',
                              }}>
                              <Image
                                alt={featuredArticle.title}
                                layout="responsive"
                                width={featuredArticle.width}
                                height={featuredArticle.height}
                                asset={{
                                  public: true,
                                  key: featuredArticle.src,
                                }}
                              />
                            </Box>
                          )}
                        </div>
                        <div className="post-preview-title">
                          {featuredArticle.sectionHref && (
                            <div className="w-inline-block ben-brand">
                              <div className="_20px"></div>
                              <div className="div-block-16 ben">
                                <div
                                  className={`overline-brand no-margin ${
                                    featuredArticle.sectionName?.toLocaleLowerCase() === 'sponsored content'
                                      ? 'dan-brand'
                                      : ''
                                  }`}>
                                  {featuredArticle.sectionName}
                                </div>
                                <div className="_5px"></div>
                                <div className="overline-brand no-margin"> | </div>
                                <div className="_5px"></div>
                                <div className="overline-brand no-margin opacity-90">
                                  {monthNames[featuredArticle.month]} {featuredArticle.day}, {featuredArticle.year}
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="post-link-block w-inline-block">
                            <a href={featuredArticle.href}>
                              <span className="post-link-block w-inline-block">
                                <h3 className="h5-brand">{featuredArticle.title}</h3>
                              </span>
                            </a>
                            <div className="body1-brand qui-brand no-margin">{featuredArticle.summary}</div>
                            <div className="_20px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                {smallFeaturedArticles.map(el => (
                  <div className="small-featured-articles-wrapper w-dyn-list" key={el.href}>
                    <Link href={el.href} passHref>
                      <div role="list" className="small-featured-articles w-dyn-items" style={{ cursor: 'pointer' }}>
                        <div role="listitem" className="w-dyn-item">
                          <div className="div-block-2">
                            {el.src && el.height && el.width && (
                              <div>
                                <Box
                                  css={{
                                    width: '100%',
                                  }}>
                                  <Image
                                    alt={el.title}
                                    layout="responsive"
                                    width={el.width}
                                    height={el.height}
                                    asset={{
                                      public: true,
                                      key: el.src,
                                    }}
                                  />
                                </Box>
                              </div>
                            )}
                            <div className="post-preview-title reduced-margin">
                              {el.sectionHref && (
                                <div className="w-inline-block ben-brand">
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
                                    <div className="overline-brand opacity-90 no-margin">
                                      {monthNames[el.month]} {el.day}, {el.year}
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div>
                                <span>
                                  <a href={el.href}>
                                    <span className="post-link-block redurced-margin w-inline-block">
                                      <h3 className="h5-brand">{el.title}</h3>
                                    </span>
                                  </a>
                                  <div className="_20px"></div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="latest-post-sidebar with-ads edit-visibility">
            <div className="_50px">
              <div className="_10px"></div>
            </div>
            <div className="sunshine-sidebar">
              <div className="sunshine-sidebar-articles-wrapper">
                <div className="article-sidebar-grid-wrapper w-dyn-list">
                  <div role="list" className="article-sidebar-grid w-dyn-items">
                    {adSidebarArticles.map(el => (
                      <div role="listitem" className="w-dyn-item" key={el.href}>
                        <Link href={el.href} passHref>
                          <div className="sidebar-article-wrapper">
                            {el.sectionHref && (
                              <div className="w-inline-block ben-brand">
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
                                  <div className="overline-brand opacity-90 no-margin">
                                    {monthNames[el.month]} {el.day}, {el.year}
                                  </div>
                                </div>
                              </div>
                            )}
                            <div>
                              <a href={el.href}>
                                <div className="post-link-block redurced-margin w-inline-block">
                                  <h3 className="no-margin h5-brand">{el.title}</h3>
                                </div>
                              </a>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {lastArticle && (
                <Link href={lastArticle.href} passHref>
                  <div style={{ cursor: 'pointer' }}>
                    <div className="sunshine-link w-inline-block">
                      <div className="_20px"></div>
                    </div>
                    <div className="article-sidebar-grid-wrapper w-dyn-list">
                      <div role="list" className="article-sidebar-grid w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="sidebar-article-wrapper">
                            {lastArticle.src && lastArticle.href && (
                              <div>
                                <Box
                                  css={{
                                    width: '100%',
                                  }}>
                                  <Image
                                    alt={lastArticle.title}
                                    layout="responsive"
                                    width={featuredArticle.width}
                                    height={featuredArticle.height}
                                    asset={{
                                      public: true,
                                      key: lastArticle.src,
                                    }}
                                  />
                                </Box>
                              </div>
                            )}
                            <div className="_20px"></div>
                            {lastArticle.sectionHref && (
                              <span className="w-inline-block ben-brand">
                                <div className="div-block-16">
                                  <div
                                    className={`overline-brand no-margin ${
                                      lastArticle.sectionName?.toLocaleLowerCase() === 'sponsored content'
                                        ? 'dan-brand'
                                        : ''
                                    }`}>
                                    {lastArticle.sectionName}
                                  </div>
                                  <div className="_5px"></div>
                                  <div className="overline-brand no-margin"> | </div>
                                  <div className="_5px"></div>
                                  <div className="overline-brand opacity-90 no-margin">
                                    {monthNames[lastArticle.month]} {lastArticle.day}, {lastArticle.year}
                                  </div>
                                </div>
                              </span>
                            )}
                            <span className="post-link-block redurced-margin w-inline-block">
                              <a href={lastArticle.href}>
                                <span className="post-link-block redurced-margin w-inline-block">
                                  <h3 className="h5-brand">{lastArticle.title}</h3>
                                </span>
                              </a>
                              <p className="body1-brand qui-brand">{lastArticle.summary}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubHomeTopStoriesView

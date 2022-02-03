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
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="collection-item-2 w-dyn-item">
                    <div className="sticky" style={{ width: '100%' }}>
                      <Link href={featuredArticle.href} passHref>
                        <a className="w-inline-bl ock" style={{ cursor: 'pointer' }}>
                          {featuredArticle.src && featuredArticle.width && featuredArticle.height && (
                            <Box
                              css={{
                                cursor: 'pointer',
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
                        </a>
                      </Link>
                      <div className="post-preview-title">
                        {featuredArticle.sectionHref && (
                          <Link href={featuredArticle.sectionHref}>
                            <a className="w-inline-block" style={{ cursor: 'pointer' }}>
                              <div className="_20px"></div>
                              <div className="div-block-16">
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
                                <div className="overline-brand no-margin opacity-50">
                                  {monthNames[featuredArticle.month]} {featuredArticle.day}, {featuredArticle.year}
                                </div>
                              </div>
                            </a>
                          </Link>
                        )}
                        <Link href={featuredArticle.href}>
                          <a className="post-link-block w-inline-block" style={{ cursor: 'pointer' }}>
                            <h5>{featuredArticle.title}</h5>
                            <div className="body1-brand qui-brand no-margin">{featuredArticle.summary}</div>
                            <div className="body2-brand dan-brand">Read more</div>
                            <div className="_20px"></div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {smallFeaturedArticles.map(el => (
                  <div className="small-featured-articles-wrapper w-dyn-list" key={el.href}>
                    <div role="list" className="small-featured-articles w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="div-block-2">
                          {el.src && el.height && el.width && (
                            <Link href={el.href} passHref>
                              <Box
                                css={{
                                  cursor: 'pointer',
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
                            </Link>
                          )}
                          <div className="post-preview-title reduced-margin">
                            {el.sectionHref && (
                              <Link href={el.sectionHref}>
                                <a className="w-inline-block">
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
                                    <div className="overline-brand opacity-50 no-margin">
                                      {monthNames[el.month]} {el.day}, {el.year}
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            )}
                            <Link passHref href={el.href}>
                              <a className="post-link-block redurced-margin w-inline-block">
                                <h5>{el.title}</h5>
                                <div className="_20px"></div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        <div className="sidebar-article-wrapper">
                          {el.sectionHref && (
                            <Link href={el.sectionHref} passHref>
                              <a className="w-inline-block">
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
                          <Link passHref href={el.href}>
                            <a className="post-link-block redurced-margin w-inline-block">
                              <h5 className="no-margin">{el.title}</h5>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {lastArticle && (
                <>
                  <a className="sunshine-link w-inline-block">
                    <div className="_20px"></div>
                  </a>
                  <div className="article-sidebar-grid-wrapper w-dyn-list">
                    <div role="list" className="article-sidebar-grid w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="sidebar-article-wrapper">
                          {lastArticle.src && lastArticle.href && (
                            <Link href={lastArticle.href} passHref>
                              <Box
                                css={{
                                  width: '100%',
                                  cursor: 'pointer',
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
                            </Link>
                          )}
                          <div className="_20px"></div>
                          {lastArticle.sectionHref && (
                            <Link href={lastArticle.sectionHref} passHref>
                              <a className="w-inline-block">
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
                                  <div className="overline-brand opacity-50 no-margin">
                                    {monthNames[lastArticle.month]} {lastArticle.day}, {lastArticle.year}
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                          <Link href={lastArticle.href} passHref>
                            <a className="post-link-block redurced-margin w-inline-block">
                              <h5>{lastArticle.title}</h5>
                              <p className="body1-brand qui-brand">{lastArticle.summary}</p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubHomeTopStoriesView

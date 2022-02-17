import { Box, Wisiwig } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC, useCallback, useEffect, useState } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleBodyCustomPageData, BlockPubArticleBodyProps } from './blockPubArticleBody'

const ArticleProgressContainer = () => {
  const [scrollPercent, setScrollPercent] = useState(0)

  const getScrollPercent = useCallback(() => {
    const h = window.document.documentElement,
      b = window.document.body,
      st = 'scrollTop',
      sh = 'scrollHeight'
    setScrollPercent(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', getScrollPercent)
    return () => window.removeEventListener('scroll', getScrollPercent)
  })
  return (
    <div className="article-progress-bar-container">
      <div
        className="article-progress-bar dan-background-brand"
        style={{
          width: `${scrollPercent}%`,
        }}></div>
    </div>
  )
}

const BlockPubArticleBodyView: FC<
  BlockViewProps<{
    ShapeOfBlockDataInDB: BlockPubArticleBodyProps
    ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleBodyCustomPageData
  }>
> = props => {
  const { articlesToAddSorted, tagListBlock, articleTitle } = props.blockCustomData

  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="article-body wf-section" style={{ backgroundColor: 'white' }}>
      {/* <div className="progress-bar-section">
        <div className="main-container">
          <div className="article-progress-bar-title">
            <p className="no-bottom-margin h6-brand">{articleTitle}</p>
          </div>
          <ArticleProgressContainer />
        </div>
      </div> */}
      <div className="main-container">
        <div className="w-layout-grid article-grid" style={{ maxWidth: '100%' }}>
          <div className="article-author-aside">
            <div className="div-block-23">
              {typeof window !== 'undefined' &&
              (window?.location.host.includes('localhost') ||
                window?.location.host.includes('sho-demo') ||
                window?.location.host.includes('sho-site-dev.com') ||
                window?.location.host.includes('sho-site.com')) ? (
                <img src="https://via.placeholder.com/1251x2501.png?text=Google+Ad+Placeholder" alt="google ad" />
              ) : (
                <ins
                  className="adsbygoogle"
                  style={{
                    display: 'block',
                  }}
                  data-ad-client="ca-pub-5826862484148534"
                  data-ad-slot="1506808819"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              )}
            </div>
          </div>
          <div className="article-container" style={{ width: '100%' }}>
            <div className="article w-richtext">
              <Box
                css={{
                  backgroundColor: 'white',
                  margin: '-20px', // todo: remove once https://app.asana.com/0/1200897471412372/1201609610890661 is completed
                  '*': {
                    color: '#1b1b1b',
                  },
                }}>
                {props.data.content && (
                  <Wisiwig
                    readOnly={true}
                    initialValue={JSON.parse(props.data.content)} // TODO: need to get the proper type from wisiwig
                  />
                )}
              </Box>
            </div>
            <div className="article-tags">
              <div className="w-dyn-list">
                <div role="list" className="tag-list w-dyn-items">
                  {tagListBlock.map(el => (
                    <div role="listitem" className="w-dyn-item" key={el.name}>
                      <Link href={el.href} passHref>
                        <a className="tag w-inline-block" style={{ cursor: 'pointer' }}>
                          <div
                            className={`overline-brand no-margin ${
                              el.name?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : ''
                            }`}>
                            {el.name}
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {!!articlesToAddSorted?.length && (
            <div className="article-related-sidebar">
              <div className="sidebar-title">
                <div className="overline-brand muted">related articles</div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="sidebar-post-grid w-dyn-items">
                  {articlesToAddSorted?.map(el => (
                    <div role="listitem" className="w-dyn-item" key={el.href}>
                      <Link href={el.href} passHref>
                        <a className="horizontal-article w-inline-block" style={{ cursor: 'pointer' }}>
                          {el.src && (
                            <Box
                              className="margin-right"
                              css={{
                                width: '60%%',
                                '& > div': {
                                  paddingBottom: '100%',
                                  width: '60px',
                                  img: {
                                    borderRadius: '8px',
                                  },
                                },
                              }}>
                              <Image
                                alt={el.title}
                                layout="fill"
                                className="small-square-image"
                                objectFit="cover"
                                asset={{
                                  public: true,
                                  key: el.src,
                                }}
                              />
                            </Box>
                          )}
                          <h3 className="text-dark h5-brand">{el.title}</h3>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockPubArticleBodyView

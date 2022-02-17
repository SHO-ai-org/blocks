import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubSectionTopStoriesCustomPageData } from './blockPubSectionTopStories'

const BlockPubSectionTopStoriesView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubSectionTopStoriesCustomPageData
  }>
> = props => {
  console.log('BlockPubSectionTopStoriesView props', props)
  const { featuredArticle, secondaryArticles, sectionName } = props.blockCustomData

  if (!sectionName || !featuredArticle) {
    return null
  }

  return (
    <div className="section-top-stories ben-background-brand wf-section">
      <div id="w-node-e0ba9529-da87-445d-64b9-dfe9a5f793db-e734970e" className="w-dyn-list">
        <div role="list" className="featured-category-post-wrapper w-dyn-items">
          <Link href={featuredArticle.href} passHref>
            <div role="listitem" className="featured-category-post w-dyn-item" style={{ cursor: 'pointer' }}>
              <a className="featured-category-post-link w-inline-block" style={{ position: 'relative' }}>
                <Box
                  css={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    '& > div': {
                      width: '100%',
                      height: '100%',
                    },
                  }}>
                  <Image
                    className="featured-category-post-image"
                    alt={featuredArticle.title}
                    layout="fill"
                    objectFit="cover"
                    asset={{
                      public: true,
                      key: featuredArticle.src,
                    }}
                  />
                </Box>
                <div className="main-container">
                  <div className="featured-category-post-title">
                    <div className="overline-brand subheading" style={{ marginTop: '10px' }}>
                      featured post
                    </div>
                    <h2 className="heading">{featuredArticle.title}</h2>
                  </div>
                </div>
                <div className="scrim"></div>
              </a>
            </div>
          </Link>
        </div>
      </div>
      <div className="category-title-wrapper">
        <div className="category-title">
          <h2
            className={`no-margin h6-brand ${
              sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand h6-brand' : 'sue-brand h6-brand'
            }`}>
            {sectionName}
          </h2>
          <div className="space"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {secondaryArticles?.map(el => (
                <Link href={el.href} passHref key={el.href}>
                  <div role="listitem" className="w-dyn-item" style={{ cursor: 'pointer' }}>
                    <div className="sidebar-article-wrapper">
                      <a className="post-link-block redurced-margin w-inline-block">
                        <h3 className="sue-brand h5-brand">{el.title}</h3>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubSectionTopStoriesView

import { Box } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'

type HeroArticleData = {
  title: string | undefined
  src: string
  href: string
}

const BlockPubSectionTopStoriesView: FC<BlockViewProps> = props => {
  const sectionBlock = props?.listPageLocalBlocks?.items?.find(block => block.blockCategory === 'PubSectionMain')

  if (!sectionBlock) {
    return null
  }

  const articlesBySection = sectionBlock.listExternalBlocks?.items?.reduce(
    (tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps

        if (
          data?.section === sectionBlock.id &&
          block.releaseDate &&
          data.image &&
          data.externalDisplay === 'topStory'
        ) {
          const href = block.getPage?.slug
          if (href) {
            return [
              ...tot,
              {
                title: data.title,
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

  if (!articlesBySection?.length) {
    return null
  }

  const sectionName = sectionBlock.data ? JSON.parse(sectionBlock.data)?.name : ''
  const featuredArticle = articlesBySection?.[0]
  const secondaryArticles = articlesBySection?.slice(1, 5)

  return (
    <div className="section-top-stories ben-background-brand wf-section">
      <div id="w-node-e0ba9529-da87-445d-64b9-dfe9a5f793db-e734970e" className="w-dyn-list">
        <div role="list" className="featured-category-post-wrapper w-dyn-items">
          <Link href={featuredArticle.href} passHref>
            <div role="listitem" className="featured-category-post w-dyn-item" style={{ cursor: 'pointer' }}>
              <a className="featured-category-post-link w-inline-block">
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
          <h6
            className={`no-margin h6-brand ${
              sectionName?.toLocaleLowerCase() === 'sponsored content' ? 'dan-brand' : 'sue-brand'
            }`}>
            {sectionName}
          </h6>
          <div className="space"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {secondaryArticles.map(el => (
                <Link href={el.href} passHref key={el.href}>
                  <div role="listitem" className="w-dyn-item" style={{ cursor: 'pointer' }}>
                    <div className="sidebar-article-wrapper">
                      <a className="post-link-block redurced-margin w-inline-block">
                        <h5 className="sue-brand">{el.title}</h5>
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

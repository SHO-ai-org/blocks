import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionTopStoriesView'

export type BlockPubSectionTopStoriesHeroArticleData = {
  title: string | undefined
  src: string
  href: string
}

export type BlockPubSectionTopStoriesCustomPageData = {
  featuredArticle: BlockPubSectionTopStoriesHeroArticleData | undefined
  secondaryArticles: BlockPubSectionTopStoriesHeroArticleData[] | undefined
  sectionName: string
}

export const blockPubSectionTopStories: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubSectionTopStoriesCustomPageData
}> = {
  id: 'blockPubSectionTopStories',
  name: 'Section Top Stories',
  viewComponent: View,
  editComponent: View,

  description: 'Section with Top Stories',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

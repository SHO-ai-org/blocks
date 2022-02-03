import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubTagRelatedArticlesView'

export type BlockPubTargArticlesHeroArticleData = {
  href: string
  summary: string | undefined
  src: string
  title: string | undefined
  youtubeLink: string | undefined
  authorName: string | undefined
  authorHref: string | undefined
  byline: string | undefined
  sectionName: string | undefined
  sectionHref: string | undefined
}

export type BlockPubTargArticlesCustomPageData = {
  articlesByTag: BlockPubTargArticlesHeroArticleData[] | undefined
}

export const blockPubTagRelatedArticles: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubTargArticlesCustomPageData
}> = {
  id: 'blockPubTagRelatedArticles',
  name: 'Tag Articles',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header area for tag',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

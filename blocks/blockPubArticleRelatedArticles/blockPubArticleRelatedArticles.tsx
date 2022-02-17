import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleRelatedArticlesView'

export type BlockPubArticleRelatedArticlesHeroArticleData = {
  id: string
  href: string
  src: string
  title: string | undefined
  youtubeLink: string | undefined
  day: string | number
  year: string | number
  month: string | number
  sectionName: string | undefined
  sectionHref: string | undefined
  tagName: string | undefined
  tagHref: string | undefined
  releaseDate: string
}

export type BlockPubArticleRelatedArticlesCustomPageData = {
  articlesToAddSorted: BlockPubArticleRelatedArticlesHeroArticleData[]
}

export const blockPubArticleRelatedArticles: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleRelatedArticlesCustomPageData
}> = {
  id: 'blockPubArticleRelatedArticles',
  name: 'Related Articles',
  viewComponent: View,
  editComponent: View,

  description: 'Cards of Related Articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

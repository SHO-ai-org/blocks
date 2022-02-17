import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubLatestArticlesView'

export type BlockPubLatestArticlesHeroArticleData = {
  title: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
  youtubeLink: string | undefined
  summary: string | undefined
  sectionName: string | undefined
  sectionHref: string | null | undefined
  authorName: string | undefined
  authorPosition: string | undefined
  authorhref: string | undefined
  authorPicture: string | undefined
  byline: string | undefined
}

export type BlockPubLatestArticlesHeroCustomPageData = {
  latestArticles: BlockPubLatestArticlesHeroArticleData[] | undefined
}

export const blockPubLatestArticles: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubLatestArticlesHeroCustomPageData
}> = {
  id: 'blockPubLatestArticles',
  name: 'Latest Articles',
  viewComponent: View,
  editComponent: View,

  description: 'Latest articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

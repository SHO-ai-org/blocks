import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionRelatedArticlesView'

export type BlockPubSectionRelatedArticlesHeroArticleData = {
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  imageSrc: string
  imageWidth: number
  imageHeight: number
  href: string
  youtubeLink: string | undefined
  authorName: string | undefined
  authorPicture: string | undefined
  authorHref: string | undefined
  byline: string | undefined
  authorPosition: string | undefined
}

export type BlockPubSectionRelatedArticlesCustomPageData = {
  articlesBySection: BlockPubSectionRelatedArticlesHeroArticleData[] | undefined
  sectionName: string
}

export const blockPubSectionRelatedArticles: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubSectionRelatedArticlesCustomPageData
}> = {
  id: 'blockPubSectionRelatedArticles',
  name: 'Related Storeis',
  viewComponent: View,
  editComponent: View,

  description: 'Section with Related Stories',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

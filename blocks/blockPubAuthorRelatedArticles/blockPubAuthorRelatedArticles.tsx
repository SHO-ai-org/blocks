import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './blockPubAuthorRelatedArticlesView'

export type BlockPubAuthorRelatedArticlesHeroArticleData = {
  href: string
  summary: string | undefined
  src: string | undefined
  title: string | undefined
  youtubeLink: string | undefined
  sectionName: string | undefined
  sectionHref: string | undefined
  // sectionName: string | undefined
}

export type BlockPubAuthorRelatedArticlesCustomPageData = {
  articlesByAuthor: BlockPubAuthorRelatedArticlesHeroArticleData[] | undefined
  authorName: string | undefined
}

export const blockPubAuthorRelatedArticles: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubAuthorRelatedArticlesCustomPageData
}> = {
  id: 'blockPubAuthorRelatedArticles',
  name: 'Related Storeis',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Section with Related Stories of Author',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

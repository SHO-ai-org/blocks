import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockThankYouView'

export type BlockThankYouProps = unknown

export type BlockThankYouHeroArticleData = {
  title: string | undefined
  src: string
  href: string
}

export type BlockThankYouCArticlesType = {
  heroArticles: BlockThankYouHeroArticleData[]
  topStoryArticles: BlockThankYouHeroArticleData[]
  articles: BlockThankYouHeroArticleData[]
}

export type BlockThankYouCustomDataProps = {
  articlesToDisplay: BlockThankYouHeroArticleData[]
}

export const blockThankYou: BlockProps<{ ShapeOfCustomPropsDerivedFromPageData: BlockThankYouCustomDataProps }> = {
  id: 'blockThankYou',
  name: 'Thank You',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Thank you page',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

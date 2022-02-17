import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHomeHeroView'

export type BlockPubHomeHeroHeroArticleData = {
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
  sectionName: string | undefined
}

export type BlockPubHomeHeroCustomPageData = {
  articlesForHeroImage: BlockPubHomeHeroHeroArticleData[] | undefined
}

export const blockPubHomeHero: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubHomeHeroCustomPageData
}> = {
  id: 'blockPubHomeHero',
  name: 'Home Hero',
  viewComponent: View,
  editComponent: View,

  description: 'Hero of a publications',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHomeTopStoriesView'

export type BlockPubHomeTopStoriesHeroArticleData = {
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  width: number | undefined
  height: number | undefined
  href: string
  sectionName: string | undefined
  sectionHref: string | undefined
}

export type BlockPubHomeTopStoriesCustomPageData = {
  topStoryArticles: BlockPubHomeTopStoriesHeroArticleData[] | undefined
}

export const blockPubHomeTopStories: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubHomeTopStoriesCustomPageData
}> = {
  id: 'blockPubHomeTopStories',
  name: 'Home Top Stories',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Top stories for publication home page',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

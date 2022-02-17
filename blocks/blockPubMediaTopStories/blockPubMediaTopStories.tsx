import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubMediaTopStoriesView'

export type BlockPubMediaTopStoriesHeroArticleData = {
  title: string | undefined
  summary: string | undefined
  day: string | number
  year: string | number
  month: string | number
  src: string | undefined
  href: string
  sectionName: string | undefined
  sectionHref: string | undefined
}

export type BlockPubMediaTopStorieCustomPageData = {
  topStoryArticlesWithYoutubeLink: BlockPubMediaTopStoriesHeroArticleData[] | undefined
}

export const blockPubMediaTopStories: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubMediaTopStorieCustomPageData
}> = {
  id: 'blockPubMediaTopStories',
  name: 'Media Top Stories',
  viewComponent: View,
  editComponent: View,

  description: 'Top stories of Video content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

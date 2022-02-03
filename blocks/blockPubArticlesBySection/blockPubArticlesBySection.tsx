import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import Edit from './BlockPubArticlesBySectionEdit'
import View from './BlockPubArticlesBySectionView'

export type BlockSectionDropdown = { key: string; label: string }

export type BlockPubArticlesBySectionProps = {
  section?: string
}

export type BlockPubArticlesBySectionHeroArticleData = {
  title: string
  day: number
  year: number
  month: number
  src: string
  href: string
}

export type PubArticlesBySectionCustomDataProps = {
  topArticlesBySection: BlockPubArticlesBySectionHeroArticleData[] | undefined
  sectionName: string | undefined
  sectionHref: string | undefined
  sectionDropdownList: BlockSectionDropdown[] | undefined
}

export const blockPubArticlesBySection: BlockProps<{
  ShapeOfBlockDataInDB: BlockPubArticlesBySectionProps
  ShapeOfCustomPropsDerivedFromPageData: PubArticlesBySectionCustomDataProps
}> = {
  id: 'blockPubArticlesBySection',
  name: 'Articles Section',
  viewComponent: View,
  editComponent: Edit,
  IconComponent: <div>Icon</div>,
  description: 'Section with Related Articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

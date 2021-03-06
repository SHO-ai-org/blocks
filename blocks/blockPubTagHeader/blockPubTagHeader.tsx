import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubTagHeaderView'

export type BlockPubTagHeaderProps = {
  name?: string
}

export type BlockPubTagHeaderCustomPageData = {
  tagName?: string
}

export const blockPubTagHeader: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubTagHeaderCustomPageData
}> = {
  id: 'blockPubTagHeader',
  name: 'Tag Header',
  viewComponent: View,
  editComponent: View,
  description: 'Header area for tag',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

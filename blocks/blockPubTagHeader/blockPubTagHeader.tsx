import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubTagHeaderView'

export type BlockPubTagHeaderProps = {
  name?: string
}

export const blockPubTagHeader: BlockProps<BlockPubTagHeaderProps> = {
  id: 'blockPubTagHeader',
  name: 'Tag Header',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header area for tag',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

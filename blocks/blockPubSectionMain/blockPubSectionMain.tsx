import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionMainView'

export type BlockPubSectionMainViewProps = {
  name?: string
  description?: string
  featuredInNav?: boolean
}

export const blockPubSectionMain: BlockProps<BlockPubSectionMainViewProps> = {
  id: 'blockPubSectionMain',
  name: 'Section Main',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Section content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

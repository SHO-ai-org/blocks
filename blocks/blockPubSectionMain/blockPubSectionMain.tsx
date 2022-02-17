import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionMainView'

export type BlockPubSectionMainViewProps = {
  name?: string
  featuredInNav?: boolean
}

export const blockPubSectionMain: BlockProps<{
  ShapeOfBlockDataInDB: BlockPubSectionMainViewProps
}> = {
  id: 'blockPubSectionMain',
  name: 'Section Main',
  viewComponent: View,
  editComponent: View,

  description: 'Section content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

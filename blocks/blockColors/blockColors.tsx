import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import Edit from './BlockColorsEdit'
import View from './BlockColorsView'

export const blockColors: BlockProps = {
  id: 'blockColors',
  name: 'Colors',
  viewComponent: View,
  editComponent: Edit,

  description: 'Identity colors',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

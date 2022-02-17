import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockFooterShoView'

export const blockFooterSho: BlockProps = {
  id: 'blockFooterSho',
  name: 'Footer SHO.ai',
  viewComponent: View,
  editComponent: View,

  description: 'SHO.ai footer ',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

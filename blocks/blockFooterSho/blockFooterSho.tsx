import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockFooterShoView'

export const blockFooterSho: BlockProps = {
  id: 'blockFooterSho',
  name: 'Footer SHO.ai',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'SHO.ai footer ',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

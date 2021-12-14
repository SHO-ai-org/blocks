import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockWisiwigView'

export const blockWisiwig: BlockProps = {
  id: 'blockWisiwig',
  name: 'Wisiwig block',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Wisiwig',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

import React from 'react'
import View from './BlockLogosView'
import Edit from './BlockLogosEdit'
import { BlockProps } from '../../../../../utils/typescript-utils'

export const blockLogos: BlockProps = {
  id: 'blockLogos',
  name: 'Logos',
  editComponent: Edit,
  viewComponent: View,

  description: 'Identity Logos',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

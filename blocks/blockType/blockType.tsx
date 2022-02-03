import React from 'react'
import View from './BlockTypeView'
import Edit from './BlockTypeEdit'
import { BlockProps } from '../../../../../utils/typescript-utils'

export const blockType: BlockProps = {
  id: 'bockType',
  name: 'Type',
  viewComponent: View,
  editComponent: Edit,
  IconComponent: <div>Icon</div>,
  description: 'Identity font type',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

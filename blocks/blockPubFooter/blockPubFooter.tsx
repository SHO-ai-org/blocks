import React from 'react'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import View from './BlockFooterView'

export const blockFooter: BlockTemplateProps = {
  id: 'blockFooter',
  name: 'Footer',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Footer content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

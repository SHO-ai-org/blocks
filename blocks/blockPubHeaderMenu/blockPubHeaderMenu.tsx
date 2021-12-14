import React from 'react'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHeaderMenuView'

export const blockPubHeaderMenu: BlockTemplateProps = {
  id: 'blockPubHeaderMenu',
  name: 'Publication Header',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header of publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

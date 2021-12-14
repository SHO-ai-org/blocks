import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubAccountView'

export const blockPubAccount: BlockProps = {
  id: 'blockPubAccount',
  name: 'Publication Account',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'User account for publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

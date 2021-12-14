import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockNavSqueezeView'

export const blockNavSqueeze: BlockProps = {
  id: 'blockNavSqueeze',
  name: 'Navigation Squeeze',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header area for publication checkout',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

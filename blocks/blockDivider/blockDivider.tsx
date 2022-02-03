import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockDividerView'

export const blockDivider: BlockProps = {
  id: 'blockDivider',
  name: 'Divider',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Seperate content',
  blockVariationToolbarDefaultOption: 'small',
  blockVariationToolbarOptions: [
    // Space is small
    { label: 'Small', value: 'small' },
    // Space is big.
    { label: 'Big', value: 'big' },
  ],
  tags: ['structure'],
}

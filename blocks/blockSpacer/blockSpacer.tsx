import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockSpacerView'

export const blockSpacer: BlockProps = {
  id: 'blockSpacer',
  name: 'Spacer',
  viewComponent: View,
  editComponent: View,

  description: 'Space content',
  blockVariationToolbarDefaultOption: 'small',
  blockVariationToolbarOptions: [
    // Space is small
    { label: 'Small', value: 'small' },
    // Space is big.
    { label: 'Big', value: 'big' },
  ],
  tags: ['structure'],
}

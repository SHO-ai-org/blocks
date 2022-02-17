import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubCheckoutView'

export type BlockPubCheckoutProps = Record<string, any>

export const blockPubCheckout: BlockProps<BlockPubCheckoutProps> = {
  id: 'blockPubCheckout',
  name: 'Publication Checkout',
  viewComponent: View,
  editComponent: View,

  description: 'Publication checkout',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

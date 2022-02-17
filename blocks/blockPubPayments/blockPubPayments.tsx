import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubPaymentsView'

export const blockPubPayments: BlockProps = {
  id: 'blockPubPayments',
  name: 'Publication Payments',
  viewComponent: View,
  editComponent: View,

  description: 'Payment for publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

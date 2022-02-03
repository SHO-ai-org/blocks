import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSubscribeView'

export type BlockPubSubscribeProps = {
  tagline?: string
  title?: string
  description?: string
  notice?: string
  subscription?: {
    isReadersChoice?: boolean
    header?: string
    price?: number
    id: string
    benefitsHeader?: string
    benefitsList?: string
    stripeSubscriptionId?: string
  }[]
}

export const blockPubSubscribe: BlockProps<{ ShapeOfBlockDataInDB: BlockPubSubscribeProps }> = {
  id: 'blockPubSubscribe',
  name: 'Publication Subscription',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Subscription for publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

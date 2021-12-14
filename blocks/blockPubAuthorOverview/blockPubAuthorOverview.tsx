import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubAuthorOverviewView'

export type BlockPubAuthorOverviewDataProps = {
  name?: string
  position?: string
  bio?: string
  picture?: string
  email?: string
  twitter?: string
  linkedIn?: string
}

export const blockPubAuthorOverview: BlockProps<BlockPubAuthorOverviewDataProps> = {
  id: 'blockPubAuthorOverview',
  name: 'Author Overview',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Bio of Author',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

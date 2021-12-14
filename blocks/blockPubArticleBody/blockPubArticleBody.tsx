import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleBodyView'

export type BlockPubArticleBodyProps = {
  content?: string
}

export const blockPubArticleBody: BlockProps = {
  id: 'blockPubArticleBody',
  name: 'Article Body',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Article text',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

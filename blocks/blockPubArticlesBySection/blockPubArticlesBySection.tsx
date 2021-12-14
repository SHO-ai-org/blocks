import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticlesBySectionView'
import Edit from './BlockPubArticlesBySectionEdit'

export type BlockPubArticlesBySectionProps = {
  section?: string
}

export const blockPubArticlesBySection: BlockProps<BlockPubArticlesBySectionProps> = {
  id: 'blockPubArticlesBySection',
  name: 'Articles Section',
  viewComponent: View,
  editComponent: Edit,
  IconComponent: <div>Icon</div>,
  description: 'Section with Related Articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

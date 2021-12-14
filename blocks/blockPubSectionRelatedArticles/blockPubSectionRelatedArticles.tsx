import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionRelatedArticlesView'

export const blockPubSectionRelatedArticles: BlockProps = {
  id: 'blockPubSectionRelatedArticles',
  name: 'Related Storeis',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Section with Related Stories',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

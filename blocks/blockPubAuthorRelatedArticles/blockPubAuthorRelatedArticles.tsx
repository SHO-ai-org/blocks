import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './blockPubAuthorRelatedArticlesView'

export const blockPubAuthorRelatedArticles: BlockProps = {
  id: 'blockPubAuthorRelatedArticles',
  name: 'Related Storeis',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Section with Related Stories of Author',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

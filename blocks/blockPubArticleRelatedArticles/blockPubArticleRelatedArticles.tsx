import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleRelatedArticlesView'

export const blockPubArticleRelatedArticles: BlockProps = {
  id: 'blockPubArticleRelatedArticles',
  name: 'Related Articles',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Cards of Related Articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

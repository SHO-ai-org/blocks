import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubLatestArticlesView'

export const blockPubLatestArticles: BlockProps = {
  id: 'blockPubLatestArticles',
  name: 'Latest Articles',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Latest articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

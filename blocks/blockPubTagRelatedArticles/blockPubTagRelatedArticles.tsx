import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubTagRelatedArticlesView'

export const blockPubTagRelatedArticles: BlockProps = {
  id: 'blockPubTagRelatedArticles',
  name: 'Tag Articles',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header area for tag',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

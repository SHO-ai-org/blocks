import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPaywallArticleView'

export const blockPaywallArticle: BlockProps = {
  id: 'blockPaywallArticle',
  name: 'Article Paywall',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Paywall for article',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

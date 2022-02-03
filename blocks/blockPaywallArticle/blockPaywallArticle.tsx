import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import { ArticleAccessType } from '../blockPubArticleHeader/blockPubArticleHeader'
import View from './BlockPaywallArticleView'

export type BlockPaywallArticleCustomPageData = {
  articleAccess: ArticleAccessType
}

export const blockPaywallArticle: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPaywallArticleCustomPageData
}> = {
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

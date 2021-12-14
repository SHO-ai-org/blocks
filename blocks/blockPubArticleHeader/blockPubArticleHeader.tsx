import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleHeaderView'

export type ArticleAccessType = 'public' | 'signedIn' | 'subscribed'
export type ExternalDisplayType = 'hero' | 'topStory' | 'none'

export const defaultArticleAccess: ArticleAccessType = 'subscribed'
export const defaultExternalDisplay: ExternalDisplayType = 'none'

export type BlockPubArticleHeaderProps = {
  authors?: string[]
  articleAccess?: ArticleAccessType
  externalDisplay?: ExternalDisplayType
  image?: string
  summary?: string
  section?: string
  tags?: string[]
  title?: string
  youtubeLink?: string
}

export const blockPubArticleHeader: BlockProps<BlockPubArticleHeaderProps> = {
  id: 'blockPubArticleHeader',
  name: 'Article Header',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Top of Article',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleHeaderView'

export type ArticleAccessType = 'public' | 'signedIn' | 'subscribed' | 'metered'
export type ExternalDisplayType = 'hero' | 'topStory' | 'none'

export const defaultArticleAccess: ArticleAccessType = 'subscribed'
export const defaultExternalDisplay: ExternalDisplayType = 'none'

export type BlockPubArticleCustomPageData = {
  sectionName: string | undefined
  sectionSlug: string | undefined
  day: number
  month: number
  year: number
  authorBlocksData:
    | {
        slug: string | undefined
        id: string
        picture: string | undefined
        name: string | undefined
        position: string | undefined
      }[]
    | undefined
}

export type BlockPubArticleHeaderProps = {
  authors?: string[]
  articleAccess?: ArticleAccessType
  externalDisplay?: ExternalDisplayType
  image?: string
  imageWidth?: number
  imageHeight?: number
  summary?: string
  section?: string
  tags?: string[]
  title?: string
  youtubeLink?: string
  byline?: string
}

export const blockPubArticleHeader: BlockProps<{
  ShapeOfBlockDataInDB: BlockPubArticleHeaderProps
  ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleCustomPageData
}> = {
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

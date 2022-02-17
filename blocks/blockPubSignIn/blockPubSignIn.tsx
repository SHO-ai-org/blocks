import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSignInView'

export type BlockSignInProps = {
  picture1?: string
  picture2?: string
  picture3?: string
  picture4?: string
  picture5?: string
}

export type BlockPubSigninHeroArticleData = {
  title: string | undefined
  src: string
  href: string
}

export type BlockPubSigninArticlesType = {
  heroArticles: BlockPubSigninHeroArticleData[]
  topStoryArticles: BlockPubSigninHeroArticleData[]
  articles: BlockPubSigninHeroArticleData[]
}

export type BlockPubSigninCustomPageData = {
  articlesToDisplay: BlockPubSigninHeroArticleData[]
}

export const blockPubSignIn: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubSigninCustomPageData
}> = {
  id: 'blockPubSignIn',
  name: 'Publication Sign In',
  viewComponent: View,
  editComponent: View,

  description: 'Signinn into publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

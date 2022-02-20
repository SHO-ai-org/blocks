import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubArticleBodyView'

export type BlockPubArticleBodyProps = {
  content?: string
}

export type BlockPubArticleBodyHeroArticleData = {
  id: string
  href: string
  title: string | undefined
  src: string | undefined
  releaseDate: string
}

export type BlockPubArticleBodyTagData = {
  href: string
  name: string
}

export type BlockPubArticleBodyCustomPageData = {
  articlesToAddSorted: BlockPubArticleBodyHeroArticleData[]
  tagListBlock: BlockPubArticleBodyTagData[]
  articleTitle: string | undefined
  content?: string
}

export const blockPubArticleBody: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubArticleBodyCustomPageData
}> = {
  id: 'blockPubArticleBody',
  name: 'Article Body',
  viewComponent: View,
  editComponent: View,

  description: 'Article text',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

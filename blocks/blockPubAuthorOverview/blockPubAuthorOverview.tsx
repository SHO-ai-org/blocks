import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubAuthorOverviewView'

export type BlockPubAuthorOverviewDataProps = {
  name?: string
  position?: string
  bio?: string
  picture?: string
  pictureWidth?: number
  pictureHeight?: number
  email?: string
  twitter?: string
  linkedIn?: string
}

export type BlockPubAuthorOverviewCustomPageData = BlockPubAuthorOverviewDataProps

export const blockPubAuthorOverview: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockPubAuthorOverviewCustomPageData
}> = {
  id: 'blockPubAuthorOverview',
  name: 'Author Overview',
  viewComponent: View,
  editComponent: View,

  description: 'Bio of Author',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

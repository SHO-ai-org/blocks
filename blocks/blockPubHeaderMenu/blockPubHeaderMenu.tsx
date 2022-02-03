import React from 'react'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHeaderMenuView'

export type PubHeaderMenuSectionData = {
  sectionName: string
  href: string
}

export type PubHeaderMenuCustomPageData = {
  sections: PubHeaderMenuSectionData[]
  sectionsInHeader: PubHeaderMenuSectionData[]
}

export const blockPubHeaderMenu: BlockTemplateProps<{
  ShapeOfCustomPropsDerivedFromPageData: PubHeaderMenuCustomPageData
}> = {
  id: 'blockPubHeaderMenu',
  name: 'Publication Header',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Header of publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

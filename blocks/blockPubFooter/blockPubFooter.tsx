import React from 'react'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubFooterView'

export type BlockTemplateSectionData = {
  href: string
  sectionName: string
}

export type BlockTemplateCustomPageData = {
  sections: BlockTemplateSectionData[] | undefined
}

// TODO: didn't finsish refactoring because used as template block
export const blockPubFooter: BlockTemplateProps<{
  ShapeOfCustomPropsDerivedFromPageData: BlockTemplateCustomPageData
}> = {
  id: 'blockPubFooter',
  name: 'Footer',
  viewComponent: View,
  editComponent: View,

  description: 'Publication Footer content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

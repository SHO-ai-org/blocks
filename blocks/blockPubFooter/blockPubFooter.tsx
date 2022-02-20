import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubFooterView'

export type BlockTemplateSectionData = {
  href: string
  sectionName: string
}

export type BlockTemplateCustomPageData = {
  sections: BlockTemplateSectionData[] | undefined
}

// TODO: didn't finsish refactoring because used as template block
export const blockPubFooter: BlockProps<{
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

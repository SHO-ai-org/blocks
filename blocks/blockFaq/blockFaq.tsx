import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockFaqView'

export const blockFaq: BlockProps = {
  id: 'blockFaq',
  name: 'FAQ',
  viewComponent: View,
  editComponent: View,

  description: 'Section with Related Articles',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPub404View'

export const blockPub404: BlockProps = {
  id: 'blockPub404',
  name: '404 Page',
  viewComponent: View,
  editComponent: View,

  description: '404 Page',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

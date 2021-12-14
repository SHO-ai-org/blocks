import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHomeTopStoriesView'

export const blockPubHomeTopStories: BlockProps = {
  id: 'blockPubHomeTopStories',
  name: 'Home Top Stories',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Top stories for publication home page',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

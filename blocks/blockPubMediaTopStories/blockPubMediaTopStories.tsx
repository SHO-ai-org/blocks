import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubMediaTopStoriesView'

export const blockPubMediaTopStories: BlockProps = {
  id: 'blockPubMediaTopStories',
  name: 'Media Top Stories',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Top stories of Video content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

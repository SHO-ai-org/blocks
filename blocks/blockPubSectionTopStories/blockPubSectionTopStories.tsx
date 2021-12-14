import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSectionTopStoriesView'

export const blockPubSectionTopStories: BlockProps = {
  id: 'blockPubSectionTopStories',
  name: 'Section Top Stories',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Section with Top Stories',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

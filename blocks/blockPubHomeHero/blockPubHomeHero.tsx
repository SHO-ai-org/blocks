import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubHomeHeroView'

export const blockPubHomeHero: BlockProps = {
  id: 'blockPubHomeHero',
  name: 'Home Hero',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Hero of a publications',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

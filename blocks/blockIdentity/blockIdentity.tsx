import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockIdentityView'

export const blockIdentity: BlockProps = {
  id: 'blockIdentity',
  name: 'Identity',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Visual identity summary',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

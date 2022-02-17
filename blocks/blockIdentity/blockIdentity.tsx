import React from 'react'
import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockIdentityView'

export const blockIdentity: BlockProps = {
  id: 'blockIdentity',
  name: 'Identity',
  viewComponent: View,
  editComponent: View,

  description: 'Visual identity summary',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

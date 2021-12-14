import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockPubSignInView'

export type BlockSignInProps = {
  picture1?: string
  picture2?: string
  picture3?: string
  picture4?: string
  picture5?: string
}

export const blockPubSignIn: BlockProps<BlockSignInProps> = {
  id: 'blockPubSignIn',
  name: 'Publication Sign In',
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: 'Signinn into publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

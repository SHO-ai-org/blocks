import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockGoogleAdView'

export const blockGoogleAd: BlockProps = {
  id: 'blockGoogleAd',
  name: 'Google Ad',
  viewComponent: View,
  editComponent: View,

  description: 'Google Ad content',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

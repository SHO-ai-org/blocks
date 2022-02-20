import React from 'react'

import { BlockProps } from '../../../../../utils/typescript-utils'
import View from './BlockEmailCaptureView'

export const blockEmailCapture: BlockProps = {
  id: 'blockEmailCapture',
  name: 'Email Capture',
  viewComponent: View,
  editComponent: View,

  description: 'Capture Emails',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

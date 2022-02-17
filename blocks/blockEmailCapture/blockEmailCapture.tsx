import React from 'react'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import View from './BlockEmailCaptureView'

export const blockEmailCapture: BlockTemplateProps = {
  id: 'blockEmailCapture',
  name: 'Email Capture',
  viewComponent: View,
  editComponent: View,

  description: 'Capture Emails',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

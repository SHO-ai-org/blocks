import { BlockProps } from '../../../../../utils/typescript-utils'
import Edit from './BlockButtonsEdit'
import View from './BlockButtonsView'

export const blockButtons: BlockProps = {
  id: 'blockButtons',
  name: 'Buttons',
  viewComponent: View,
  editComponent: Edit,

  description: 'Identity buttons',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: ['content'],
}

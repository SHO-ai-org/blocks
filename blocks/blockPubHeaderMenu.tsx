import { BlockPubHeaderMenu, PubHeaderMenuCustomPageData } from '@sho-ai-org/pattern-library'

import { BlockProps } from '../../../../utils/typescript-utils'
import withNextAuthProps from '../../../../hoc/withNextAuthProps'

export const blockPubHeaderMenu: BlockProps<{
  ShapeOfCustomPropsDerivedFromPageData: PubHeaderMenuCustomPageData
}> = {
  id: 'blockPubHeaderMenu',
  name: 'Publication Header',
  viewComponent: withNextAuthProps(BlockPubHeaderMenu),
  editComponent: withNextAuthProps(BlockPubHeaderMenu),
  description: 'Header of publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

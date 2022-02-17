import { BlockPubHeaderMenu, PubHeaderMenuCustomPageData } from '@sho-ai-org/pattern-library'

import { BlockTemplateProps } from '../../../../../utils/typescript-utils'
import withNextAuthProps from '../../../../../hoc/withNextAuthProps'

export const blockPubHeaderMenu: BlockTemplateProps<{
  ShapeOfCustomPropsDerivedFromPageData: PubHeaderMenuCustomPageData
}> = {
  id: 'blockPubHeaderMenu',
  name: 'Publication Header',
  viewComponent: withNextAuthProps(BlockPubHeaderMenu) as any,
  editComponent: withNextAuthProps(BlockPubHeaderMenu) as any,

  description: 'Header of publication',
  blockVariationToolbarDefaultOption: '',
  blockVariationToolbarOptions: [],
  tags: [''],
}

import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { BlockPubTagHeaderCustomPageData } from './blockPubTagHeader'

const BlockPubTagHeaderView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubTagHeaderCustomPageData
  }>
> = props => (
  <div className="tag-header section wf-section" style={{ backgroundColor: '#fff' }}>
    <div className="main-container">
      <div className="justify-content-center">
        <div className="caption-brand">Articles tagged with:</div>
        <h1 className="display-heading">{props.blockCustomData?.tagName}</h1>
      </div>
    </div>
  </div>
)

export default BlockPubTagHeaderView

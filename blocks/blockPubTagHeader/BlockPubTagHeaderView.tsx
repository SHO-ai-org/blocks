import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { BlockPubTagHeaderProps } from './blockPubTagHeader'

const BlockPubTagHeaderView: FC<
  BlockViewProps<{
    ShapeOfBlockDataInDB: BlockPubTagHeaderProps
  }>
> = ({ data }) => (
  <div className="tag-header section wf-section" style={{ backgroundColor: '#fff' }}>
    <div className="main-container">
      <div className="justify-content-center">
        <div className="caption-brand">Articles tagged with:</div>
        <h1 className="display-heading">{data.name}</h1>
      </div>
    </div>
  </div>
)

export default BlockPubTagHeaderView

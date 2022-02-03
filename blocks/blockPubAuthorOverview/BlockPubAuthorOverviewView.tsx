import { Box } from '@sho-ai-org/pattern-library'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubAuthorOverviewDataProps } from './blockPubAuthorOverview'

const BlockPubAuthorOverviewView: FC<
  BlockViewProps<{
    ShapeOfBlockDataInDB: BlockPubAuthorOverviewDataProps
  }>
> = ({ data }) => (
  <div id="Author-Overview" className="section ben-background-brand sue-brand wf-section">
    <div className="main-container author-container">
      <div className="autor-row">
        {data?.picture && (
          <Box
            className="margin-right"
            css={{
              width: '120px',
              '& > div': {
                paddingBottom: '100%',
                width: '100%',
                height: '100%',
              },
            }}>
            <Image
              className="avatar-large"
              alt={data?.name}
              layout="fill"
              objectFit="cover"
              asset={{
                public: true,
                key: data.picture,
              }}
            />
          </Box>
        )}
        <div>
          <h2 className="author-heading">{data?.name}</h2>
          <div className="caption-brand muted author-position">{data?.position}</div>
        </div>
      </div>
      <div>{data.bio}</div>
    </div>
  </div>
)

export default BlockPubAuthorOverviewView

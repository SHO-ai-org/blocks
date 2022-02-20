import { Box } from '@sho-ai-org/pattern-library'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubAuthorOverviewCustomPageData } from './blockPubAuthorOverview'

const BlockPubAuthorOverviewView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubAuthorOverviewCustomPageData
  }>
> = props => {
  const { picture, name, bio, position } = props.blockCustomData

  return (
    <div id="Author-Overview" className="section ben-background-brand sue-brand wf-section">
      <div className="main-container author-container">
        <div className="autor-row">
          {picture && (
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
                alt={name}
                layout="fill"
                objectFit="cover"
                asset={{
                  public: true,
                  key: picture,
                }}
              />
            </Box>
          )}
          <div>
            <h2 className="author-heading">{name}</h2>
            <div className="caption-brand muted author-position">{position}</div>
          </div>
        </div>
        <div>{bio}</div>
      </div>
    </div>
  )
}
export default BlockPubAuthorOverviewView

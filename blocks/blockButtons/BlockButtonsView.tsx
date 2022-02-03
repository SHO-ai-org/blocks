import * as SHO from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import * as C from './BlockButtonsComp'

const BlockButtonsView: FC<BlockViewProps> = () => (
  <C.Container>
    <SHO.Flex
      wrap="wrap"
      css={{
        gap: '$4',
      }}>
      {C.options.map(({ id, title }) => (
        <div key={id}>
          <SHO.Text css={{ mb: '$4' }}>{title}</SHO.Text>
          <SHO.Button variant={id} label="Example" />
        </div>
      ))}
    </SHO.Flex>
  </C.Container>
)

export default BlockButtonsView

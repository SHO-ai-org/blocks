import { Text, Flex, Button } from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import * as C from './BlockButtonsComp'

const BlockButtonsView: FC<BlockViewProps> = () => (
  <C.Container>
    <Flex
      wrap="wrap"
      css={{
        gap: '$4',
      }}>
      {C.options.map(({ id, title }) => (
        <div key={id}>
          <Text css={{ mb: '$4' }}>{title}</Text>
          <Button variant={id} label="Example" />
        </div>
      ))}
    </Flex>
  </C.Container>
)

export default BlockButtonsView

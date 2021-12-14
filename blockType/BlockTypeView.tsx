import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import * as C from './blockTypeComp'

export const BlockTypeView: FC<BlockViewProps> = ({ theme }) => {
  return <C.BlockTypeComp theme={theme} />
}

export default BlockTypeView

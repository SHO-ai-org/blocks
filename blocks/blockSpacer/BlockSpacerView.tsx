import * as SHO from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const Space = SHO.styled('div', {
  variants: {
    variant: {
      big: {
        py: '$17',
      },
      small: {
        py: '$9',
      },
    },
  },
  defaultVariants: {
    variant: 'small',
  },
})

const SpacerView: FC<BlockViewProps> = ({ variant }) => <Space variant={variant} />

export default SpacerView

import * as SHO from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const Space = SHO.styled('div', {
  variants: {
    variant: {
      big: {
        py: '$9',
      },
      small: {
        py: '$2',
      },
    },
  },
  defaultVariants: {
    variant: 'small',
  },
})

const HR = SHO.styled('hr', {
  border: 'none',
  borderBottom: '1px solid $ter',
})

const DividerView: FC<BlockViewProps> = ({ variant }) => (
  <Space variant={variant}>
    <SHO.Gutter>
      <HR />
    </SHO.Gutter>
  </Space>
)

export default DividerView

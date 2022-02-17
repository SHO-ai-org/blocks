import { styled, Gutter } from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const Space = styled('div', {
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

const HR = styled('hr', {
  border: 'none',
  borderBottom: '1px solid $ter',
})

const DividerView: FC<BlockViewProps> = ({ variant }) => (
  <Space variant={variant}>
    <Gutter>
      <HR />
    </Gutter>
  </Space>
)

export default DividerView

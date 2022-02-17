import { FC } from 'react'
import { Text, Gutter } from '@sho-ai-org/pattern-library'

export const Container: FC = ({ children }) => (
  <Gutter>
    <Text variant="h2" allowNaturalMb="true">
      Buttons
    </Text>
    <Text allowNaturalMb="true">
      Buttons brings a brand to life and gives clarity, consistency, and authenticity to communications.
    </Text>
    {children}
  </Gutter>
)

export const options: { id: 'primary' | 'secondary' | 'tertiary'; title: string }[] = [
  {
    id: 'primary',
    title: 'Primary',
  },
  {
    id: 'secondary',
    title: 'Secondary',
  },
  {
    id: 'tertiary',
    title: 'Tertiary',
  },
]

import { FC } from 'react'
import * as SHO from '@sho-ai-org/pattern-library'

export const Container: FC = ({ children }) => (
  <SHO.Gutter>
    <SHO.Text variant="h2" allowNaturalMb="true">
      Buttons
    </SHO.Text>
    <SHO.Text allowNaturalMb="true">
      Buttons brings a brand to life and gives clarity, consistency, and authenticity to communications.
    </SHO.Text>
    {children}
  </SHO.Gutter>
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

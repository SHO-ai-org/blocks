import * as SHO from '@sho-ai-org/pattern-library'
import React, { FC } from 'react'

export const ColorTextContainer = SHO.styled('div', {
  backgroundColor: '$gs12',
  p: '$4',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  '*': {
    color: '$gs1_75',
  },
  '&:hover': {
    '*': {
      color: '$gs1',
    },
  },
})

const ColorCardsContainer = SHO.styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  rowGap: '$4',
  justifyContent: 'space-between',
})

export const Container: FC<{
  uiCallback: ({ title, id }: { title: string; id: string }) => React.ReactNode
  cssColorCardsContainer: any
}> = ({ uiCallback, cssColorCardsContainer = {} }) => (
  <SHO.Gutter>
    <SHO.Text variant="h2" allowNaturalMb="true">
      Colors
    </SHO.Text>
    <SHO.Text allowNaturalMb="true">
      Color brings a brand to life and gives clarity, consistency, and authenticity to communications.
    </SHO.Text>
    <ColorCardsContainer css={cssColorCardsContainer}>
      {[
        {
          title: 'primary',
          id: 'pri',
        },
        {
          title: 'dark',
          id: 'sec',
        },
        {
          title: 'light',
          id: 'ter',
        },
        {
          title: 'accent',
          id: 'acc',
        },
        {
          title: 'text',
          id: 'gs5',
        },
        {
          title: 'surface',
          id: 'gs1',
        },
      ].map(({ title, id }) => (
        <div key={title}>
          <SHO.Text variant="overline" allowNaturalMb="true">
            {title}
          </SHO.Text>
          <SHO.Box
            css={{
              backgroundColor: `$${id}`,
              color: '$gs1',
              flex: '1 1 100%',
              '&:hover': {
                ligther: ['$gs1'],
              },
              '@bp1': {
                flex: '1 1 auto',
              },
            }}>
            <SHO.Box
              css={{
                height: '270px',
              }}
            />
            {uiCallback({ title, id })}
          </SHO.Box>
        </div>
      ))}
    </ColorCardsContainer>
  </SHO.Gutter>
)

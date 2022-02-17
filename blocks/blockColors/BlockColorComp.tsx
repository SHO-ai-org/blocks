import { Text, Gutter, styled, Box } from '@sho-ai-org/pattern-library'
import React, { FC } from 'react'

export const ColorTextContainer = styled('div', {
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

const ColorCardsContainer = styled('div', {
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
  <Gutter>
    <Text variant="h2" allowNaturalMb="true">
      Colors
    </Text>
    <Text allowNaturalMb="true">
      Color brings a brand to life and gives clarity, consistency, and authenticity to communications.
    </Text>
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
          <Text variant="overline" allowNaturalMb="true">
            {title}
          </Text>
          <Box
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
            <Box
              css={{
                height: '270px',
              }}
            />
            {uiCallback({ title, id })}
          </Box>
        </div>
      ))}
    </ColorCardsContainer>
  </Gutter>
)

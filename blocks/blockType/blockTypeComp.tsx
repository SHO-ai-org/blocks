import { Text, Gutter, Box, Flex } from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { Theme } from '../../../../../utils/typescript-utils'

type VariantProps =
  | 'blockquote'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'

export const BlockTypeComp: FC<{ theme: Theme }> = ({ theme, children }) => (
  <Gutter>
    <Text variant="h2" allowNaturalMb="true">
      Type
    </Text>
    <Text allowNaturalMb="true">
      Typography is a visual element that arranges your brands written copy in a legible way and aligns your messaging
      with your brand personality.
    </Text>
    {children && children}
    <Box
      css={{
        backgroundColor: '$gs1',
        overflowX: 'auto',
      }}>
      {theme?.typefaces &&
        [
          {
            title: 'Headline 1',
            variant: 'h1' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h1'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h1'].fontSize}px`,
            spacing: `${theme.scaleCategories['h1'].letterSpacing}em`,
          },
          {
            title: 'Headline 2',
            variant: 'h2' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h2'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h2'].fontSize}px`,
            spacing: `${theme.scaleCategories['h2'].letterSpacing}em`,
          },
          {
            title: 'Headline 3',
            variant: 'h3' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h3'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h3'].fontSize}px`,
            spacing: `${theme.scaleCategories['h3'].letterSpacing}em`,
          },
          {
            title: 'Headline 4',
            variant: 'h4' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h4'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h4'].fontSize}px`,
            spacing: `${theme.scaleCategories['h4'].letterSpacing}em`,
          },
          {
            title: 'Headline 5',
            variant: 'h5' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h5'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h5'].fontSize}px`,
            spacing: `${theme.scaleCategories['h5'].letterSpacing}em`,
          },
          {
            title: 'Headline 6',
            variant: 'h6' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['h6'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['h6'].fontSize}px`,
            spacing: `${theme.scaleCategories['h6'].letterSpacing}em`,
          },
          {
            title: 'Body 1 ',
            variant: 'body1' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['body1'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['body1'].fontSize}px`,
            spacing: `${theme.scaleCategories['body1'].letterSpacing}em`,
          },
          {
            title: 'Body 2',
            variant: 'body2' as VariantProps,
            font: theme.typefaces[theme.scaleCategories['body2'].typefaceId]?.fontFamily,
            weight: 'normal',
            size: `${theme.scaleCategories['body2'].fontSize}px`,
            spacing: `${theme.scaleCategories['body2'].letterSpacing}em`,
          },
        ].map(({ title, variant, font, weight, size, spacing }) => (
          <Flex
            key={variant}
            css={{ backgroundColor: '$gs1', color: '$gs5', p: '$5', borderBottom: '1px solid $gs2' }}
            justify="between">
            <Text variant={variant} css={{ flex: '1 1 auto' }}>
              {title}
            </Text>
            <Flex css={{ gap: '$2', flex: '1 1 auto' }} justify="between">
              <Box>
                <Text variant="overline" css={{ color: '$gs3' }}>
                  Font
                </Text>
                <Text variant="body2">{font}</Text>
              </Box>
              <Box>
                <Text variant="overline" css={{ color: '$gs3' }}>
                  Weight
                </Text>
                <Text variant="body2">{weight}</Text>
              </Box>
              <Box>
                <Text variant="overline" css={{ color: '$gs3' }}>
                  Size
                </Text>
                <Text variant="body2">{size}</Text>
              </Box>
              <Box>
                <Text variant="overline" css={{ color: '$gs3' }}>
                  Spacing
                </Text>
                <Text variant="body2">{spacing}</Text>
              </Box>
            </Flex>
          </Flex>
        ))}
    </Box>
  </Gutter>
)

export default BlockTypeComp

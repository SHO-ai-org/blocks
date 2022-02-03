import * as SHO from '@sho-ai-org/pattern-library'
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
  <SHO.Gutter>
    <SHO.Text variant="h2" allowNaturalMb="true">
      Type
    </SHO.Text>
    <SHO.Text allowNaturalMb="true">
      Typography is a visual element that arranges your brands written copy in a legible way and aligns your messaging
      with your brand personality.
    </SHO.Text>
    {children && children}
    <SHO.Box
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
          <SHO.Flex
            key={variant}
            css={{ backgroundColor: '$gs1', color: '$gs5', p: '$5', borderBottom: '1px solid $gs2' }}
            justify="between">
            <SHO.Text variant={variant} css={{ flex: '1 1 auto' }}>
              {title}
            </SHO.Text>
            <SHO.Flex css={{ gap: '$2', flex: '1 1 auto' }} justify="between">
              <SHO.Box>
                <SHO.Text variant="overline" css={{ color: '$gs3' }}>
                  Font
                </SHO.Text>
                <SHO.Text variant="body2">{font}</SHO.Text>
              </SHO.Box>
              <SHO.Box>
                <SHO.Text variant="overline" css={{ color: '$gs3' }}>
                  Weight
                </SHO.Text>
                <SHO.Text variant="body2">{weight}</SHO.Text>
              </SHO.Box>
              <SHO.Box>
                <SHO.Text variant="overline" css={{ color: '$gs3' }}>
                  Size
                </SHO.Text>
                <SHO.Text variant="body2">{size}</SHO.Text>
              </SHO.Box>
              <SHO.Box>
                <SHO.Text variant="overline" css={{ color: '$gs3' }}>
                  Spacing
                </SHO.Text>
                <SHO.Text variant="body2">{spacing}</SHO.Text>
              </SHO.Box>
            </SHO.Flex>
          </SHO.Flex>
        ))}
    </SHO.Box>
  </SHO.Gutter>
)

export default BlockTypeComp

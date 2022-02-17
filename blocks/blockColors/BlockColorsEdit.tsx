import { useContext, FC } from 'react'
import useIsMounted from 'ismounted'
import { useFormData, Textfield } from '@sho-ai-org/pattern-library'
import { useCallback } from 'react'
import * as C from './BlockColorComp'
import { snackbarContext } from '../../../../../utils/context-utils'
import { BlockEditProps } from '../../../../../utils/typescript-utils'
import { useUpdateBrandStyleMutation } from '../../../../../graphql/operations'

const initializeColorData = ({ theme }) =>
  theme?.colors?.length
    ? theme.colors.reduce(
        (tot, color) => ({
          ...tot,
          [color.colorId]: `rgba(${color.value.r},${color.value.g},${color.value.b},${color.value.a})`,
        }),
        {},
      )
    : {}

const BlockColorsEdit: FC<BlockEditProps> = ({ theme, brandStyleId }) => {
  const initialData = initializeColorData({ theme })
  const openSnackbar = useContext(snackbarContext)
  const isMounted = useIsMounted()
  const { formDataTextfieldChange, formData } = useFormData(initialData)
  // const { formDataTextfieldChange, formData } = useFormData({ sec: 'mike' })

  const [onUpdateBrandStyle] = useUpdateBrandStyleMutation()

  const onBlurCallback = useCallback(
    e => {
      if (openSnackbar) {
        openSnackbar({ message: 'updating color...' })
      }
      const colorId = e.target.name
      const newRGBAValue = formData[colorId]
      // https://stackoverflow.com/questions/7543818/regex-javascript-to-match-both-rgb-and-rgba
      const pattern = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      if (newRGBAValue && pattern.test(newRGBAValue)) {
        const newTheme = {
          ...theme,
          colors: theme.colors.map(color => {
            if (color.colorId === colorId) {
              const f = newRGBAValue.split(','),
                r = parseInt(f[0].slice(5)), // TODO: do additional checks on r, g, b so that its amongst 0-255
                g = parseInt(f[1]),
                b = parseInt(f[2]),
                a = parseInt(f[3]) // TODO: do additional checks on r, g, b so that it's >0.5 or 1 or perhaps don't give the option at all
              return {
                ...color,
                value: {
                  r,
                  g,
                  b,
                  a,
                },
              }
            } else {
              return color
            }
          }),
        }
        onUpdateBrandStyle({
          variables: {
            brandStyle: {
              id: brandStyleId,
              properties: JSON.stringify(newTheme),
            },
          },
        })
        if (isMounted && openSnackbar) {
          openSnackbar({ message: `${theme?.colors?.find(color => color?.colorId === colorId)?.name} color updated` })
        }
      }
    },
    [formData, theme, brandStyleId, onUpdateBrandStyle, openSnackbar, isMounted],
  )

  return (
    <C.Container
      cssColorCardsContainer={{
        '& > div': {
          width: '48%',
          '@bp3': {
            width: '30%',
          },
        },
      }}
      uiCallback={({ id }) => (
        <C.ColorTextContainer data-intercom-target={id} css={{ scrollMarginTop: '60px' }} key={id}>
          <Textfield
            placeholder="rgba(x,x,x,1)"
            name={id}
            value={formData[id]}
            onChange={formDataTextfieldChange}
            onBlur={onBlurCallback}
          />
        </C.ColorTextContainer>
      )}
    />
  )
}

export default BlockColorsEdit

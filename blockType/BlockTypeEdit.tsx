import { useMemo, useContext, FC } from 'react'
import * as SHO from '@sho-ai-org/pattern-library'
import useIsMounted from 'ismounted'
import * as C from './blockTypeComp'
import Form from '../../../Form'
import { googleWebFonts } from '../../../../../utils/googleWebFonts'
import { v4 as uuidv4 } from 'uuid'
import { snackbarContext } from '../../../../../utils/context-utils'
import { useUpdateBrandStyleMutation } from '../../../../../graphql/operations'
import { BlockEditProps } from '../../../../../utils/typescript-utils'

export const BlockTypeEdit: FC<BlockEditProps> = ({ theme, brandStyleId }) => {
  const [onUpdateBrandStyle] = useUpdateBrandStyleMutation()
  const openSnackbar = useContext(snackbarContext)
  const isMounted = useIsMounted()
  const fontFamilyOptions = useMemo(
    () =>
      googleWebFonts.map(font => ({
        value: font.family,
        label: font.family,
      })),
    [],
  )

  return (
    <C.BlockTypeComp theme={theme}>
      <SHO.Box
        css={{
          '& > div': {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            width: '100%',
          },
          form: {
            display: 'flex',
            flexFlow: 'row',
            '& > div': {
              mr: '$4',
            },
          },
        }}>
        <Form
          callback={({ headerFont, bodyFont }) => {
            const newTheme = {
              ...theme,
              typefaces: {},
            }
            // HEADER FONT
            const headerFontId = `typeface_${uuidv4()}`
            const headerVariantId = `typevariant_${uuidv4()}`
            const googleHeaderFont = googleWebFonts.find(font => font.family === headerFont)

            newTheme.typefaces[headerFontId] = {
              typefaceId: headerFontId,
              fontFamily: googleHeaderFont?.family,
              category: googleHeaderFont?.category,
              variants: [
                {
                  typefaceVariantId: headerVariantId,
                  typefaceId: headerFontId,
                  fontWeight: '400',
                  fontStyle: 'normal',
                  format: googleHeaderFont?.format,
                  fontURL: googleHeaderFont?.files['400'],
                },
              ],
            }
            newTheme.scaleCategories.h1.typefaceId = headerFontId
            newTheme.scaleCategories.h1.typefaceVariantId = headerVariantId
            newTheme.scaleCategories.h2.typefaceId = headerFontId
            newTheme.scaleCategories.h2.typefaceVariantId = headerVariantId
            newTheme.scaleCategories.h3.typefaceId = headerFontId
            newTheme.scaleCategories.h3.typefaceVariantId = headerVariantId
            newTheme.scaleCategories.h4.typefaceId = headerFontId
            newTheme.scaleCategories.h4.typefaceVariantId = headerVariantId
            newTheme.scaleCategories.h5.typefaceId = headerFontId
            newTheme.scaleCategories.h5.typefaceVariantId = headerVariantId
            newTheme.scaleCategories.h6.typefaceId = headerFontId
            newTheme.scaleCategories.h6.typefaceVariantId = headerVariantId

            console.log('headerFont', headerFont)
            console.log('bodyFont', bodyFont)

            // BODY FONT
            const bodyFontId = bodyFont === headerFont ? headerFontId : `typeface_${uuidv4()}`
            const bodyVariantId = bodyFont === headerFont ? headerVariantId : `typevariant_${uuidv4()}`
            const googleBodyFont = googleWebFonts.find(font => font.family === bodyFont)
            newTheme.typefaces[bodyFontId] = {
              typefaceId: bodyFontId,
              fontFamily: googleBodyFont?.family,
              category: googleBodyFont?.category,
              variants: [
                {
                  typefaceVariantId: bodyVariantId,
                  typefaceId: bodyFontId,
                  fontWeight: '400',
                  fontStyle: 'normal',
                  format: googleBodyFont?.format,
                  fontURL: googleBodyFont?.files['400'],
                },
              ],
            }
            newTheme.scaleCategories.subtitle1.typefaceId = bodyFontId
            newTheme.scaleCategories.subtitle1.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.subtitle2.typefaceId = bodyFontId
            newTheme.scaleCategories.subtitle2.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.body1.typefaceId = bodyFontId
            newTheme.scaleCategories.body1.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.body2.typefaceId = bodyFontId
            newTheme.scaleCategories.body2.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.button.typefaceId = bodyFontId
            newTheme.scaleCategories.button.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.caption.typefaceId = bodyFontId
            newTheme.scaleCategories.caption.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.overline.typefaceId = bodyFontId
            newTheme.scaleCategories.overline.typefaceVariantId = bodyVariantId
            newTheme.scaleCategories.blockquote.typefaceId = bodyFontId
            newTheme.scaleCategories.blockquote.typefaceVariantId = bodyVariantId
            // console.log('newTheme is ', newTheme)
            onUpdateBrandStyle({
              variables: {
                brandStyle: {
                  id: brandStyleId,
                  properties: JSON.stringify(newTheme),
                },
              },
            })
            if (isMounted && openSnackbar) {
              openSnackbar({ message: 'Fonts have been successfully updated' })
            }
          }}
          fields={[
            {
              name: 'headerFont',
              fieldType: 'dropdown',
              hintText: 'header font',
              options: fontFamilyOptions,
              defaultOption: 'Work Sans',
              floatingLabelText: 'Header Font',
            },
            {
              name: 'bodyFont',
              fieldType: 'dropdown',
              hintText: 'body font',
              options: fontFamilyOptions,
              defaultOption: 'Work Sans',
              floatingLabelText: 'Body Font',
            },
          ]}
          buttonLabel="add fonts"
        />
      </SHO.Box>
    </C.BlockTypeComp>
  )
}

export default BlockTypeEdit

import { convertThemeColor2Rgba, shadeRGBAColor, replaceRgbaAlpha, isColorAALevelADHCompliant } from './color-utils'
import { Theme } from './typescript-utils'
const COLOR_CONTRAST = 0.8
import { config as ShoAiStitchesConfig } from '@sho-ai-org/pattern-library'
import { CSS } from '../utils/typescript-utils'

export const convertThemeToStitchesConfig = (theme: Theme): [CSS['theme'], any] => { // TODO: fix return type 
  const config = ShoAiStitchesConfig.theme
  ///////////////////////////////
  /////////// COLORS ////////////
  ///////////////////////////////
  if (theme?.colors?.length) {
    const gs1Color = theme.colors.find(color => color.colorId === 'gs1')
    const gs12Color = theme.colors.find(color => color.colorId === 'gs12')
    const gs1RgbaString = gs1Color ? convertThemeColor2Rgba(gs1Color) : null
    const gs12RgbaString = gs12Color ? convertThemeColor2Rgba(gs12Color) : null

    theme.colors.forEach(color => {
      const rgbaColor = convertThemeColor2Rgba(color)
      config.colors[color.colorId] = rgbaColor
      if ([
        'gs1',
        'gs2',
        'gs3',
        'gs4',
        'gs5',
        'gs6',
        'gs7',
        'gs8',
        'gs9',
        'gs10',
        'gs11',
        'gs12',
        'w1',
        'w2',
        'w3',
        'w4',
        'w5',
        'w6',
        'w7',
        'w8',
        'w9',
        'w10',
        'w11',
        'w12',
        'b1',
        'b2',
        'b3',
        'b4',
        'b5',
        'b6',
        'b7',
        'b8',
        'b9',
        'b10',
        'b11',
        'b12',
        'btnPriBo',
        'btnSecBo',
        'btnTerBo',
        'btnGhoBo'
      ].includes(color.colorId)) { } else if (
        ['btnPriBg',
          'btnSecBg',
          'btnTerBg',
          'btnGhoBg',
        ].includes(color.colorId)
      ) {
        if (gs1Color?.value && gs1RgbaString && gs12RgbaString) {
          config.colors[color.colorId.replace('Bg', 'Text')] = isColorAALevelADHCompliant({
            textRGB: gs1Color.value,
            backgroundRGB: color.value
          }) ? gs1RgbaString : gs12RgbaString
        }
      } else if (['pri', 'sec', 'lin', 'ale', 'suc', 'war'].includes(color.colorId)) {
        if (gs1Color?.value && gs1RgbaString && gs12RgbaString) {
          config.colors[`${color.colorId}Text`] = isColorAALevelADHCompliant({
            textRGB: gs1Color.value,
            backgroundRGB: color.value
          }) ? gs1RgbaString : gs12RgbaString
        }
        config.colors[`${color.colorId}_90`] = replaceRgbaAlpha(rgbaColor, 0.9)
        config.colors[`${color.colorId}_D`] = shadeRGBAColor(rgbaColor, COLOR_CONTRAST)
        config.colors[`${color.colorId}_L`] = shadeRGBAColor(rgbaColor, COLOR_CONTRAST * -1)
      }
    })
  }

  /////////////////////////////// 
  //////// BUTTONS /////////////
  ///////////////////////////////
  [
    ['Pri', 'primary'],
    ['Sec', 'secondary'],
    ['Ter', 'tertiary'],
  ].forEach(([a, b]) => {
    if (theme?.colors?.length) {
      config.colors[`btn${a}`] = convertThemeColor2Rgba(
        theme.colors.find(color => color.colorId === theme.button[b].typeColorId),
      )
      config.colors[`btn${a}Bg`] = convertThemeColor2Rgba(
        theme.colors.find(color => color.colorId === theme.button[b].backgroundColorId),
      )
      if (config.colors[`btn${a}Bg`]) {
        config.colors[`btn${a}Bg_D`] = shadeRGBAColor(
          convertThemeColor2Rgba(theme.colors.find(color => color.colorId === theme.button[b].backgroundColorId)),
          COLOR_CONTRAST,
        )
        config.colors[`btn${a}Bg_L`] = shadeRGBAColor(
          convertThemeColor2Rgba(theme.colors.find(color => color.colorId === theme.button[b].backgroundColorId)),
          COLOR_CONTRAST * -1,
        )
      }
      config.colors[`btn${a}Bo`] = convertThemeColor2Rgba(
        theme.colors.find(color => color.colorId === theme.button[b].borderColorId),
      )
    }
    config.radii[`btn${a}TL`] = `${theme.button[b].borderRadiusTL}px`
    config.radii[`btn${a}TR`] = `${theme.button[b].borderRadiusTR}px`
    config.radii[`btn${a}BL`] = `${theme.button[b].borderRadiusBL}px`
    config.radii[`btn${a}BR`] = `${theme.button[b].borderRadiusBR}px`
    config.borderWidths[`btn${a}`] = `${theme.button[b].borderWidth}px`
    config.borderStyles[`btn${a}`] = theme.button[b].borderStyle
  })


  ///////////////////////////////
  /////////// FONTS ////////////
  ///////////////////////////////
  const fontFaceArray: {
    fontFamily: string,
    src: string,
    fontStyle: string,
    fontWeight: string
  }[] = []

  Object.keys(theme.scaleCategories).forEach(scaleCatId => {
    const scaleCat = theme.scaleCategories[scaleCatId]
    const typeface = theme.typefaces[scaleCat.typefaceId]

    // fontCases
    if (scaleCat.case) {
      config.fontCases[scaleCatId] = scaleCat.case
    }
    // fontSizes
    if (scaleCat.fontSize) {
      config.fontSizes[scaleCatId] = `${scaleCat.fontSize / 10}rem` // converting number in px to rem
    }
    // spacesAfter
    if (scaleCat.spaceAfter) {
      config.spacesAfter[scaleCatId] = `${scaleCat.spaceAfter / 10}rem`
    }
    // lineHeights
    if (scaleCat.lineHeight) {
      config.lineHeights[scaleCatId] = `${scaleCat.lineHeight}em`
    }
    // letterSpacings
    if (scaleCat.letterSpacing) {
      config.letterSpacings[scaleCatId] = `${scaleCat.letterSpacing}em`
    }

    if (typeface) {
      // fonts (family)
      config.fonts[scaleCatId] = typeface.fontFamily
      const typefaceVariant = typeface.variants.find(variant => variant.typefaceVariantId === scaleCat.typefaceVariant)
      if (typefaceVariant) {
        // fontWeights
        config.fonts[scaleCatId] = typefaceVariant.fontWeight
        // fontStyles
        config.fonts[scaleCatId] = typefaceVariant.fontStyle
      }
    }
  })

  // font files
  if (theme?.typefaces && Object.keys(theme.typefaces)?.length) {
    Object.keys(theme.typefaces).forEach(typefaceID => {
      const typeface = theme.typefaces[typefaceID]
      typeface.variants.forEach(variant => {
        // Need to surround with quotes font family names that have digits, special characters, or white space
        // https://stackoverflow.com/questions/7638775/do-i-need-to-wrap-quotes-around-font-family-names-in-css
        const pattern = /[\s0-9_.,!"'/$]/
        const containsDangerousCharacter = pattern.test(typeface.fontFamily)

        fontFaceArray.push({
          fontFamily: containsDangerousCharacter ? `'${typeface.fontFamily}'` : typeface.fontFamily,
          // woff2 fastest for web and where all browsers are heading
          // woff as fallback for I.E. 11
          // https://css-tricks.com/snippets/css/using-font-face/
          src: `url(${variant.fontURL}) format('${variant.format}')`,
          fontStyle: variant.fontStyle.includes('italic') ? 'italic' : 'normal',
          fontWeight: variant.fontWeight,
        })
      })
    })
  }
  return [config, fontFaceArray]
}

export const shoAiTheme = JSON.stringify({
  schemaVersion: 1,
  colors: [
    {
      colorId: 'pri',
      name: 'Primary',
      palette: 'primary',
      value: {
        r: 64,
        g: 121,
        b: 162,
        a: 1,
      },
    },
    {
      colorId: 'sec',
      name: 'Secondary',
      palette: 'primary',
      value: {
        r: 247,
        g: 53,
        b: 88,
        a: 1,
      },
    },
    {
      colorId: 'lin',
      name: 'Link',
      palette: 'secondary',
      value: {
        r: 74,
        g: 180,
        b: 249,
        a: 1,
      },
    },
    {
      colorId: 'ale',
      name: 'Alert',
      palette: 'secondary',
      value: {
        r: 150,
        g: 46,
        b: 38,
        a: 1,
      },
    },
    {
      colorId: 'suc',
      name: 'Success',
      palette: 'secondary',
      value: {
        r: 179,
        g: 58,
        b: 58,
        a: 1,
      },
    },
    {
      colorId: 'war',
      name: 'Warning',
      palette: 'secondary',
      value: {
        r: 214,
        g: 191,
        b: 115,
        a: 1,
      },
    },
    {
      colorId: 'gs1',
      name: 'Grayscale 1',
      palette: 'grayscale',
      value: {
        r: 21,
        g: 23,
        b: 24,
        a: 1,
      },
    },
    {
      colorId: 'gs2',
      name: 'Grayscale 2',
      palette: 'grayscale',
      value: {
        r: 26,
        g: 29,
        b: 30,
        a: 1,
      },
    },
    {
      colorId: 'gs3',
      name: 'Grayscale 3',
      palette: 'grayscale',
      value: {
        r: 33,
        g: 36,
        b: 37,
        a: 1,
      },
    },
    {
      colorId: 'gs4',
      name: 'Grayscale 4',
      palette: 'grayscale',
      value: {
        r: 38,
        g: 41,
        b: 43,
        a: 1,
      },
    },
    {
      colorId: 'gs5',
      name: 'Grayscale 5',
      palette: 'grayscale',
      value: {
        r: 44,
        g: 47,
        b: 49,
        a: 1,
      },
    },
    {
      colorId: 'gs6',
      name: 'Grayscale 6',
      palette: 'grayscale',
      value: {
        r: 49,
        g: 53,
        b: 55,
        a: 1,
      },
    },
    {
      colorId: 'gs7',
      name: 'Grayscale 7',
      palette: 'grayscale',
      value: {
        r: 58,
        g: 63,
        b: 65,
        a: 1,
      },
    },
    {
      colorId: 'gs8',
      name: 'Grayscale 8',
      palette: 'grayscale',
      value: {
        r: 77,
        g: 81,
        b: 85,
        a: 1,
      },
    },
    {
      colorId: 'gs9',
      name: 'Grayscale 9',
      palette: 'grayscale',
      value: {
        r: 106,
        g: 113,
        b: 118,
        a: 1,
      },
    },
    {
      colorId: 'gs10',
      name: 'Grayscale 10',
      palette: 'grayscale',
      value: {
        r: 121,
        g: 126,
        b: 132,
        a: 1,
      },
    },
    {
      colorId: 'gs11',
      name: 'Grayscale 11',
      palette: 'grayscale',
      value: {
        r: 156,
        g: 161,
        b: 166,
        a: 1,
      },
    },
    {
      colorId: 'gs12',
      name: 'Grayscale 12',
      palette: 'grayscale',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'b1',
      name: 'Black 1',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b2',
      name: 'Black 2',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b3',
      name: 'Black 3',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b4',
      name: 'Black 4',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b5',
      name: 'Black 5',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b6',
      name: 'Black 6',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b7',
      name: 'Black 7',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b8',
      name: 'Black 8',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b9',
      name: 'Black 9',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b10',
      name: 'Black 10',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b11',
      name: 'Black 11',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'b12',
      name: 'Black 12',
      palette: 'black',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'w1',
      name: 'White 1',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w2',
      name: 'White 2',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w3',
      name: 'White 3',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w4',
      name: 'White 4',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w5',
      name: 'White 5',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w6',
      name: 'White 6',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w7',
      name: 'White 7',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w8',
      name: 'White 8',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w9',
      name: 'White 9',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w10',
      name: 'White 10',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w11',
      name: 'White 11',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    }, {
      colorId: 'w12',
      name: 'White 12',
      palette: 'white',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnPriBg',
      name: 'Button Primary Backgroud',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnPriBo',
      name: 'Button Primary Border',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnSecBg',
      name: 'Button Secondary Backgroud',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnSecBo',
      name: 'Button Secondary Border',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnTerBg',
      name: 'Button Tertiary Backgroud',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnTerBo',
      name: 'Button Tertiary Border',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnPGhoBg',
      name: 'Button Ghost Backgroud',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
    {
      colorId: 'btnPGhoBo',
      name: 'Button Ghost Border',
      palette: 'button',
      value: {
        r: 236,
        g: 237,
        b: 238,
        a: 1,
      },
    },
  ],
  typefaces: {
    typeface_work_sans: {
      typefaceId: 'typeface_work_sans',
      fontFamily: 'Work Sans',
      category: 'sans-serif',
      variants: [
        {
          typefaceVariantId: 'typeface_WS_variant_400',
          typefaceId: 'typeface_work_sans',
          fontWeight: '400',
          fontStyle: 'normal',
          format: 'woff2',
          fontURL: 'https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2',
        },
        {
          typefaceVariantId: 'typeface_WS_variant_500',
          typefaceId: 'typeface_work_sans',
          fontWeight: '500',
          fontStyle: 'normal',
          format: 'woff2',
          fontURL: 'https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2',
        },
        {
          typefaceVariantId: 'typeface_WS_variant_600',
          typefaceId: 'typeface_work_sans',
          fontWeight: '600',
          fontStyle: 'normal',
          format: 'woff2',
          fontURL: 'https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2',
        },
      ],
    },
  },
  scaleCategories: {
    h1: {
      scaleCategoryId: 'h1',
      name: 'H1',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 50,
      lineHeight: 1.1,
      letterSpacing: 0,
      spaceAfter: 39,
    },
    h2: {
      scaleCategoryId: 'h2',
      name: 'H2',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_600',
      case: 'none',
      fontSize: 38,
      lineHeight: 1.2,
      letterSpacing: 0,
      spaceAfter: 30,
    },
    h3: {
      scaleCategoryId: 'h3',
      name: 'H3',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_600',
      case: 'none',
      fontSize: 33,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 23,
    },
    h4: {
      scaleCategoryId: 'h4',
      name: 'H4',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 26,
      lineHeight: 1.2,
      letterSpacing: 0,
      spaceAfter: 19,
    },
    h5: {
      scaleCategoryId: 'h5',
      name: 'H5',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_600',
      case: 'none',
      fontSize: 22,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 15,
    },
    h6: {
      scaleCategoryId: 'h6',
      name: 'H6',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_500',
      case: 'uppercase',
      fontSize: 13,
      lineHeight: 1.4,
      letterSpacing: 0.03,
      spaceAfter: 14,
    },
    subtitle1: {
      scaleCategoryId: 'subtitle1',
      name: 'Subtitle 1',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 24,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 17,
    },
    subtitle2: {
      scaleCategoryId: 'subtitle2',
      name: 'Subtitle 2',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 10,
    },
    body1: {
      scaleCategoryId: 'body1',
      name: 'Body 1',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 17,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 13,
    },
    body2: {
      scaleCategoryId: 'body2',
      name: 'Body 2',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 15,
      lineHeight: 1.5,
      letterSpacing: 0,
      spaceAfter: 11,
    },
    button: {
      scaleCategoryId: 'button',
      name: 'Button',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'capitalize',
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 0,
    },
    caption: {
      scaleCategoryId: 'caption',
      name: 'Caption',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 8,
    },
    overline: {
      scaleCategoryId: 'overline',
      name: 'Overline',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'uppercase',
      fontSize: 13,
      lineHeight: 1.4,
      letterSpacing: 0.06,
      spaceAfter: 9,
    },
    blockquote: {
      scaleCategoryId: 'blockquote',
      name: 'Blockquote',
      typefaceId: 'typeface_work_sans',
      typefaceVariantId: 'typeface_WS_variant_400',
      case: 'none',
      fontSize: 17,
      lineHeight: 1.4,
      letterSpacing: 0,
      spaceAfter: 22,
    },
  },
  button: {
    primary: {
      id: 'primary',
      borderRadius: 0,
      borderStyle: 'solid',
      borderWidth: 0,
    },
    secondary: {
      id: 'secondary',
      borderRadius: 0,
      borderStyle: 'solid',
      borderWidth: 0,
    },
    tertiary: {
      id: 'tertiary',
      borderRadius: 0,
      borderStyle: 'solid',
      borderWidth: 1,
    },
    ghost: {
      id: 'ghost',
      borderRadius: 0,
      borderStyle: 'unset',
      borderWidth: 0,
    },
  },
  logos: [
    {
      name: 'default',
      id: '1',
      favicon: {
        imageAssetKey: '',
      },
      appicon: {
        imageAssetKey: '',
        backgroundColorId: 'gs6',
      },
      logomark: {
        imageAssetKey: '',
        clearspace: 50,
        backgroundColorId: 'gs6',
        preferredLogo: true,
      },
      horizontallockup: {
        imageAssetKey: '',
        preferredLogo: false,
        clearspace: 50,
        backgroundColorId: 'gs6',
      },
      verticallockup: {
        imageAssetKey: '',
        preferredLogo: false,
        clearspace: 50,
        backgroundColorId: 'gs6',
      },
    }
  ]
})
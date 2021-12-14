export const replaceRgbaAlpha = (color: string, alpha: number | string): string => {
  const f = color.split(','),
    R = parseInt(f[0].slice(5)),
    G = parseInt(f[1]),
    B = parseInt(f[2])
  return `rgba(${R},${G},${B},${alpha})`
}


export const convertThemeColor2Rgba = (color: {
  value: {
    r: number
    g: number
    b: number
    a: number
  } | null
} | undefined): string => {

  if (!color?.value) {
    // console.warn('color is not defined in convertThemeColor2Rgba', color)
    return ''
  } else {
    const { r, g, b, a } = color.value
    return `rgba(${r},${g},${b},${a})`
  }
}

// documentation: https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
export const shadeRGBAColor = (color: string, percent: number): string => {
  const f = color.split(','),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = parseInt(f[0].slice(5)),
    G = parseInt(f[1]),
    B = parseInt(f[2]),
    A = parseInt(f[3])
  return (
    'rgba(' +
    (Math.round((t - R) * p) + R) +
    ',' +
    (Math.round((t - G) * p) + G) +
    ',' +
    (Math.round((t - B) * p) + B) +
    ',' +
    A +
    ')'
  )
}

type RGBObject = {
  r: number, g: number, b: number
}

// Documentation: https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
const luminanace = ({ r, g, b }: RGBObject): number => {
  const a = [r, g, b].map(function (v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

// Function to determine the contrast ratio between two colors.
export const colorContrastRatio = (foregroundRGB: RGBObject, backgroundRGB: RGBObject): number => {
  const luminanceForeground = luminanace(foregroundRGB) + 0.05
  const luminanceBackground = luminanace(backgroundRGB) + 0.05
  // Using the most rated answer forumla by kirilloid is wrong.
  // Try with foregroundRGB = 45,45,45, and background = 255,255,255
  // So using the formula in comment section by zuluk which fixes the formula.
  return Math.max(luminanceForeground, luminanceBackground) / Math.min(luminanceForeground, luminanceBackground)
}

// Determines is the contrast score is ADH compliant.
export const isColorAALevelADHCompliant = ({
  textRGB, backgroundRGB
}: { textRGB: RGBObject, backgroundRGB: RGBObject }): boolean => colorContrastRatio(textRGB, backgroundRGB) > 4.5



// export const shadeColorStichesUtilHelper = (
//   colorToken,
//   property: string,
//   shadePercent: number,
//   config: any,
// ): {
//   [key: string]: string
// } => {
//   const colorTokenWithout$ = colorToken.replace('$', '')

//   let cssRGBA = config.colors[colorTokenWithout$]
//   // Used when color token is an alias of another color token
//   if (cssRGBA.includes('$')) {
//     const newColorTokenWithout$ = cssRGBA.replace('$', '')
//     cssRGBA = config.colors[newColorTokenWithout$]
//   }
//   const newCssRGBA = shadeRGBAColor(cssRGBA, shadePercent)
//   return {
//     [property]: newCssRGBA,
//   }
// }

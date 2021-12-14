/**
 * Capitalizes the first letter of a string
 * ref: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 * @param  {String} string
 * @return {String}   First letter of that string is capitalized
 */
export const capitalizeFirstLetter = (string: string): string => {
  if (string && typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1)
  } else {
    return string
  }
}

export const sanitizeUsername = (username: string): string => {
  let toReturn = ''
  // allows users to type emails without regard to casing
  toReturn = username.toLowerCase()
  // allows users to copy paste and not worry about empty space before, after, or even within username
  toReturn = toReturn.replace(' ', '')
  return toReturn
}

export const sanitizePassword = (password: string): string => password.replace(' ', '')

export const formatToPrice = (price: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0)

export const formatSlugForAppSync = (slug: string | undefined): string => {
  if (!slug) {
    slug = '/'
  }
  if (!slug.endsWith('/')) {
    slug += '/'
  }
  if (!slug.startsWith('/')) {
    slug = '/' + slug
  }
  if (slug === 'home') {
    slug = '/'
  }
  return slug
}

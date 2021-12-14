import { testDomainIsValid } from './url-utils'
import { ValidationFunction } from './typescript-utils'

export const getDomainErrorMessages:ValidationFunction<string> = (domain) => {
  let errorMessage = ''
  if (!domain) {
    errorMessage = 'Must not be empty'
  } else if (hasWhiteSpace(domain)) {
    errorMessage = 'Must not contain spaces'
  } else if (domain.length < 2) {
    errorMessage = 'Must contain at least two characters'
  } else if (domain.length > 49) {
    errorMessage = 'Must contain at most 50 characters'
  } else if (!testDomainIsValid(domain)) {
    errorMessage = 'Must only contain lowercase letters or numbers.'
  }
  return errorMessage
}

const hasWhiteSpace = s => {
  return s.indexOf(' ') >= 0
}

export const isEmail = (email:string):boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const requiredFieldErrorMessages:ValidationFunction<string> = (field) => {
  let errorMessage = ''
  if (!field) {
    errorMessage = 'Cannot be empty'
  }
  return errorMessage
}

export const emailErrorMessages:ValidationFunction<string> = (email) => {
  let errorMessage = ''
  if (!email) {
    errorMessage = 'Must contain email'
  } else if (!isEmail) {
    errorMessage = 'Must be valid email.'
  }
  return errorMessage
}

/**
 * Checks string length is more than the given number.
 *
 * @param  {String} p
 * @param {Number} length
 * @return {boolean}  if more than the given length, return true, otherwise false
 */
export const isStringLengthMoreThan = (p:string, length:number):boolean => p.length > length

/**
 * Checks for numeral in string
 * @param  {String} p string
 * @return {Boolean}  returns true if string contains a digit, false otherwise
 */
export const isWithOneDigit = (p:string):boolean => /\d/.test(p)

/**
 * Checks string has at least an uppercase letter
 * @param  {String } p [description]
 * @return {Boolean}  returns true if string contains uppercase, false otherwise
 */
export const isWithOneUppercase = (p:string):boolean => /[A-Z]/.test(p)

/**
 * Checks for lowercase letter in string
 * @param  {String} p string
 * @return {Boolean}  returns true if string contains lowercase, false otherwise
 */
export const isWithOneLowercase = (p:string):boolean => /[a-z]/.test(p)

/**
 * Checks for Cognito special character in string.
 * Special character list is defined by Cognito.
 * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
 *
 * Unescaped regex is : /\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`/g
 *
 * The complete regex to check fo ra valid Cognito Password is :
 * /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]).{12,}/g *
 *
 * We reduce the number of symbols to ease our UI.
 *
 *
 * @param  {String} p string
 * @return {Boolean}  returns true if string contains a digit, false otherwise
 *
 *
 */
// eslint-disable-next-line
export const isWithOneCognitoSpecialCharacter = (p:string):boolean => /[-_~!@?#%&/\\$*<>]/g.test(p)

export const getPasswordErrorMessage:ValidationFunction<string> = (p) => {
  let errorMessage = ""

  if (!p.length) {
    errorMessage = 'Must contain password'
  } else if (!isStringLengthMoreThan(p, 9)) {
    // 10 characters minimum
    errorMessage = 'Minimum 10 characters\n'
  } else if (!isWithOneDigit(p)) {
    //  1 number at least
    errorMessage = 'At least one numeral [0-9]\n'
  } else if (!isWithOneUppercase(p)) {
    // 1 majuscule
    errorMessage = 'At least one upper case letter [A-Z] \n'
  } else if (!isWithOneLowercase(p)) {
    // 1 letter at least
    errorMessage = 'At least one lower case letter [a-z] \n'
  } else if (!isWithOneCognitoSpecialCharacter(p)) {
    // 1 special char at least
    errorMessage = 'At least one special character [-_~!@?#%&/$*<>] \n'
  }
  return errorMessage
}

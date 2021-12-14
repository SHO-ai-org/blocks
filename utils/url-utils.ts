import { Auth } from 'aws-amplify'
import queryString from 'query-string'
import { validateWorkspaceName } from '../../../shared/validation'

export const getSubdomain = (): string | null => {
  console.log('getSubdomain')
  console.log('window.location.host', window.location.host)
  const location = window.location.host.replace(`${process.env.NEXT_PUBLIC_APP_DOMAIN}`, 'domain')
  const subdomain = location.split('.')[1] ? location.split('.')[0] : null
  return subdomain
}

export const navigateAuthenticatedUserToSubdomain = (subdomain = ''): void => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const storage = filterUserStorage(user.storage)
      const queryStringObject = {
        cognitoUserStorage: JSON.stringify(storage),
      }
      const protocol = window.location.protocol
      const query = queryString.stringify(queryStringObject)
      const queryToUse = query && query.length < 6000 ? `?${query}` : ''
      console.log('protocol', protocol)
      console.log('subdomain', subdomain)
      console.log('queryToUse', queryToUse)
      const newUrl = `${protocol}//${subdomain}.${process.env.NEXT_PUBLIC_APP_DOMAIN}${queryToUse}`
      window.location.href = newUrl
    })
    .catch(err => console.error(err))
}

/**
 * Checks whether a domain is valid
 */
export const testDomainIsValid = (domainName: string): boolean => {
  return validateWorkspaceName(domainName)
}

const filterUserStorage = storage => {
  const filteredStorage = {} as any
  const activeUserKey = `CognitoIdentityServiceProvider.${process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_WEB_CLIENT_ID}.LastAuthUser`
  const activeUser = storage[activeUserKey]
  for (const key of Object.keys(storage)) {
    console.log('KEY', key)
    if (
      key.startsWith(`CognitoIdentityServiceProvider.${process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_WEB_CLIENT_ID}.`)
    ) {
      if (key.includes('userData')) {
        continue
      }
      if (key.endsWith('LastAuthUser') || key.includes(activeUser)) {
        filteredStorage[key] = storage[key]
      }
      continue // do not write key if it's not active user
    }
    if (key.includes('userData')) {
      continue
    }
    if (key.startsWith('ajs') || key.startsWith('CognitoIdentityServiceProvider')) {
      filteredStorage[key] = storage[key]
    }
  }
  return filteredStorage
}

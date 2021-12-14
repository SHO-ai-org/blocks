
import { createAuthLink } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link'
import { from, HttpLink } from '@apollo/client'

// creating link to pass to
export const createLink = auth =>
  from([
    // createAuthLink and createSubscriptionHandshakeLink are required to connect to AppSync
    createAuthLink({
      url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      region: process.env.NEXT_PUBLIC_GRAPHQL_REGION,
      auth,
    }),
    createSubscriptionHandshakeLink(
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      }),
    ),
  ])

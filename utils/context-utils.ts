import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext } from 'react'
import { LOGINSTATUS } from '../hoc/withLoginState'
import { OpenSnackbarType } from '../hoc/withSnackbar'

export const apolloClientContext = createContext<ApolloClient<NormalizedCacheObject> | null>(null)

export const snackbarContext = createContext<OpenSnackbarType | null>(null)

export const loginStatusContext = createContext<LOGINSTATUS | null>(null)
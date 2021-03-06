import { Box } from '@sho-ai-org/pattern-library'
import { getCsrfToken, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import SemissourianLoader from '../../../SemissourianLoader'
import { BlockPubSigninCustomPageData } from './blockPubSignIn'

const BlockPubSignin: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPubSigninCustomPageData
  }>
> = props => {
  const { status } = useSession()
  const router = useRouter()
  const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined)
  const [magicLinkState, setMagicLinkState] = useState<'sent' | 'initial' | 'failed'>('initial')
  const [loaderMessage, setLoaderMessage] = useState('')
  const ref = useRef<HTMLFormElement>(null)
  const [signinData, setSignInData] = useState<URLSearchParams>()
  const [email, setEmail] = useState('')
  const { articlesToDisplay } = props.blockCustomData

  useEffect(() => {
    const myFunction = async () => {
      const token = await getCsrfToken()
      setCsrfToken(token)
    }
    myFunction()
  }, [])

  useEffect(() => {
    // If user already subscribed, redirect to their account
    if (status === 'authenticated') {
      // TODO: perhaps add UI here explaining the redirection or showing a link to redirect to account or home
      router.push('/')
    }
  }, [status, router])

  const onSubmit = async e => {
    try {
      setLoaderMessage('Preparing sign-in magic link.')
      if (!ref.current) {
        setLoaderMessage('')
        throw new Error('ref not found')
      }
      const data = new URLSearchParams()
      for (const pair of new FormData(ref.current)) {
        if (pair[0] === 'email') {
          setEmail(pair[1] as string)
        }
        data.append(pair[0], pair[1] as string)
      }
      setSignInData(data)
      e.preventDefault()
      const res = await fetch('/api/auth/sign-in/email', {
        method: 'post',
        body: data,
      })
      setMagicLinkState(res.status === 200 ? 'sent' : 'failed')
    } finally {
      setLoaderMessage('')
    }
  }

  const onReSubmitSignin = async () => {
    setLoaderMessage('Preparing sign-in magic link.')
    try {
      const res = await fetch('/api/auth/sign-in/email', {
        method: 'post',
        body: signinData,
      })
      setMagicLinkState(res.status === 200 ? 'sent' : 'failed')
    } finally {
      setLoaderMessage('')
    }
  }

  return (
    <>
      <SemissourianLoader message={loaderMessage} isActive={!!loaderMessage} />
      <div className="single-layout">
        <div className="single-layout-row w-row">
          {!!articlesToDisplay?.length && (
            <div className="single-layout-col left ali-background-brand overflow-hidden w-col w-col-4">
              <div className="collection-list-wrapper-2 w-dyn-list">
                <div role="list" className="collection-list-2 w-dyn-items">
                  {articlesToDisplay.map(el => (
                    <div role="listitem" className="collection-item-5 w-dyn-item" key={el.src}>
                      <Link href={el.href} passHref>
                        <a className="link-block-4 w-inline-block">
                          <Box
                            css={{
                              width: '100%',
                              '& > div': {
                                paddingBottom: '60%',
                                width: '100%',
                                height: '100%',
                              },
                            }}>
                            <Image
                              className="fullscreen-image"
                              alt={el.title}
                              layout="fill"
                              objectFit="cover"
                              asset={{
                                public: true,
                                key: el.src,
                              }}
                            />
                          </Box>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className={`single-layout-col right w-col w-col-${articlesToDisplay?.length ? 8 : 12}`}>
            <div className="single-layout-right">
              <div className="single-layout-right-content" style={{ textAlign: 'center' }}>
                <h2 className="center-align">Welcome back.</h2>
                <p className="body1-brand">Enter email to create account or sign in.</p>
                {status === 'authenticated' ? (
                  <div style={{ textAlign: 'center' }}>
                    <p className="subtitle1-brand nan-brand center-align">You are already signed in!</p>
                    <Link href="/" passHref>
                      <button
                        className="button-primary-brand center-align full-width center-align w-button"
                        style={{
                          margin: '0 auto',
                        }}>
                        View Articles
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="w-form">
                    {magicLinkState !== 'sent' && (
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        ref={ref}
                        onSubmit={onSubmit}
                        method="post"
                        action="/api/auth/sign-in/email">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                        {/* <a href="logged-in.html" className="button-secondary-brand sue-brand wide-btn full-width w-button">
                        Login with Facebook
                      </a>
                      <p className="text-center caption-brand qui-brand">or continue with email:</p> */}
                        <input
                          type="email"
                          className="input w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder="Enter your email"
                          id="email"
                          required={true}
                        />
                        <button
                          style={{
                            margin: '0 auto',
                          }}
                          type="submit"
                          className="button-primary-brand full-width center-align w-button">
                          Login
                        </button>
                      </form>
                    )}
                    {magicLinkState === 'sent' && (
                      <div className="success-message w-form-done" style={{ display: 'block' }}>
                        <div>
                          <h3>Verify your email</h3>
                          <p className="body1-brand">We just sent an email to "{email}".</p>
                          <p className="body2-brand">
                            If you don't see a message in your inbox, make sure the email addres listed above is correct
                            and check your spam or junk mail folder. This email is sent from "donotreply@domain.com."
                            <br />
                            If you want us to resent the email,{' '}
                            <a onClick={onReSubmitSignin} style={{ cursor: 'pointer' }}>
                              click here
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    )}
                    {magicLinkState === 'failed' && (
                      <div className="error-message w-form-fail" style={{ display: 'block' }}>
                        <div>Oops! Something went wrong while submitting the form. Please try again later.</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockPubSignin

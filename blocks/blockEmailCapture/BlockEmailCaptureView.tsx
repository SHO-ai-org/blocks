import { getCsrfToken, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'

const defaultNewsletterId = 'mainNewsletter'

const BlockEmailCaptureView: FC<BlockViewProps> = () => {
  const { status, data: session } = useSession()
  const subscriber = session?.user
  const ref = useRef<HTMLFormElement>(null)
  const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined)
  const [magicLinkState, setMagicLinkState] = useState<'sent' | 'initial' | 'failed'>('initial')
  const router = useRouter()

  useEffect(() => {
    const myFunction = async () => {
      const token = await getCsrfToken()
      setCsrfToken(token)
    }
    myFunction()
  }, [])

  const onSubmit = (api: string) => async e => {
    if (!ref.current) {
      throw new Error('ref not found')
    }
    const data = new URLSearchParams()
    for (const pair of new FormData(ref.current)) {
      data.append(pair[0], pair[1] as string)
    }
    e.preventDefault()
    setMagicLinkState('sent')
    const res = await fetch(api, {
      method: 'post',
      body: data,
    })
    setMagicLinkState(res.status === 200 ? 'sent' : 'failed')
  }

  if (subscriber?.newsletterSubscriptions?.length) return null

  return (
    <div className="section ben-background-brand wf-section">
      <div className="main-container">
        <div className="subscribe-container justify-content-center">
          <div className="section-title sue-brand">
            <h2 className="large-heading h4-brand">Don&#x27;t miss the news!</h2>
            <div className="body1-brand">Get a weekly digest of our most important stories direct to your inbox.</div>
          </div>

          <div className="form-block w-form">
            {magicLinkState !== 'sent' && status === 'unauthenticated' && (
              <form
                className="outline-form"
                ref={ref}
                onSubmit={onSubmit('/api/auth/sign-in/email')}
                method="post"
                action="/api/auth/sign-in/email">
                <input
                  name="callbackPath"
                  type="hidden"
                  defaultValue={`${router.asPath}?newsletter-subscription=success`}
                />
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <input name="newsletterIds" type="hidden" defaultValue={defaultNewsletterId} />

                <input
                  type="email"
                  className="outline-form-input w-input"
                  maxLength={256}
                  data-name="Email"
                  name="email"
                  placeholder="Email Address"
                  required={true}
                />
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="button button-primary-brand button-brand w-button"
                />
              </form>
            )}
            {magicLinkState !== 'sent' && status === 'authenticated' && (
              <form
                style={{ justifyContent: 'center' }}
                className="outline-form"
                ref={ref}
                onSubmit={onSubmit('/api/newsletter/subscribe')}
                method="post"
                action="/api/newsletter/subscribe">
                <input name="newsletterIds" type="hidden" defaultValue={defaultNewsletterId} />
                <input
                  type="submit"
                  value="Subscribe to Newsletter"
                  data-wait="Please wait..."
                  className="button button-primary-brand button-brand w-button"
                />
              </form>
            )}

            {magicLinkState === 'sent' && (
              <div className="form-success w-form-done" style={{ display: 'block' }}>
                {status === 'authenticated' ? (
                  <div>Thank you! Subscription to newsletter successfull.</div>
                ) : (
                  <div>Thank you! An email has been sent to confirm your subscription to the newsletter.</div>
                )}
              </div>
            )}
            {magicLinkState === 'failed' && (
              <div className="form-error w-form-fail" style={{ display: 'block' }}>
                <div>Oops! Something went wrong. Please try again later</div>
              </div>
            )}
          </div>
          <div className="space"></div>
          <div className="caption-brand sue-brand">
            Place some disclaimer text here about how you intend <br />
            to use the subscriber’s email, Privacy Policy and all that.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockEmailCaptureView

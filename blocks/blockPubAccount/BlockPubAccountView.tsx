import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Stripe from 'stripe'

import { stripePlans } from '../../../../../utils/publication-utils'
import { postData } from '../../../../../utils/rest-utils'
import { formatToPrice } from '../../../../../utils/string-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import SemissourianLoader from '../../../SemissourianLoader'

const BlockPubAccountView: FC<BlockViewProps> = () => {
  const router = useRouter()
  const { status, data: session } = useSession()
  const subscriber = session?.user
  const [loaderMessage, setLoaderMessage] = useState('')
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false)
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false)

  console.log('session is', session)

  if (status === 'unauthenticated') {
    router.push('/sign-in/')
    return null
  }

  const redirectToStripeForPayments = async () => {
    setLoaderMessage('Redirecting to secure payment portal.')
    // TODO: add spinner or some sort of UI indicating load
    if (status === 'loading') {
      setLoaderMessage('')
      return
    }

    // User does not already have a subscription
    if (!subscriber?.stripeSubscriptions?.length) {
      return router.push('/subscribe')
    }

    // Go to portal
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-session',
        data: undefined,
      })
      if (error) return alert(error.message)
      window.location.assign(url)
    } catch (error) {
      return alert(error)
    } finally {
      setLoaderMessage('')
    }
  }

  const onSignout = async () => {
    setLoaderMessage('Preparing sign-out.')
    try {
      // TODO: might be a better way to sign out. Tried but didn't yet manage on dev
      // https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
      await signOut({ redirect: false, callbackUrl: `${window?.location?.hostname}/sign-in` })
      router.push(`/sign-in`)
    } finally {
      setLoaderMessage('')
    }
  }

  const onDeleteAccount = async () => {
    setLoaderMessage('Preparing account deletion.')
    try {
      const { error } = await postData({
        url: '/api/auth/delete-account',
        data: undefined,
      })
      if (error) return alert(error.message)
      console.log('deleted account')
      onSignout()
    } catch (error) {
      console.error(error)
      return alert(
        'Sorry, an error occured while trying to delete your account. Please try again later or contact customer service.',
      )
    } finally {
      setLoaderMessage('')
    }
  }

  const userIsLegacySubscriber = subscriber?.legacySubscription
  const userIsSubscribed = !!subscriber?.stripeSubscriptions?.length
  const userHasFreeSubscription = subscriber?.stripeSubscriptions?.[0]?.id === 'freeSubscriptionId' // TODO: change freeSubscriptionId
  const stripeSubscription = session?.user.stripeSubscriptions?.[0] as Stripe.Subscription
  const priceInCents = stripeSubscription?.items.data[0].price.unit_amount
  const interval = stripeSubscription?.items.data[0].plan.interval
  return (
    <>
      <SemissourianLoader message={loaderMessage} isActive={!!loaderMessage} />
      <div className="section padding-bottom" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="account-header">
            <h2 className="h2-brand no-margin">Account</h2>
            <div className="horizonta-row">
              <div className="_20px"></div>
              {/* <Link href="/payments" passHref> */}
              {userIsSubscribed && (
                <a
                  className="div-block-24 ben-brand w-inline-block"
                  onClick={redirectToStripeForPayments}
                  style={{ cursor: 'pointer' }}>
                  <div data-w-id="54bbd209-da76-b145-1cd4-02ae54b1eb4b" className="icon ben-brand w-embed">
                    <span className="material-icons-outlined">credit_card</span>
                  </div>
                  <div className="_5px"></div>
                  <div>Payments</div>
                </a>
              )}
              {/* </Link> */}
              <div className="_20px"></div>
              <div className="div-block-24 ben-brand w-inline-block" onClick={onSignout} style={{ cursor: 'pointer' }}>
                <div data-w-id="58ec2b1b-21c3-c908-7180-403003866f18" className="icon ben-brand w-embed">
                  <span className="material-icons-outlined">logout</span>
                </div>
                <div className="_5px"></div>
                <div>Log Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section roy-background-brand">
        <div className="container">
          <div className="grid-2col">
            {userIsSubscribed ? (
              <>
                <div className="card">
                  <div className="card-heading-small">
                    <h4>Subscription</h4>
                  </div>
                  <div className="input-group roy-border-brand">
                    <div className="input-group-item-left">
                      <div>
                        {formatToPrice((priceInCents || 0) * 100)} per {interval}
                      </div>
                    </div>
                    <a
                      onClick={() => {
                        if (userHasFreeSubscription) {
                          setIsSubscriptionOpen(true)
                        } else {
                          redirectToStripeForPayments()
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                      data-w-id="4b2c9275-f0e7-1888-cebd-0aa659098eee"
                      className="button-tertiary-brand button-brand sm-btn w-button">
                      Change
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-heading-small">
                    <h4>Delete account</h4>
                    <p className="qui-brand">Before deleting you account, you must cancel your subscription.</p>
                  </div>
                  <a
                    style={{ cursor: 'pointer' }}
                    data-w-id="4b2c9275-f0e7-1888-cebd-0aa659098efd"
                    onClick={redirectToStripeForPayments}
                    className="button-tertiary-brand button-brand sm-btn w-button">
                    Cancel Subscription
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="card">
                  <div className="card-heading-small">
                    <h4>Delete account</h4>
                  </div>
                  <a
                    style={{ cursor: 'pointer' }}
                    data-w-id="4b2c9275-f0e7-1888-cebd-0aa659098efd"
                    onClick={() => {
                      setIsDeleteAccountOpen(true)
                    }}
                    className="button-tertiary-brand button-brand sm-btn w-button">
                    Delete Account
                  </a>
                </div>

                {userIsLegacySubscriber && (
                  <div className="card">
                    <div className="card-heading-small">
                      <h4>Legacy subscriber</h4>
                    </div>
                    <p className="body1-brand _50ch">
                      Your subscription has been created before Dec 1st 2021, and is using our legacy payment center.
                      Please write customer support to <a>change</a> or <a>delete</a> your subscription or call us:
                      <a target="_blank" rel="noreferrer" href="tel:5733347115">
                        573-334-7115
                      </a>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div
        data-w-id="5c4389c1-19a1-6969-b851-5695a78bb337"
        className="popup-container"
        style={{ display: isSubscriptionOpen || isDeleteAccountOpen ? 'flex' : 'none' }}>
        <OutsideClickHandler
          onOutsideClick={e => {
            setIsSubscriptionOpen(false)
            setIsDeleteAccountOpen(false)
          }}>
          <div className="popup sue-background-brand center-align">
            <div className="popup-topbar right-align">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsSubscriptionOpen(false)
                  setIsDeleteAccountOpen(false)
                }}
                data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33a"
                className="popup-close-btn w-inline-block">
                <div className="icon w-embed">
                  <span className="material-icons-outlined">close</span>
                </div>
              </a>
            </div>
            <div className="popup-content roy-background-brand">
              {isSubscriptionOpen && (
                <div data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33d" className="center-align">
                  <h3>Choose a new plan</h3>

                  <p>Accounts created prior Nov 26 2021 must be changed by the Semissourian.</p>
                  <p>Please choose a plan and send an email:</p>
                  <ul>
                    {/* TODO: add mailto with subject and body  */}
                    <li>
                      <a style={{ cursor: 'pointer' }}>
                        {stripePlans.digital.name} — {formatToPrice(stripePlans.digital.price)} /{' '}
                        {stripePlans.digital.occurence}
                      </a>
                    </li>
                    <li>
                      <a style={{ cursor: 'pointer' }}>
                        {stripePlans.digitalPlus.name} — {formatToPrice(stripePlans.digitalPlus.price)} /{' '}
                        {stripePlans.digitalPlus.occurence}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {isDeleteAccountOpen && (
                <div data-w-id="315634f4-8a00-c92e-f3f8-e943078ffac4" className="center-align">
                  <h3>Delete Account?</h3>
                  <p className="body1-brand _50ch">
                    To access SEMissourian in the future you will need to create a new account from scratch.{' '}
                  </p>
                  <div className="_20px"></div>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={onDeleteAccount}
                    className="button-primary-brand button-brand wide-btn ivy-background-brand w-button">
                    Permanently Delete Account
                  </a>
                  <div className="_40px"></div>
                </div>
              )}
            </div>
          </div>
        </OutsideClickHandler>
        <div className="bg ali-background-brand opacity-80"></div>
      </div>
    </>
  )
}

export default BlockPubAccountView

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { stripePlans } from '../../../../../utils/publication-utils'
import { postData } from '../../../../../utils/rest-utils'
import { getStripe } from '../../../../../utils/stripe-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { BlockPaywallArticleCustomPageData } from './blockPaywallArticle'

const BlockPaywallArticle: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockPaywallArticleCustomPageData
  }>
> = props => {
  const { status, data: session } = useSession()
  const subscriber = session?.user
  const router = useRouter()
  const { articleAccess } = props.blockCustomData

  const handleCheckout = async (priceId: string) => {
    // TODO: there should be better UI for this case
    if (status === 'loading') {
      return
    }

    // User already has a subscription
    if (subscriber?.stripeSubscriptions?.length) {
      return router.push('/account')
    }

    // Subcribe the user
    try {
      const { sessionId, accountId } = await postData({
        url: '/api/create-checkout-session',
        data: { price: priceId },
      })
      const stripe = await getStripe(accountId)
      stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      return alert(error)
    }
  }

  const showPaywall =
    // Article requires to be signed in to view
    (status === 'unauthenticated' && articleAccess === 'signedIn') ||
    // Article requires subcription to view
    (status !== 'loading' && articleAccess === 'subscribed' && !subscriber?.stripeSubscriptions?.length)

  return showPaywall ? (
    <div data-w-id="8f1508eb-ea28-64b0-e291-f375ac043e0e" className="paywall-overlay" style={{ display: 'flex' }}>
      <div className="div-block-26 sue-background-brand center-align">
        <div className="popup-topbar">
          <p className="center-align no-margin qui-brand">Subscribe to continue reading, Already a subscriber?</p>
          <div className="_10px"></div>
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </div>
        <div className="popup-content roy-background-brand">
          <h1 className="h1-brand responsive">
            Get unlimited access to <br />
            The SEMissourian
          </h1>
          <p>
            You can <strong>cancel anytime.</strong>
          </p>
          <div className="button-tertiary-brand sue-border-brand">
            <div className="product-callout ali-background-brand sue-brand">
              <h2 className="no-margin h6-brand">
                Reader&#x27;s Choice
                <br />
              </h2>
            </div>
            <div className="price-selector ben-background-brand center-align sue-brand">
              <h2 className="h2-brand responsive">{stripePlans.digital.name}</h2>
              <p className="subtitle1-brand">
                ${stripePlans.digital.price} / {stripePlans.digital.occurence}
              </p>
              <a
                className="button-primary-brand button-brand large w-button"
                onClick={() => {
                  handleCheckout(stripePlans.digital.stripeId)
                }}>
                Subscribe Now
              </a>
              <p className="caption-brand padding-top _90-opacity">Charged monthly / Cancel anytime</p>
            </div>
            <div className="price-selector sue-background-brand">
              <p>
                Unlimited access to all the journalism, photos and archives of{' '}
                <Link href="/">
                  <a target="_blank" rel="noreferrer">
                    semissourian.com
                  </a>
                </Link>{' '}
                on any device
                <br />
              </p>
              <div className="hr-line cal-background-brand"></div>
              <div className="space"></div>
              <p className="body2-brand">
                Fewer ads and faster site
                <br />
              </p>
              <p className="body2-brand">
                E-edition
                <br />
              </p>
              <p className="body2-brand">
                Optional delivery of Weekend Print Edition (if in market) - Free
                <br />
              </p>
              <p className="body2-brand">
                Invitations to special events
                <br />
              </p>
            </div>
          </div>
          <div className="_20px"></div>
          <Link href="/subscribe/">
            <a>View all options</a>
          </Link>
        </div>
      </div>
      <div className="bg ali-background-brand opacity-80"></div>
    </div>
  ) : null
}

export default BlockPaywallArticle

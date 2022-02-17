import { Box } from '@sho-ai-org/pattern-library'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { stripePlans } from '../../../../../utils/publication-utils'
import { postData } from '../../../../../utils/rest-utils'
import { formatToPrice } from '../../../../../utils/string-utils'
import { getStripe } from '../../../../../utils/stripe-utils'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { BlockPubSubscribeProps } from './blockPubSubscribe'

const BlockSubscribeView: FC<BlockViewProps<{ ShapeOfBlockDataInDB: BlockPubSubscribeProps }>> = () => {
  const { status, data: session } = useSession()
  const subscriber = session?.user
  const router = useRouter()

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

  const hasSubscriptions = !!subscriber?.stripeSubscriptions?.length
  const userIsLegacySubscriber = subscriber?.legacySubscription

  useEffect(() => {
    // If user already subscribed, redirect to their account
    if (
      !!(
        (status !== 'loading' && router.isReady && hasSubscriptions) ||
        (status !== 'loading' && userIsLegacySubscriber)
      )
    ) {
      // TODO: perhaps add UI here explaining the redirection or showing a link to redirect to account or home
      router.push('/account')
    }
  }, [status, router, hasSubscriptions, userIsLegacySubscriber])

  return (
    <div className="subscribe-options section roy-background-brand wf-section">
      <div className="main-container">
        <div className="align-center">
          <p className="no-margin h6-brand">since 1904</p>
          <h1>
            Live well. Connect locally.
            <br />
          </h1>
          <p className="body1-brand qui-brand max-70">
            Never see a paywall again
            <br />
          </p>
          <p className="body1-brand qui-brand body2-brand ch-70">
            The Southeast Missourian serves the region though investigative reporting and unparalleled local news
            coverage; by providing a public forum on issues of importance; and by celebrating the people and
            accomplishments of our local communities. <br />
          </p>
          <div className="space"></div>
          <div className="space"></div>
        </div>

        <Box
          css={{
            '& > div': {
              marginBottom: '30px',
            },
            '@bp2': {
              marginBottom: '0px',
              display: 'flex',
              flexFlow: 'row nowrap',
              columnGap: '20px',
              '& > div': {
                flex: '0 1 33.33%',
              },
              '& > div:first-child': {
                order: 2,
              },
              '& > div:last-child': {
                order: 3,
              },
              '& > div:nth-child(2)': {
                order: 1,
              },
              '& > div:nth-child(n+2)': {
                paddingTop: '70px',
              },
            },
          }}>
          <div>
            <div>
              <div className="product-callout ali-background-brand sue-brand">
                <p className="no-margin h6-brand">
                  Reader&#x27;s Choice
                  <br />
                </p>
              </div>
              <div
                data-w-id="54e35276-2727-5cee-be3a-d591939b49ee"
                className="price-selector ben-background-brand center-align sue-brand">
                <h3>{stripePlans.digital.name}</h3>
                <p className="subtitle1-brand">
                  ${stripePlans.digital.price} / {stripePlans.digital.occurence}
                </p>
                <a
                  onClick={() => {
                    handleCheckout(stripePlans.digital.stripeId)
                  }}
                  className="button button-primary-brand button-brand w-button"
                  style={{ display: 'inline-block' }}>
                  <strong>Subscribe Now</strong>
                </a>
                <p className="caption-brand padding-top _90-opacity">Charged monthly / Cancel anytime</p>
              </div>
              <div className="price-selector sue-background-brand">
                <p>
                  Unlimited access to all the journalism, photos and archives of{' '}
                  <Link href="/">
                    <a target="_blank" style={{ cursor: 'pointer' }}>
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
          </div>
          <div>
            <div className="div-block-4 corners">
              <div className="price-selector sue-brand align-center cal-background-brand">
                <h3>
                  {stripePlans.printAndDigital.name}
                  <br />
                </h3>
                <p className="subtitle1-brand">
                  {formatToPrice(stripePlans.printAndDigital.price)} / {stripePlans.printAndDigital.occurence}
                </p>
                <a
                  onClick={() => {
                    handleCheckout(stripePlans.printAndDigital.stripeId)
                  }}
                  className="button button-secondary-brand button-brand sue-brand w-button"
                  style={{ display: 'inline-block' }}>
                  <strong>Subscribe Now</strong>
                </a>
                <p className="caption-brand padding-top _90-opacity">Charged monthly / Cancel anytime</p>
              </div>
              <div className="price-selector sue-background-brand">
                <p>All benefits of Digital plus:</p>
                <div className="hr-line cal-background-brand"></div>
                <div className="space"></div>
                <p className="body2-brand">
                  Additional logins for immediate family.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="div-block-4">
              <div className="price-selector sue-brand align-center cal-background-brand">
                <h3>
                  {stripePlans.digitalPlus.name}
                  <br />
                </h3>
                <p className="subtitle1-brand">
                  {formatToPrice(stripePlans.digitalPlus.price)} / {stripePlans.digitalPlus.occurence}
                </p>
                <a
                  className="button button-secondary-brand button-brand sue-brand w-button"
                  onClick={() => {
                    handleCheckout(stripePlans.digitalPlus.stripeId)
                  }}>
                  Subscribe now
                </a>
                <p className="caption-brand padding-top _90-opacity">Charged monthly / Cancel anytime</p>
              </div>
              <div className="price-selector sue-background-brand">
                <p>All benefits of Print and Digital:</p>
                <div className="hr-line cal-background-brand"></div>
                <div className="space"></div>
                <p className="body2-brand">
                  Delivery of all print editions
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default BlockSubscribeView

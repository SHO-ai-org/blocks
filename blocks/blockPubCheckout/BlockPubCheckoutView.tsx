// import { getCsrfToken, useSession } from 'next-auth/react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { FC, useCallback, useEffect, useRef, useState } from 'react'

// import { stripePlans } from '../../../../../utils/publication-utils'
// import { postData } from '../../../../../utils/rest-utils'
// import { formatToPrice } from '../../../../../utils/string-utils'
// import { getStripe } from '../../../../../utils/stripe-utils'
// import { BlockViewProps } from '../../../../../utils/typescript-utils'
// import SemissourianLoader from '../../../SemissourianLoader'
// import { BlockPubCheckoutProps } from './blockPubCheckout'

const BlockPubCheckoutView = () => null

// const BlockPubCheckoutView: FC<BlockViewProps<BlockPubCheckoutProps>> = () => {
//   const router = useRouter()
//   const { status, data: session } = useSession()
//   const subscriber = session?.user
//   const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined)
//   const [magicLinkState, setMagicLinkState] = useState<'sent' | 'initial' | 'failed'>('initial')
//   const ref = useRef<HTMLFormElement>(null)
//   const [loaderMessage, setLoaderMessage] = useState('')

//   const onSubmit = async e => {
//     try {
//       setLoaderMessage('Preparing account creation.')
//       if (!ref.current) {
//         throw new Error('ref not found')
//       }
//       const data = new URLSearchParams()
//       for (const pair of new FormData(ref.current)) {
//         data.append(pair[0], pair[1] as string)
//       }
//       e.preventDefault()
//       const res = await fetch('/api/auth/sign-in/email', {
//         method: 'post',
//         body: data,
//       })
//       setMagicLinkState(res.status === 200 ? 'sent' : 'failed')
//     } finally {
//       setLoaderMessage('')
//     }
//   }

//   const handleCheckout = useCallback(
//     async priceId => {
//       setLoaderMessage('Preparing subscription cart.')
//       // TODO: there should be better UI for this case
//       if (status === 'loading') {
//         setLoaderMessage('')
//         return
//       }

//       // User is not authenticated
//       if (status !== 'authenticated') {
//         setLoaderMessage('')
//         return router.push({
//           pathname: '/checkout',
//           query: { priceId },
//         })
//       }

//       // User already has a subscription
//       if (subscriber?.stripeSubscriptions?.length) {
//         return router.push('/account')
//       }

//       // Subcribe the user
//       try {
//         const { sessionId, accountId } = await postData({
//           url: '/api/create-checkout-session',
//           data: { price: priceId },
//         })
//         const stripe = await getStripe(accountId)
//         stripe.redirectToCheckout({ sessionId })
//       } catch (error) {
//         return alert(error)
//       } finally {
//         setLoaderMessage('')
//       }
//     },
//     [router, status, subscriber?.stripeSubscriptions?.length],
//   )

//   useEffect(() => {
//     const myFunction = async () => {
//       const token = await getCsrfToken()
//       setCsrfToken(token)
//     }
//     myFunction()
//   }, [])

//   const priceId = router?.query?.priceId as string
//   const userIsLegacySubscriber = subscriber?.legacySubscription

//   useEffect(() => {
//     if (!priceId && router.isReady) {
//       router.push('/subscribe')
//     }
//     if (status !== 'loading' && userIsLegacySubscriber) {
//       router.push('/account')
//     }
//     if (status === 'authenticated' && priceId) {
//       handleCheckout(priceId)
//     }
//   }, [priceId, router, handleCheckout, status, userIsLegacySubscriber])

//   // User has not chosen a subscription
//   if (!priceId) {
//     return null
//   }

//   const subscriptionId = Object.keys(stripePlans).find(key => stripePlans[key].stripeId === priceId)

//   return (
//     <>
//       <SemissourianLoader message={loaderMessage} isActive={!!loaderMessage} />
//       <div className="checkout section roy-background-brand wf-section">
//         <div className="main-container">
//           <div className="div-block-5">
//             {/* SUBSCRIPTION REFERENCE  */}
//             <div id="w-node-d2c3a9fb-9858-6a07-2f74-91ed1d204e90-de349710" className="div-block-8">
//               <div className="div-block-9">
//                 <div className="product-callout ali-background-brand sue-brand">
//                   <h6 className="no-margin">
//                     You have chosen
//                     <br />
//                   </h6>
//                 </div>
//                 <div className="price-selector ben-background-brand sue-brand center-align">
//                   <div className="div-block-13">
//                     {subscriptionId && <h4 className="no-margin">{stripePlans[subscriptionId].name}</h4>}
//                     <span className="link-block w-inline-block">
//                       <img
//                         src="/semissourian/images/change_circle_white_24dp.svg"
//                         loading="lazy"
//                         width="24"
//                         alt=""
//                         className="image-3"
//                       />
//                     </span>
//                   </div>
//                   <div className="space"></div>
//                   {subscriptionId && (
//                     <p className="subtitle1-brand no-margin">
//                       {formatToPrice(stripePlans[subscriptionId].price)} / week
//                     </p>
//                   )}
//                   <p className="caption-brand padding-top _50-opacity">Charged monthly / Cancel anytime</p>
//                 </div>
//                 {subscriptionId && (
//                   <div className="price-selector sue-background-brand">
//                     <div dangerouslySetInnerHTML={{ __html: stripePlans[subscriptionId].description }} />
//                     <p className="body2-brand qui-brand">
//                       Your payment method will be automatically charged ${stripePlans[subscriptionId].price * 4} every
//                       month and continue until you cancel. You can cancel anytime. First month is billed in full. <br />
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div id="w-node-_0bd9782e-b28f-5b2b-bada-d5e8333526fe-de349710" className="div-block-7">
//               {status === 'loading' && (
//                 <div className="div-block-10">
//                   <p>Loading account information...</p>
//                 </div>
//               )}
//               {status === 'unauthenticated' && (
//                 <div className="price-section sue-background-brand">
//                   <div className="div-block-10">
//                     <h3>Create Account or Log In</h3>
//                   </div>
//                   <div className="w-form">
//                     {magicLinkState !== 'sent' && (
//                       <form
//                         id="email-form"
//                         ref={ref}
//                         onSubmit={onSubmit}
//                         method="post"
//                         action="/api/auth/sign-in/email">
//                         <div className="div-block-14">
//                           <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//                           <input name="callbackPath" type="hidden" defaultValue={router.asPath} />
//                           <input
//                             type="email"
//                             className="input button-tertiary-brand large button-brand w-input"
//                             maxLength={256}
//                             name="email"
//                             data-name="Email"
//                             placeholder="Enter your email"
//                             id="email"
//                             required={true}
//                             style={{ textTransform: 'lowercase' }}
//                           />
//                           <div className="space"></div>
//                           <button className="button-primary-brand button-brand sue-brand large-btn w-button">
//                             Continue
//                           </button>
//                         </div>
//                         <div className="space"></div>
//                         <p className="body2-brand qui-brand">
//                           By creating an account, you agree to our <br />
//                           <Link href="/terms">Terms and Conditions</Link> and our{' '}
//                           <Link href="/privacy-policy">Privacy Policy</Link>.
//                         </p>
//                       </form>
//                     )}
//                     {magicLinkState === 'sent' && (
//                       <div className="w-form-done" style={{ display: 'block' }}>
//                         <div>
//                           Thank you, your account has been created! <br /> Please check your inbox to confirm email.
//                         </div>
//                       </div>
//                     )}
//                     {magicLinkState === 'failed' && (
//                       <div className="w-form-fail" style={{ display: 'block' }}>
//                         <div>Oops! Something went wrong while submitting the form.</div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//               {status === 'authenticated' && (
//                 <div className="price-section sue-background-brand">
//                   <div id="payment-method" className="anchor-block"></div>
//                   <button
//                     onClick={() => {
//                       handleCheckout(priceId)
//                     }}
//                     className="button-primary-brand button-brand sue-brand large-btn w-button">
//                     Subscribe
//                   </button>
//                   <div className="space"></div>
//                   <p className="body2-brand qui-brand">
//                     By subscribing, you agree to the Digital Terms of Service (link) and Privacy Policy (link). Your
//                     subscription will automatically renew until you cancel. You can cancel anytime by selecting “Cancel
//                     Subscription” in your account settings. The first month of subscription is charged in full. All
//                     subsequent charges are rebated when cancelled.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default BlockPubCheckoutView

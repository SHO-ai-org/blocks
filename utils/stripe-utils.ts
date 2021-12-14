import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise

export const getStripe = (accountId: string): Promise<Stripe> => {
  // console.log('GET STRIPE')
  if (!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    // console.log('PK KEY', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
      stripeAccount: accountId,
    })
  }
  return stripePromise
}

import React from 'react'
import Analytics from 'analytics'
import { Router } from 'next/router'
import googleAnalyticsPlugin from '@analytics/google-analytics'
import segmentAnalyticsPLugin from '@analytics/segment'
// import hotjarPlugin from './analytics-plugin-hotjar'
import fullStoryPlugin from '@analytics/fullstory'
import intercomPlugin from '@analytics/intercom'

const getPlugins = () => {
  const pluginList: Record<string, unknown>[] = []
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID) {
    pluginList.push(
      googleAnalyticsPlugin({
        trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID,
      }),
    )
  }
  if (process.env.NEXT_PUBLIC_SEGMENT_TRACKING_ID) {
    pluginList.push(segmentAnalyticsPLugin({ writeKey: process.env.NEXT_PUBLIC_SEGMENT_TRACKING_ID }))
  }
  if (process.env.NEXT_PUBLIC_FULLSTORY_ORG) {
    pluginList.push(fullStoryPlugin({ org: process.env.NEXT_PUBLIC_FULLSTORY_ORG }))
  }
  if (process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
    pluginList.push(intercomPlugin({ appId: process.env.NEXT_PUBLIC_INTERCOM_APP_ID }))
  }
  return pluginList
}

const analytics = Analytics({
  app: 'sho-app',
  plugins: getPlugins(),
})

export { analytics }

export const useAnalytics = () => {
  React.useEffect(() => {
    // Fire initial page view
    analytics.page()
    // Fire page views on routing
    const handleRouteChange = url => {
      // We need to wrap it in a rAF to ensure the correct data is sent to Segment
      // https://github.com/zeit/next.js/issues/6025
      requestAnimationFrame(() => {
        analytics.page()
      })
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => Router.events.off('routeChangeComplete', handleRouteChange)
  }, [])

  return analytics
}

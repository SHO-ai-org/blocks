import { Box, ShoImage } from '@sho-ai-org/pattern-library'
import React, { FC, useEffect } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockGoogleAdView: FC<BlockViewProps> = () => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="sunshine-section roy-background-brand wf-section">
      <div className="main-container sunshine-container" style={{ justifyContent: 'center' }}>
        {typeof window !== 'undefined' &&
        (window?.location.host.includes('localhost') ||
          window?.location.host.includes('sho-demo') ||
          window?.location.host.includes('sho-site-dev.com') ||
          window?.location.host.includes('sho-site.com')) ? (
          <Box
            css={{
              div: {
                textAlign: 'center',
              },
            }}>
            <ShoImage
              src="https://public-assets-prod.sho-app.co.uk/brand_0872ee40-e15a-4a2f-bf59-900ff5396792/asset_siteade6-0000-0000-000googleads.webp"
              height="70"
              width="540"
              alt="google ad"
              layout="responsive"
            />
          </Box>
        ) : (
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
            }}
            data-ad-client="ca-pub-5826862484148534"
            data-ad-slot="9495117658"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </div>
    </div>
  )
}

export default BlockGoogleAdView

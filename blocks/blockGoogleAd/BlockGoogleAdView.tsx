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
          <img src="https://via.placeholder.com/1080x139.png?text=Google+Ad+Placeholder" alt="google ad" />
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

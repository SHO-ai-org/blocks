import React, { FC } from 'react'
import Link from 'next/link'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { useSession } from 'next-auth/react'

const BlockSqueezeView: FC<BlockViewProps> = () => {
  const { status, data: session } = useSession()
  const subscriber = session?.user

  return (
    <>
      <div className="master-header roy-background-brand">
        <div className="sue-background-brand wf-section" style={{ width: '100%' }}>
          <div className="main-container mobile">
            <div className="logo-bar" style={{ padding: 0 }}>
              <Link href="/" passHref>
                <a className="logo-link w-inline-block" style={{ cursor: 'pointer', marginLeft: 0 }}>
                  <div>
                    <div className="_20-padding top-nav">
                      <div className="div-block-17">
                        <div className="horizontal">
                          <div className="logo-dark-horizontallockup-background-image-url-brand hide-below-tablet"></div>
                        </div>
                        <div className="vertical">
                          <div className="logo-dark-verticallockup-background-image-url-brand"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="social-links margin-right nav-squeeze-social-links" style={{ display: 'flex' }}>
                {!!(
                  status !== 'loading' &&
                  !subscriber?.stripeSubscriptions?.length &&
                  !subscriber?.legacySubscription
                ) && (
                  <p className="no-margin body2-brand" style={{ marginBottom: 0 }}>
                    <span className="_50-opacity hide-below-tablet">Don&#x27;t have a subscription? </span>
                    <Link href="/subscribe">Subscribe</Link>
                  </p>
                )}
                <div className="space hide-below-tablet"></div>
                <p className="no-margin sue-brand body2-brand" style={{ marginBottom: 0 }}>
                  <span className="_50-opacity ota-brand hide-below-tablet">Need help?&nbsp;</span>
                  <a target="_blank" rel="noreferrer" href="tel:5733347115">
                    573-334-7115
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 wf-section">
          <div className="main-container"></div>
        </div>
      </div>
    </>
  )
}

export default BlockSqueezeView

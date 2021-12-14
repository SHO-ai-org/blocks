import React, { FC, useEffect } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const DividerView: FC<BlockViewProps> = () => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="sunshine-section roy-background-brand wf-section">
      <div className="main-container sunshine-container">
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
      </div>
    </div>
  )
}

export default DividerView

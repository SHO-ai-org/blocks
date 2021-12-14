import { FC } from 'react'
import Link from 'next/link'

import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockPage404View: FC<BlockViewProps> = () => (
  <div className="utility-page-wrap ali-background-brand sue-brand">
    <div className="utility-page-content center-align w-form">
      <h1>Page Not Found</h1>
      <p className="body1-brand">
        The page you were looking for doesn&#x27;t exist. <a href="index.html" className="sue-brand"></a>
      </p>
      <div className="_20px"></div>
      <Link href="/">
        <a className="button-primary-brand wide-btn button-brand w-button" style={{ cursor: 'pointer' }}>
          Home
        </a>
      </Link>
    </div>
  </div>
)

export default BlockPage404View

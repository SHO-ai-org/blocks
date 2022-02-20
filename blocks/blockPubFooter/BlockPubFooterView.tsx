import { ShoImage } from '@sho-ai-org/pattern-library'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import { BlockTemplateCustomPageData } from './blockPubFooter'

const BlockPubFooterView: FC<
  BlockViewProps<{
    ShapeOfCustomPropsDerivedFromPageData: BlockTemplateCustomPageData
  }>
> = props => {
  const { sections } = props.blockCustomData
  if (!sections?.length) {
    return null
  }

  return (
    <div className="footer ali-background-brand wf-section">
      <div className="main-container">
        <div className="justify-content-center">
          <div className="w-layout-grid grid-2">
            <div className="footer-logo-column sue-brand">
              <div className="horizontal">
                <ShoImage
                  layout="intrinsic"
                  width="227"
                  height="60"
                  src="https://public-assets-prod.sho-app.co.uk/brand_0872ee40-e15a-4a2f-bf59-900ff5396792/asset_siteade6-0000-0000-00000000logo.png"
                />
              </div>
              <div className="_20px"></div>
              <p className="body1-brand opacity-90">Vital. Inovative. Local.</p>
            </div>
            <div className="div-block-20 sue-brand">
              <h3 className="opacity-90 h6-brand">
                <strong className="overline-brand">Sections</strong>
              </h3>
              <div className="collection-list-wrapper w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {sections?.map(({ href, sectionName }) => (
                    <div role="listitem" className="w-dyn-item" key={href}>
                      <div className="div-block-21">
                        <Link href={href}>
                          <a className="margin-right roy-brand body1-brand" style={{ marginBottom: '8px' }}>
                            {sectionName}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="div-block-20 sue-brand">
              <h3 className="opacity-90 h6-brand">
                <strong className="overline-brand">LINKS</strong>
              </h3>
              <div>
                <a
                  href="https://www.semissourian.com/classifieds"
                  target="_blank"
                  className="roy-brand body1-brand"
                  rel="noreferrer">
                  Classifieds
                </a>
              </div>
              <div>
                <a
                  href="https://www.semohousehunter.com/"
                  target="_blank"
                  className="roy-brand body1-brand"
                  rel="noreferrer">
                  Homes
                </a>
              </div>
              <div>
                <a href="https://semo.jobs/" target="_blank" className="roy-brand body1-brand" rel="noreferrer">
                  Jobs
                </a>
              </div>
            </div>
            <div className="div-block-20 sue-brand">
              <h3 className="opacity-90 h6-brand">
                <strong className="overline-brand">CONNECT</strong>
              </h3>
              <div>
                <a
                  href="https://www.facebook.com/semissourian/"
                  target="_blank"
                  className="roy-brand body1-brand"
                  rel="noreferrer">
                  Facebook
                </a>
              </div>
              <div>
                <a href="mailto:support@semissourian.com" className="roy-brand body1-brand">
                  Email
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/semissourian?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  className="roy-brand body1-brand"
                  rel="noreferrer">
                  Twitter
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/user/semissourian"
                  target="_blank"
                  className="roy-brand body1-brand"
                  rel="noreferrer">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright-text horizontal-row">
            <div className="no-margin sue-brand overline-brand opacity-90">©2021 RUST Com</div>
            <div className="horizontal-row">
              <Link href="/terms/">
                <a className="no-margin sue-brand overline-brand opacity-90">Terms</a>
              </Link>
              <div className="_20px"></div>
              <Link href="/privacy-policy">
                <a href="privacy-policy.html" className="no-margin sue-brand overline-brand opacity-90">
                  Privacy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPubFooterView

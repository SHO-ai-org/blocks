import Link from 'next/link'
import { FC } from 'react'

import { BlockTemplateViewProps } from '../../../../../utils/typescript-utils'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type SectionData = {
  href: string
  sectionName: string
}

const BlockPubFooterView: FC<BlockTemplateViewProps> = props => {
  const sections = props?.listPageAdditionalBlocks?.items?.reduce((tot: SectionData[], block): SectionData[] => {
    if (block.blockCategory === 'PubSectionMain' && block.data) {
      const sectionData = JSON.parse(block.data) as BlockPubSectionMainViewProps
      const { name } = sectionData
      const slug = block.getPage?.slug
      if (name && slug) {
        return [
          ...tot,
          {
            href: slug,
            sectionName: name,
          },
        ]
      } else return tot
    } else return tot
  }, [])

  return (
    <div className="footer ali-background-brand wf-section">
      <div className="main-container">
        <div className="justify-content-center">
          <div className="w-layout-grid grid-2">
            <div className="footer-logo-column sue-brand">
              <div className="horizontal">
                <div className="logo-appicon-background-image-url-brand logo-footer"></div>
              </div>
              <div className="_20px"></div>
              <p className="body1-brand opacity-50">Vital. Inovative. Local.</p>
            </div>
            <div className="div-block-20 sue-brand">
              <h6 className="opacity-50">
                <strong className="overline-brand">Sections</strong>
              </h6>
              <div className="collection-list-wrapper w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {sections?.map(el => (
                    <div role="listitem" className="w-dyn-item" key={el.href}>
                      <div className="div-block-21">
                        <Link href={el.href}>
                          <a className="margin-right roy-brand body1-brand" style={{ marginBottom: '0px' }}>
                            {el.sectionName}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="div-block-20 sue-brand">
              <h6 className="opacity-50">
                <strong className="overline-brand">LINKS</strong>
              </h6>
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
              <h6 className="opacity-50">
                <strong className="overline-brand">CONNECT</strong>
              </h6>
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
            <div className="no-margin sue-brand overline-brand opacity-25">©2021 RUST Com</div>
            <div className="horizontal-row">
              <Link href="/terms/">
                <a className="no-margin sue-brand overline-brand opacity-25">Terms</a>
              </Link>
              <div className="_20px"></div>
              <Link href="/privacy-policy">
                <a href="privacy-policy.html" className="no-margin sue-brand overline-brand opacity-25">
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

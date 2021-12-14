import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import { BlockTemplateViewProps } from '../../../../../utils/typescript-utils'
import { BlockPubSectionMainViewProps } from '../blockPubSectionMain/blockPubSectionMain'

type SectionData = {
  sectionName: string
  href: string
}

const BlockPubHeaderMenuView: FC<BlockTemplateViewProps> = props => {
  const { status, data: session } = useSession()
  const subscriber = session?.user
  const [isOpen, setIsOpen] = useState(false)
  const dropWrapperRef = useRef<HTMLDivElement>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [verificationLinkErrorShown, setVerificationLinkErrorShown] = useState(false)
  const [verificationLinkModalOpen, setVerificationLinkModalOpen] = useState(false)
  const [subscriptionSuccessShown, setSubscriptionSuccessShown] = useState(false)
  const [subscriptionSuccessModalOpen, setSubscriptionSuccessModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query?.error === 'Verification' && !verificationLinkErrorShown) {
      setVerificationLinkModalOpen(true)
      setVerificationLinkErrorShown(true)
    }
    if (router.query?.['newsletter-subscription'] === 'success' && !subscriptionSuccessShown) {
      setSubscriptionSuccessShown(true)
      setSubscriptionSuccessModalOpen(true)
    }
  }, [verificationLinkErrorShown, subscriptionSuccessShown, router])

  const sections: SectionData[] = []
  const topSections: SectionData[] = []

  props?.listPageAdditionalBlocks?.items?.forEach(block => {
    if (block.blockCategory === 'PubSectionMain' && block.data) {
      const sectionData = JSON.parse(block.data) as BlockPubSectionMainViewProps
      const { featuredInNav, name } = sectionData
      const slug = block.getPage?.slug
      if (name && slug) {
        const section = {
          href: slug,
          sectionName: name,
        }
        sections.push(section)
        if (featuredInNav) {
          topSections.push(section)
        }
      }
    }
  })

  const toggle = e => {
    e.stopPropagation()
    e.stopPropagation()
    if (dropWrapperRef.current) {
      if (isOpen) {
        dropWrapperRef.current.style.height = '0px'
      } else {
        dropWrapperRef.current.style.height = '125px'
      }
      setIsOpen(!isOpen)
    }
  }

  const sectionsInHeader = topSections?.slice(0, 2)

  return (
    <>
      <div
        className="background-protector"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: isDrawerOpen ? 1 : -1,
        }}
      />
      <div
        data-w-id="5f27514965f19c3ff8f7ab9e"
        style={{ backgroundColor: 'white', zIndex: 3, top: 0 }}
        className="sticky">
        <div
          data-w-id="ddfdc298-c653-d80b-d3c2-5cfcc63a9232"
          // style={{ position: 'sticky' }}
          className="master-header sticky roy-background-brand edit-o">
          <div className="sue-background-brand wf-section">
            <div className="main-container edity">
              <div className="logo-bar edit">
                <div className="navbar-categories button-brand">
                  <div className="div-block-18">
                    <div
                      data-animation="over-left"
                      className="sidebar-nav w-nav"
                      data-easing2="ease"
                      data-easing="ease"
                      // data-collapse="all"
                      role="banner"
                      data-no-scroll="1"
                      data-duration="400"
                      data-doc-height="1">
                      <OutsideClickHandler
                        onOutsideClick={e => {
                          if (isDrawerOpen) {
                            setIsDrawerOpen(false)
                          }
                        }}>
                        <nav
                          role="navigation"
                          className="nav-menu w-nav-menu"
                          style={{
                            display: 'fixed',
                            zIndex: isDrawerOpen ? 1 : -1,
                            width: '470px',
                            left: isDrawerOpen ? '0px' : '-470px',
                            right: 'unset',
                            transition: 'left 400ms',
                            MozUserSelect: 'none',
                            WebkitUserSelect: 'none',
                            userSelect: 'none',
                          }}
                          onClick={e => {
                            setIsDrawerOpen(false)
                          }}>
                          <img
                            style={{
                              opacity: isDrawerOpen ? '1' : '0',
                              WebkitUserSelect: 'none',
                              MozUserSelect: 'none',
                            }}
                            data-w-id="71a52fc3-299c-c643-e1e9-d5e5ee19908a"
                            src="/semissourian/images/Icon-Cross.svg"
                            alt=""
                            className="nav-close-cross"
                          />
                          <div className="nav-menu-inner logo-horizontallockup-background-color">
                            <div className="button-brand edit-new">
                              <div className="_40px"></div>
                              <h4>Sections</h4>
                              <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                  {sections?.map(el => (
                                    <div role="listitem" className="w-dyn-item" key={el.href}>
                                      <Link href={el.href}>
                                        <a className="sue-brand w-inline-block" style={{ cursor: 'pointer' }}>
                                          <p className="no-margin" style={{ textTransform: 'capitalize' }}>
                                            {el.sectionName}
                                          </p>
                                        </a>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="nav-menu-bottom">
                              <div className="w-layout-grid vertical-menu-grid button-brand">
                                <Link href="/privacy-policy/" passHref>
                                  <a className="sue-brand opacity-50" style={{ cursor: 'pointer' }}>
                                    Privacy Policy
                                  </a>
                                </Link>
                                <a
                                  href="mailto:support@semissourian.com?subject=Support Request from SEMissourian.com"
                                  className="sue-brand opacity-50">
                                  Customer Service
                                </a>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </OutsideClickHandler>
                      <div
                        className="div-block-22"
                        onClick={e => {
                          setIsDrawerOpen(true)
                        }}
                        style={{ cursor: 'pointer' }}>
                        <div className="icon ben-brand edit-dd w-embed">
                          <span
                            className="material-icons-outlined"
                            style={{ fontSize: '30px', WebkitUserSelect: 'none', MozUserSelect: 'none' }}>
                            menu
                          </span>
                        </div>
                        <div
                          data-w-id="71a52fc3-299c-c643-e1e9-d5e5ee1990a8"
                          className="menu-button w-nav-button"></div>
                      </div>
                    </div>
                    <div className="_20px"></div>
                    <div>
                      <Link href="/latest-articles/">
                        <a className="margin-right button-brand" style={{ cursor: 'pointer' }}>
                          Latest
                        </a>
                      </Link>
                    </div>
                    {sectionsInHeader?.map(el => (
                      <div className="w-dyn-list" key={el.href}>
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <div>
                              <Link href={el.href}>
                                <a className="margin-right button-brand" style={{ cursor: 'pointer' }}>
                                  {el.sectionName}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div
                      data-w-id="71a52fc3-299c-c643-e1e9-d5e5ee1990bd"
                      onClick={toggle}
                      style={{ cursor: 'pointer', WebkitUserSelect: 'none', MozUserSelect: 'none' }}>
                      <a className="margin-right button-brand" style={{ whiteSpace: 'nowrap' }}>
                        More +
                      </a>
                    </div>
                  </div>
                </div>
                <Link href="/" passHref>
                  <a aria-current="page" className="logo-link w-inline-block w--current" style={{ cursor: 'pointer' }}>
                    <div>
                      <div className="_10padding">
                        <div className="div-block-17">
                          <div className="horizontal">
                            <div className="logo-dark-horizontallockup-background-image-url-brand"></div>
                          </div>
                          <div className="vertical">
                            <div className="logo-dark-verticallockup-background-image-url-brand"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="social-links">
                  {status === 'unauthenticated' && (
                    <Link href="/sign-in" passHref>
                      <a className="margin-right button-brand" style={{ cursor: 'pointer' }}>
                        Sign in
                      </a>
                    </Link>
                  )}
                  {!!(
                    status !== 'loading' &&
                    !subscriber?.stripeSubscriptions?.length &&
                    !subscriber?.legacySubscription
                  ) && (
                    <Link href="/subscribe" passHref>
                      <a className="button button-brand button-primary-brand w-button" style={{ cursor: 'pointer' }}>
                        Subscribe
                      </a>
                    </Link>
                  )}
                  {status === 'authenticated' && (
                    <div className="margin-left" style={{ marginLeft: '15px', display: 'flex', cursor: 'pointer' }}>
                      <Link href="/account/" passHref>
                        <a style={{ display: 'flex', cursor: 'pointer' }}>
                          <span className="button-brand" style={{ marginRight: 7 }}>
                            manage Account
                          </span>
                          <span className="w-inline-block">
                            <div className="icon ben-brand w-embed">
                              <span className="material-icons-outlined">account_circle</span>
                            </div>
                          </span>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <OutsideClickHandler
              onOutsideClick={e => {
                if (isOpen && e.srcElement === 'a.margin-right.button-brand' && dropWrapperRef.current) {
                  dropWrapperRef.current.style.height = '0px'
                  setIsOpen(false)
                }
              }}>
              <div
                className="drop-wrapper"
                ref={dropWrapperRef}
                style={{ willChange: 'height', transition: 'height 400ms' }}>
                <div className="more-drop-content w-dyn-list">
                  <div role="list" className="w-dyn-items w-row">
                    {sections?.map(el => (
                      <div role="listitem" className="w-dyn-item w-col w-col-3 body1-brand" key={el.href}>
                        <Link href={el.href} passHref>
                          <a className="w-inline-block" style={{ cursor: 'pointer' }}>
                            <div>{el.sectionName}</div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      {/* MODAL EMAIL VERIFICATION LINK */}
      <div
        data-w-id="5c4389c1-19a1-6969-b851-5695a78bb337"
        className="popup-container"
        style={{ display: verificationLinkModalOpen ? 'flex' : 'none' }}>
        <OutsideClickHandler
          onOutsideClick={e => {
            setVerificationLinkModalOpen(false)
          }}>
          <div className="popup sue-background-brand center-align">
            <div className="popup-topbar right-align">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setVerificationLinkModalOpen(false)
                }}
                data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33a"
                className="popup-close-btn w-inline-block">
                <div className="icon w-embed">
                  <span className="material-icons-outlined">close</span>
                </div>
              </a>
            </div>
            <div className="popup-content roy-background-brand">
              <div data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33d" className="center-align">
                <h3>Email Verification Failed</h3>
                <p>The email verification link has already been used or has expired.</p>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
        <div className="bg ali-background-brand opacity-80"></div>
      </div>
      {/* MODAL SUBSCRIPTION SUCCESS LINK  */}
      <div
        data-w-id="5c4389c1-19a1-6969-b851-5695a78bb337"
        className="popup-container"
        style={{ display: subscriptionSuccessModalOpen ? 'flex' : 'none' }}>
        <OutsideClickHandler
          onOutsideClick={e => {
            setSubscriptionSuccessModalOpen(false)
          }}>
          <div className="popup sue-background-brand center-align">
            <div className="popup-topbar right-align">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSubscriptionSuccessModalOpen(false)
                }}
                data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33a"
                className="popup-close-btn w-inline-block">
                <div className="icon w-embed">
                  <span className="material-icons-outlined">close</span>
                </div>
              </a>
            </div>
            <div className="popup-content roy-background-brand">
              <div data-w-id="5c4389c1-19a1-6969-b851-5695a78bb33d" className="center-align">
                <h3>Newsletter Subscription Success</h3>
                <p>You are now subscribed to our newsletter!</p>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
        <div className="bg ali-background-brand opacity-80"></div>
      </div>
    </>
  )
}

export default BlockPubHeaderMenuView

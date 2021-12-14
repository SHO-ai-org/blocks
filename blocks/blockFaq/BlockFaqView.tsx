import { FC, useState } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockFaqView: FC<BlockViewProps> = () => {
  const [openPanels, setOpenPanels] = useState<Record<string, boolean>>({})

  return (
    <div className="subscribe-faq section wf-section">
      <div className="main-container">
        <div className="align-center">
          <h3>Frequently asked questions</h3>
          <div className="space"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {faqArray.map(el => {
                const isPanelOpen = openPanels[el.id]

                return (
                  <div role="listitem" className="w-dyn-item" key={el.id}>
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="accordion w-dropdown"
                      style={{
                        zIndex: isPanelOpen ? 901 : 0,
                      }}>
                      <div
                        onClick={() => {
                          setOpenPanels({
                            ...openPanels,
                            [el.id]: !openPanels[el.id],
                          })
                        }}
                        className={`dropdown-toggle button-secondary-brand sue-brand w-dropdown-toggle ${
                          isPanelOpen ? 'w--open' : ''
                        }`}
                        aria-expanded={isPanelOpen}>
                        <div className="w-icon-dropdown-toggle"></div>
                        <div className="body1-brand no-margin">{el.title}</div>
                      </div>
                      <nav className={`dropdown-container ota-brand w-dropdown-list ${isPanelOpen ? 'w--open' : ''}`}>
                        <div className="body1-brand w-richtext" dangerouslySetInnerHTML={{ __html: el.html }} />
                      </nav>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlockFaqView

const faqArray: { id: string; title: string; html: string }[] = [
  {
    id: '1',
    title: 'How do I send you my feedback on your online subscription to the seMissourian.com?',
    html: '<p>We welcome your comments. To send suggestions or comments, please use our <a href="https://www.semissourian.com/forms/feedback" tabindex="0">feedback form</a>.<br></p>',
  },
  {
    id: '2',
    title:
      "I've signed up for seMissourian.com e-mails and newsletters. Will e-mail newsletters be affected by online subscription to seMissourian.com?",
    html: "<p>No, you don't need a digital subscription in order to receive our e-mail newsletters.<br></p>",
  },
  {
    id: '3',
    title: 'When I go on vacation, can I put my online subscription to the seMissourian.com on hold?',
    html: "<p>No. seMissourian.com digital content is available anywhere there's an Internet connection, so we're not offering vacation suspensions. When you put your print subscription on hold, your digital access will not be affected.<br></p>",
  },
  {
    id: '4',
    title: 'Does the digital subscription include access to the E-Edition?',
    html: '<p>The <a href="https://www.semissourian.com/reader/newspaper" tabindex="0">E-Edition</a> is a separate product that is free for print subscribers.<br></p>',
  },
  {
    id: '5',
    title: 'Can I access my digital subscription on more than one computer?',
    html: '<p>Yes, you can access seMissourian.com on any browser, on most any computer pending internet connection.<br></p>',
  },
  {
    id: '6',
    title: 'Why charge for "premium" online content?',
    html: "<p>Upon reaching your monthly reading limit, you'll be asked to subscribe. Your subscription helps us continue to invest in the quality journalism you know and love. If you're a regular reader, we hope you'll consider subscribing. You'll get unlimited access to all of our content, including articles, blog posts, videos, slide shows, and other features.<br></p>",
  },
  {
    id: '7',
    title: 'Who do I call if I have log in problems?',
    html: '<p>Please contact the Circulation Department at <strong>1-573-388-3680</strong> or <strong>1-800-444-4812</strong>, or email <a href="mailto:customercare@seMissourian.com" tabindex="0">customercare@seMissourian.com</a>.<br></p>',
  },
  {
    id: '8',
    title: "What if I don't want to subscribe - can I still read the seMissourian.com for free?",
    html: '<p>Currently, you have unlimited free access to the homepage and section fronts on seMissourian.com. But access to "premium" content pages, including news articles and features, is limited to a number of specific views and metered. Once reached, you <a href="https://www.semissourian.com/subscribe" tabindex="0">will need to subscribe</a>.<br></p>',
  },
  {
    id: '9',
    title: 'What is an online subscription to seMissourian.com?',
    html: '<div><p>$14.95 a month for online access to seMissourian.com and the E-Edition.</p><p>$17.95 a month for print home delivery and unlimited online access to seMissourian.com and the E-Edition.</p></div>',
  },
]

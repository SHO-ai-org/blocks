import { useRouter } from 'next/router'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockWisiwigView: FC<BlockViewProps> = () => {
  const router = useRouter()
  const isTerm = router.query?.page?.[0] === 'terms'

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="wf-section">
        <div className="main-container">
          <div className="section border-top">
            <div className="page-title-container"></div>
            {isTerm ? (
              <>
                <h1>Terms</h1>
                <div className="w-richtext">
                  <p>
                    Rust Communications, Inc. d/b/a semissourian.com (&quot;RUST COMMUNICATIONS&quot;) offers this Web
                    site, including all information, software, products and services available from this Web site or
                    offered as part of or in conjunction with this Web site (the &quot;Web site&quot;), to you, the
                    user, conditioned upon your acceptance of all of the terms, conditions, policies and notices stated
                    here. RUST COMMUNICATIONS reserves the right to make changes to these Terms and Conditions
                    immediately by posting the changed Terms and Conditions in this location. Your continued use of the
                    Web site constitutes your agreement to all such terms, conditions and notices, and any changes to
                    the Terms and Conditions made by RUST COMMUNICATIONS.
                  </p>
                  <h3>Personal and Noncommercial Use</h3>
                  <p>
                    The Web site is for your personal and noncommercial use. As a condition to your continued use of the
                    Web site, you warrant to RUST COMMUNICATIONS that you will not use the Web site for any purpose that
                    is unlawful or prohibited by these terms and conditions of use.
                  </p>
                  <h3>No Warranties</h3>
                  <p>
                    USE THE WEB SITE AT YOUR OWN RISK. THIS WEB SITE IS PROVIDED TO YOU &quot;AS IS,&quot; WITHOUT
                    WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE OR NON-INFRINGEMENT. RUST COMMUNICATIONS
                    MAKES NO WARRANTY THAT ANY CONTENT CONTAINED ON THIS WEB SITE SATISFIES ANY APPLICABLE GOVERNMENT
                    LAW, REGULATION OR REQUIREMENT. Neither RUST COMMUNICATIONS nor its employees, agents, third-party
                    information providers, merchants, licensors or the like warrant that the Web site or its operation
                    will be accurate, reliable, uninterrupted or error-free. No agent or representative has the
                    authority to create any warranty regarding the Web site on behalf of RUST COMMUNICATIONS. RUST
                    COMMUNICATIONS reserves the right to change or discontinue at any time any aspect or feature of the
                    Web site.
                  </p>
                  <h3>Exclusion of Liability</h3>
                  <p>
                    UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL RUST COMMUNICATIONS OR ANYONE ELSE INVOLVED IN
                    CREATING, PRODUCING, STORING OR DISTRIBUTING THE WEB SITE BE LIABLE FOR ANY DIRECT, INDIRECT,
                    INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES AND EXPENSES WHATSOEVER (INCLUDING, WITHOUT LIMITATION,
                    LOST PROFITS, AND DAMAGES ARISING FROM LOST DATA OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN ANY
                    WAY CONNECTED WITH USE OF THE WEB SITE, DELAY OR INABILITY TO USE THE WEB SITE, OR FOR ANY
                    INFORMATION, SOFTWARE, PRODUCTS OR SERVICES OBTAINED THROUGH THE WEB SITE, WHETHER SUCH DAMAGES ARE
                    BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES. YOU SPECIFICALLY AGREE THAT NO LICENSOR, SUPPLIER OR INFORMATION PROVIDER TO RUST
                    COMMUNICATIONS OR ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS, OR ANY OF THEIR
                    SUCCESSORS OR ASSIGNS, SHALL HAVE ANY LIABILITY TO YOU FOR ANY REASON OR UNDER ANY THEORY
                    WHATSOEVER, BASED UPON THE INFORMATION PROVIDED ON OR THROUGH THE WEB SITE. Because some states do
                    not permit the exclusion or limitation of liability for consequential or incidental damages, some or
                    all of the above limitation may not apply to you.
                  </p>
                  <h3>Indemnification</h3>
                  <p>
                    You agree to defend, indemnify and hold RUST COMMUNICATIONS, its officers, directors, affiliated
                    companies, employees and agents, licensors and suppliers harmless from and against any and all
                    claims, actions or demands, liabilities and settlements, including, without limitation, reasonable
                    legal and accounting fees, resulting from, or alleged to result from, your use of the RUST
                    COMMUNICATIONS site, or any content, product or service offered through the RUST COMMUNICATIONS
                    site, in a manner that violates or is alleged to violate these Terms and Conditions. RUST
                    COMMUNICATIONS shall provide notice to you of any such claim, suit or proceeding and shall
                    reasonably cooperate with you, at your expense, in your defense of any such claim, suit or
                    proceeding.
                  </p>
                  <h3>Featured Links and Advertisements</h3>
                  <p>
                    The Web site may contain hyperlinks to Web sites offered by parties other than RUST COMMUNICATIONS.
                    Such hyperlinks are provided for your reference and convenience only. RUST COMMUNICATIONS does not
                    control such other Web sites and is not responsible for their content; nor does RUST
                    COMMUNICATIONS&#x27; inclusion of hyperlinks to such Web sites imply any endorsement of the material
                    on such Web sites or any association with their operators. Unless otherwise specifically stated on
                    this Web site, RUST COMMUNICATIONS does not endorse any product or service or make any
                    representation regarding the reliability, quality or accuracy of any products or services featured
                    in, or linked to, any advertisement appearing on this Web site.
                  </p>
                  <h3>Linking</h3>
                  <p>
                    Unless you are subsequently advised otherwise by RUST COMMUNICATIONS, you are hereby licensed to
                    create hyperlinks to the content on the Web site, provided that the hyperlink accurately describes
                    the content as it appears on the Web site. RUST COMMUNICATIONS reserves the right to revoke this
                    license generally, or your right to use specific links, at any time, and may normally break any
                    hyperlink after 14 days. Under no circumstances may you &quot;frame&quot; the Web site or any of its
                    content or copy portions of the Web site to a server, except as part of an Internet service
                    provider&#x27;s incidental caching of pages. Each page within the Web site must be displayed in full
                    (including all trademarks, branding, advertising and promotional materials), without any
                    accompanying frame, border, margin, design, branding, trademark, advertising or promotional
                    materials not originally displayed on the page within the Web site.
                  </p>
                  <h3>Software Available on Web Site</h3>
                  <p>
                    Any software that is made available to download from this Web site is the copyrighted work of RUST
                    COMMUNICATIONS and/or its suppliers. Your use of the software is governed by the terms of the End
                    User License Agreement, if any, that accompanies or is included with the software. You may not
                    install or use any software without first agreeing to the terms of such End User License Agreement.
                    For any software not accompanied by an End User License Agreement, RUST COMMUNICATIONS hereby grants
                    to you a personal, nontransferable, non-sublicensable license to use the software for viewing and
                    other purposes within the scope of use of such software anticipated by RUST COMMUNICATIONS in
                    accordance with these terms and conditions, and for no other purpose. Any such software is provided
                    to you subject to the warranty and liability exclusions set forth in these terms and conditions.
                  </p>
                  <h3>Copyright</h3>
                  <p>
                    Except for material in the public domain under United States copyright law, all material contained
                    on the Web site (including all software, HTML code, Javascript code and other code) is protected by
                    United States and foreign copyright laws. Except as otherwise expressly provided in these terms and
                    conditions, you may not copy, distribute, transmit, display, perform, reproduce, publish, license,
                    modify, rewrite, create derivative works from, transfer, or sell any material contained on the Web
                    site without the prior consent of the copyright owner. None of the material contained on the RUST
                    COMMUNICATIONS site may be reverse-engineered, disassembled, decompiled, transcribed, stored in a
                    retrieval system, translated into any language or computer language, retransmitted in any form or by
                    any means (electronic, mechanical, photoreproduction, recordation or otherwise), resold or
                    redistributed without the prior written consent of RUST COMMUNICATIONS. Violation of this provision
                    may result in severe civil and criminal penalties.
                  </p>
                  <p>
                    You may make single copies of materials displayed on the Web site for your own personal and
                    noncommercial use only, provided any copies include the copyright and other notices displayed with
                    the materials on the Web site. You may not distribute such copies to others, whether or not for a
                    charge or other consideration, without prior written permission from RUST COMMUNICATIONS or the
                    copyright owner of the copied material. Requests to reproduce materials on the Web site for
                    distribution or other purposes should be mailed to:
                  </p>
                  <p>
                    RUST COMMUNICATIONS OPERATIONS, INC.
                    <br />
                    Attn: James Baughn
                    <br />
                    P.O. Box 699
                    <br />
                    Cape Girardeau, MO 63702
                    <br />
                    phone: 573-335-6611
                    <br />
                    fax: 573-334-8882
                    <br />
                    e-mail: <a href="mailto:webmaster@rustmedia.com">webmaster@rustmedia.com</a>
                    <br />
                  </p>
                  <h3>Trademarks</h3>
                  <p>
                    &quot;RUST COMMUNICATIONS&quot; and &quot;semissourian.com&quot; are trademarks or registered
                    trademarks of RUST COMMUNICATIONS, Inc., licensed for use by RUST COMMUNICATIONS, and are protected
                    by state and federal trademark laws. Other trademarks appear on the Web site with permission from
                    their respective owners. Your unauthorized use of trademarks appearing on the Web site may
                    constitute trademark infringement, which could subject you to substantial civil penalties.
                  </p>
                  <h3>Termination of Privileges</h3>
                  <p>
                    RUST COMMUNICATIONS reserves the right to terminate your privilege of using all or any portion of
                    the Web site if you breach any of these terms and conditions of use. If RUST COMMUNICATIONS receives
                    notice or otherwise discovers that you have posted material that infringes another party&#x27;s
                    copyright or trademark rights or violates another party&#x27;s rights of privacy or publicity, RUST
                    COMMUNICATIONS may terminate your access to the Web site, including all of your privileges or
                    accounts that you may have established in connection with the Web site.
                  </p>
                  <h3>Copyright Infringement</h3>
                  <p>
                    RUST COMMUNICATIONS will not tolerate copyright infringement of any kind. RUST COMMUNICATIONS does
                    not, however, monitor user-submitted materials for copyright infringement. If you believe that any
                    material on the Web site infringes your copyright, you may seek to have the material removed by
                    sending RUST COMMUNICATIONS notice that includes all of the following information:
                  </p>
                  <ul role="list">
                    <li>your full name, address and telephone number</li>
                    <li>your e-mail address</li>
                    <li>identification of the copyrighted work(s) that you believe is being infringed</li>
                    <li>
                      identification of the infringing material and information sufficient for RUST COMMUNICATIONS to
                      locate the material
                    </li>
                    <li>
                      your statement of good faith belief that (a) the material infringes your copyrights, (b) the
                      information provided in the notice is accurate and (c) under penalty of perjury, you are
                      authorized to act for the copyright owner
                    </li>
                    <li>your physical or electronic signature</li>
                  </ul>
                  <p>
                    Direct such notice to RUST COMMUNICATIONS designated agent for receiving copyright infringement
                    notices:
                  </p>
                  <p>
                    RUST COMMUNICATIONS, Inc.
                    <br />
                    Attn: Lucas Presson
                    <br />
                    P.O. Box 699
                    <br />
                    Cape Girardeau, MO 63702
                    <br />
                    phone: 573-335-6611
                    <br />
                    fax: 573-334-8882
                    <br />
                    e-mail: <a href="mailto:webmaster@rustmedia.com">webmaster@rustmedia.com</a>
                    <br />
                  </p>
                  <p>
                    Upon receipt of notice complying with the above requirements, RUST COMMUNICATIONS will act to remove
                    infringing materials and, if applicable, send notice to the user that posted such materials on the
                    Web site.
                  </p>
                  <p>
                    If RUST COMMUNICATIONS removes materials posted by you as a user due to alleged copyright
                    infringement, you may seek to have the materials reinstated by notifying RUST COMMUNICATIONS&#x27;s
                    designated agent in writing and including the following information:
                  </p>
                  <ul role="list">
                    <li>your full name, address and telephone number</li>
                    <li>your e-mail address</li>
                    <li>
                      identification of the material that has been removed or to which access has been disabled,
                      including its location before it was removed or disabled
                    </li>
                    <li>
                      your statement under penalty of perjury that you have a good faith belief that the material was
                      removed or disabled as a result of mistake or misidentification of the material
                    </li>
                    <li>your physical or electronic signature</li>
                  </ul>
                  <h3>Community Forums</h3>
                  <p>
                    RUST COMMUNICATIONS may provide chat rooms, message boards and other public posting areas or
                    community forums (&quot;Community Forums&quot;) on the RUST COMMUNICATIONS site. If RUST
                    COMMUNICATIONS provides any such Community Forum or if you use a Community Forum, you are solely
                    responsible for your own communications and the consequences of posting those communications. RUST
                    COMMUNICATIONS does not assume any responsibility for the consequences of any Community Forum
                    communications on or arising from use of the RUST COMMUNICATIONS site. In cases where you feel
                    threatened or believe someone else is in danger, you should contact your local law enforcement
                    agency immediately.
                  </p>
                  <p>
                    In consideration for being allowed to use the Community Forums, you agree that the following actions
                    shall constitute a material breach of these Terms and Conditions:
                  </p>
                  <ul role="list">
                    <li>
                      Do not disrespect the privacy and views of others; Instead, make sure that you when you disagree
                      with a story&#x27;s premise or another commenter that you do so in a respectful and courteous
                      manner;
                    </li>
                    <li>Do not name call;</li>
                    <li>
                      Do not use the Community Forums for commercial purposes, including the promotion of any specific
                      goods or services;
                    </li>
                    <li>
                      Do not post obscene, profane, sexually explicit, libelous, slanderous, defamatory, harmful,
                      threatening, illegal or knowingly false information;
                    </li>
                    <li>
                      Do not post blatant expressions of bigotry, racism or hate, material encouraging conduct that may
                      constitute or contribute to a criminal offense, give rise to civil liability or violate any
                      national, state or local law, regulation or authority, or any other material which RUST
                      COMMUNICATIONS finds objectionable;
                    </li>
                    <li>Do not use the Community Forums for unlawful purposes;</li>
                    <li>Do not impersonate another person;</li>
                    <li>
                      Do not allow any other person or entity to use your identification to post or view comments; and
                    </li>
                    <li>
                      Do not post material that infringes on the copyright or other intellectual property rights of
                      others or the privacy and publicity rights of others.
                    </li>
                  </ul>
                  <p>
                    RUST COMMUNICATIONS reserves the right to record dialogue in Community Forums. RUST COMMUNICATIONS
                    is not responsible for screening or monitoring material posted by users or any other person or
                    entity. If notified by a user of communications that are alleged not to conform to the terms of this
                    Section, RUST COMMUNICATIONS may investigate the allegation and determine in its sole discretion to
                    remove or request the removal of the communications. RUST COMMUNICATIONS reserves the right to
                    remove communications that are abusive, illegal, disruptive or that otherwise fail to conform with
                    these Terms and Conditions. RUST COMMUNICATIONS reserves the right (but is not obligated) to edit or
                    delete any communications posted on the RUST COMMUNICATIONS site, regardless of whether such
                    communications violate these standards for content.
                  </p>
                  <p>
                    Furthermore, RUST COMMUNICATIONS reserves the right (but is not obligated) to monitor, edit or
                    disclose any type of posting on the Community Forums for adherence to the Terms and Conditions, if
                    required in the course of normal operations and maintenance of the RUST COMMUNICATIONS site, or if
                    required to do so by law or in the good faith belief that such action is necessary to (i) comply
                    with the law or comply with legal process served; (ii) protect and defend the rights of RUST
                    COMMUNICATIONS or others; or (iii) act in an emergency to protect the personal safety of our users
                    or the public. RUST COMMUNICATIONS HAS NO LIABILITY OR RESPONSIBILITY TO USERS OR ANY OTHER PERSON
                    OR ENTITY FOR PERFORMANCE OR NONPERFORMANCE OF THE AFOREMENTIONED SCREENING ACTIVITIES.
                  </p>
                  <p>
                    RUST COMMUNICATIONS does not represent or guarantee the truthfulness, accuracy or reliability of any
                    of the material posted by Community Forum users or endorse any opinions expressed by such users. ANY
                    RELIANCE UPON CONTENT POSTED IN A COMMUNITY FORUM IS AT YOUR OWN RISK.
                  </p>
                  <p>
                    Any public Community Forum areas are for discussion and debate only. You may not use any Community
                    Forum area to post or transmit advertisements or commercial solicitations of any kind. You may not
                    post or transmit any material of any nature, including text, audio, software, animation or
                    photographs, belonging to any person or party other than yourself, without the prior written consent
                    of such owner. Simply because material is available on the Internet does not mean it is in the
                    public domain. The vast majority of materials on the Internet are protected by copyright and
                    trademark laws. RUST COMMUNICATIONS shall have the right, but not the obligation, to monitor any
                    Community Forum areas of the Web site to determine compliance with these Terms and Conditions and
                    any other operating rules that may be established by RUST COMMUNICATIONS from time to time.
                  </p>
                  <p>
                    By posting messages or other material in any Community Forum areas of the Web site, you are granting
                    to RUST COMMUNICATIONS and its licensees a worldwide, royalty-free, perpetual, non-exclusive and
                    irrevocable right and license to use, reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, perform and display any posting by you (in whole or in part)
                    and/or to incorporate it in other works in any form, media or technology now known or hereafter
                    developed.
                  </p>
                  <p>
                    Through your use of the RUST COMMUNICATIONS Community Forums, you are agreeing to all of the
                    aforementioned Terms and Conditions of Use for such Community Forums contained herein.
                  </p>
                  <p>
                    You agree to defend, indemnify and hold harmless RUST COMMUNICATIONS and its officers, directors,
                    affiliated companies, employees, agents, licensors and suppliers, from and against any and all
                    claims, actions or demands, liabilities and settlements, including, without limitation, reasonable
                    legal and accounting fees, resulting from, or alleged to result from, your use of any Community
                    Forums or use by others of any community forums with respect to you, including, without limitation,
                    any claim of libel, defamation, harassment, violation of rights of privacy or publicity, loss of
                    service or infringement of intellectual property or other rights, or violation of these Terms and
                    Conditions.
                  </p>
                  <h3>Termination of Privileges</h3>
                  <p>
                    RUST COMMUNICATIONS reserves the right to terminate your privilege of using all or any portion of
                    the Web site if you breach any of these terms and conditions of use. If RUST COMMUNICATIONS receives
                    notice or otherwise discovers that you have posted material that infringes another party&#x27;s
                    copyright or trademark rights or violates another party&#x27;s rights of privacy or publicity, RUST
                    COMMUNICATIONS may terminate your access to the Web site, including all of your privileges or
                    accounts that you may have established in connection with the Web site.
                  </p>
                  <h3>General</h3>
                  <p>
                    These Terms and Conditions (including the privacy policy attached hereto, which shall be deemed to
                    be a part of these Terms and Conditions) constitute the entire agreement and understanding between
                    you and RUST COMMUNICATIONS with respect to use of the Web site, superseding all prior or
                    contemporaneous communications and/or proposals. These Terms and Conditions also are severable, and
                    in the event any provision is determined to be invalid or unenforceable, such invalidity or
                    unenforceability shall not in any way affect the validity or enforceability of the remaining
                    provisions. RUST COMMUNICATIONS reserves the right to make changes to these Terms and Conditions
                    immediately by posting the changed Terms and Conditions in this location. By continuing to use the
                    Web site, you are agreeing to all changes made by RUST COMMUNICATIONS. A printed version of these
                    Terms and Conditions shall be admissible in judicial or administrative proceedings based upon or
                    relating to use of the Web site to the same extent and subject to the same conditions as other
                    business documents and records originally generated and maintained in printed form.
                  </p>
                  <p>???</p>
                </div>
              </>
            ) : (
              <>
                <h1>Privacy Policy</h1>
                <div className="w-richtext">
                  <p>
                    For each visitor to the Web site, RUST COMMUNICATIONS&#x27; servers automatically collect
                    information about which pages are visited and the domain name (e.g. semissourian.com) of visitors.
                    This information is used for internal review, to tailor information to individual visitors and for
                    Web site traffic audits. We also provide this information (as well as information from third-party
                    market researchers) about our users on an aggregated, anonymous basis to our advertisers.
                  </p>
                  <p>
                    RUST COMMUNICATIONS may place a &quot;cookie&quot; on the browser of your computer. The cookie
                    itself does not contain any personally identifying information. A cookie may be used to tell when
                    your computer has contacted the Web site. RUST COMMUNICATIONS uses the information for editorial
                    purposes and for other purposes such as delivery of features and advertisements, so RUST
                    COMMUNICATIONS can customize delivery of information to you without compromising privacy. For
                    example, cookies may be used to ensure that you will not see the same banner advertisement too often
                    in a single session.
                  </p>
                  <p>
                    Through your use of the Web site, RUST COMMUNICATIONS may collect information about you that
                    identifies you or your household. Normally, you would provide such information when specifically
                    asked for it by RUST COMMUNICATIONS. Any information in RUST COMMUNICATIONS&#x27; possession solely
                    as a result of your use of the Web site and that is associated with you or your household is
                    considered &quot;Personal Information.&quot; It consists of both information supplied by you (e.g.
                    name, address, telephone number and e-mail address) and information collected about how you use the
                    Web site (e.g. the fact that you have bought merchandise through the Web site). It does not include
                    aggregate information (e.g. the total number of household users older than 18 years, the zip code in
                    which a user lives) or information that you have made public on the Web site or that is otherwise
                    publicly available.
                  </p>
                  <p>
                    RUST COMMUNICATIONS uses Personal Information only for purposes necessary to provide the Web site
                    and other products and services to you. These purposes are:
                  </p>
                  <ul role="list">
                    <li>to process requests or orders placed with advertisers or merchants</li>
                    <li>to perform such normal business operations as billing, collecting and accounting</li>
                    <li>
                      to personalize and publicize the Web site based on your interests, including making you aware of
                      editorial features, advertisements and commercial items
                    </li>
                    <li>
                      to investigate complaints and to protect the Web site and RUST COMMUNICATIONS, its readers and
                      employees as provided by law or in case of emergency, as determined by legal counsel for RUST
                      COMMUNICATIONS
                    </li>
                  </ul>
                  <p>
                    Except as necessary to process your requests or orders placed with advertisers or merchants featured
                    on the Web site, RUST COMMUNICATIONS does not rent, sell, barter or give away any lists containing
                    Personal Information for use by any outside company. RUST COMMUNICATIONS also respects the privacy
                    of data on your personal computer and does not access, read, upload or store data contained in or
                    derived from your private files without your authorization.
                  </p>
                  <h3>Links</h3>
                  <p>
                    The RUST COMMUNICATIONS site contains links to other sites. RUST COMMUNICATIONS is not responsible
                    for the privacy practices or the content of such Web sites, including any sites that may indicate a
                    special relationship or partnership with RUST COMMUNICATIONS (such as co-branded pages or
                    &quot;powered by&quot; or &quot;in cooperation with&quot; relationships). RUST COMMUNICATIONS does
                    not disclose personally identifiable information or unique identifiers to those responsible for the
                    linked sites. The linked sites, however, may collect personal information from you that is not
                    subject to RUST COMMUNICATIONS&#x27;s control. To ensure protection of your privacy, always review
                    the privacy policy of the sites you may visit by linking from the RUST COMMUNICATIONS site.
                  </p>
                  <h3>Opt Out Procedures</h3>
                  <p>
                    You always may opt out of receiving future mailings or other information from RUST COMMUNICATIONS.
                    If the mailing does not have an e-mail cancellation form, send e-mail to{' '}
                    <a href="mailto:webmaster@rustmedia.com">webmaster@rustmedia.com</a> detailing the type of
                    information that you no longer desire to receive.
                  </p>
                  <h3>General</h3>
                  <p>
                    These Terms and Conditions constitute the entire agreement and understanding between you and RUST
                    COMMUNICATIONS with respect to use of the Web site, superseding all prior or contemporaneous
                    communications and/or proposals. RUST COMMUNICATIONS reserves the right to make changes to these
                    Terms and Conditions immediately by posting the changed Terms and Conditions in this location. By
                    continuing to use the Web site, you are agreeing to all changes made by RUST COMMUNICATIONS. A
                    printed version of these Terms and Conditions shall be admissible in judicial or administrative
                    proceedings based upon or relating to use of the Web site to the same extent and subject to the same
                    conditions as other business documents and records originally generated and maintained in printed
                    form.
                  </p>
                  <p>
                    The Web site is controlled and operated by RUST COMMUNICATIONS from its principal office in the
                    State of Missouri, USA. RUST COMMUNICATIONS makes no representation that materials on the Web site
                    are appropriate or available for use in other locations. Those who choose to access the Web site
                    from other locations do so on their own initiative and are responsible for compliance with local
                    laws, if and to the extent local laws are applicable. The Web site is not intended to subject RUST
                    COMMUNICATIONS to the laws or jurisdiction of any state, country or territory other than the State
                    of Missouri and the United States of America.
                  </p>
                  <h3>Contacting Us</h3>
                  <p>
                    If you have any questions about this privacy statement, the practices of the RUST COMMUNICATIONS
                    site, or your dealings with RUST COMMUNICATIONS, you may contact us at:
                  </p>
                  <p>
                    RUST COMMUNICATIONS OPERATIONS, INC.
                    <br />
                    Attn: Lucas Presson
                    <br />
                    P.O. Box 699
                    <br />
                    Cape Girardeau, MO 63702
                    <br />
                    phone: 573-335-6611
                    <br />
                    fax: 573-334-8882
                    <br />
                    e-mail: <a href="mailto:webmaster@rustmedia.com">webmaster@rustmedia.com</a>
                  </p>
                  <p>???</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockWisiwigView

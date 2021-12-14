import { blockPubAuthorRelatedArticles } from './../components/organisms/SitePage/blocks/blockPubAuthorRelatedArticles/blockPubAuthorRelatedArticles';
import { blockPubArticleHeader } from '../components/organisms/SitePage/blocks/blockPubArticleHeader/blockPubArticleHeader'
import { blockButtons } from '../components/organisms/SitePage/blocks/blockButtons/blockButtons'
import { blockColors } from '../components/organisms/SitePage/blocks/blockColors/blockColors'
import { blockDivider } from '../components/organisms/SitePage/blocks/blockDivider/blockDivider'
import { blockFaq } from '../components/organisms/SitePage/blocks/blockFaq/blockFaq'
import { blockPubFooter } from '../components/organisms/SitePage/blocks/blockPubFooter/blockPubFooter'
import { blockFooterSho } from '../components/organisms/SitePage/blocks/blockFooterSho/blockFooterSho'
import { blockIdentity } from '../components/organisms/SitePage/blocks/blockIdentity/blockIdentity'
import { blockLogos } from '../components/organisms/SitePage/blocks/blockLogos/blockLogos'
import { blockPubSubscribe } from '../components/organisms/SitePage/blocks/blockPubSubscribe/blockPubSubscribe'
import { blockSpacer } from '../components/organisms/SitePage/blocks/blockSpacer/blockSpacer'
import { blockType } from '../components/organisms/SitePage/blocks/blockType/blockType'
import { pageTemplateVertical } from '../components/organisms/SitePage/pageTemplates/pageTemplateVertical/pageTemplateVertical'
import { pageTemplateVisualIdentity1 } from '../components/organisms/SitePage/pageTemplates/pageTemplateVisualIdentity1/pageTemplateVisualIdentity1'
import { blockPubArticleBody } from './../components/organisms/SitePage/blocks/blockPubArticleBody/blockPubArticleBody';
import { blockPubArticleRelatedArticles } from './../components/organisms/SitePage/blocks/blockPubArticleRelatedArticles/blockPubArticleRelatedArticles';
import { blockPubAuthorOverview } from './../components/organisms/SitePage/blocks/blockPubAuthorOverview/blockPubAuthorOverview';
import { blockEmailCapture } from './../components/organisms/SitePage/blocks/blockEmailCapture/blockEmailCapture';
import { blockGoogleAd } from './../components/organisms/SitePage/blocks/blockGoogleAd/blockGoogleAd';
import { blockPubMediaTopStories } from './../components/organisms/SitePage/blocks/blockPubMediaTopStories/blockPubMediaTopStories';
import { blockPubLatestArticles } from './../components/organisms/SitePage/blocks/blockPubLatestArticles/blockPubLatestArticles';
import { blockPaywallArticle } from './../components/organisms/SitePage/blocks/blockPaywallArticle/blockPaywallArticle';
import { blockPubAccount } from './../components/organisms/SitePage/blocks/blockPubAccount/blockPubAccount';
import { blockPub404 } from './../components/organisms/SitePage/blocks/blockPub404/blockPub404';
import { blockNavSqueeze } from '../components/organisms/SitePage/blocks/blockNavSqueeze/blockNavSqueeze';
import { blockPubCheckout } from './../components/organisms/SitePage/blocks/blockPubCheckout/blockPubCheckout';
import { blockPubHeaderMenu } from './../components/organisms/SitePage/blocks/blockPubHeaderMenu/blockPubHeaderMenu';
import { blockPubHomeHero } from './../components/organisms/SitePage/blocks/blockPubHomeHero/blockPubHomeHero';
import { blockPubHomeTopStories } from './../components/organisms/SitePage/blocks/blockPubHomeTopStories/blockPubHomeTopStories';
import { blockPubPayments } from './../components/organisms/SitePage/blocks/blockPubPayments/blockPubPayments';
import { blockPubArticlesBySection } from './../components/organisms/SitePage/blocks/blockPubArticlesBySection/blockPubArticlesBySection';
import { blockPubSectionRelatedArticles } from './../components/organisms/SitePage/blocks/blockPubSectionRelatedArticles/blockPubSectionRelatedArticles';
import { blockPubSectionMain } from './../components/organisms/SitePage/blocks/blockPubSectionMain/blockPubSectionMain';
import { blockPubSignIn } from './../components/organisms/SitePage/blocks/blockPubSignIn/blockPubSignIn';
import { blockPubSectionTopStories } from './../components/organisms/SitePage/blocks/blockPubSectionTopStories/blockPubSectionTopStories';
import { blockPubTagRelatedArticles } from './../components/organisms/SitePage/blocks/blockPubTagRelatedArticles/blockPubTagRelatedArticles';
import { blockPubTagHeader } from './../components/organisms/SitePage/blocks/blockPubTagHeader/blockPubTagHeader';
import { blockThankYou } from './../components/organisms/SitePage/blocks/blockThankYou/blockThankYou';
import { blockWisiwig } from './../components/organisms/SitePage/blocks/blockWisiwig/blockWisiwig';
import { SiteConfigProps } from "./typescript-utils";

export const DEFAULT_EDIT_MODE_STATE = false
export const editModeIntervalTime = 1000 * 60

/////////////////////////////////////////
///////////// WEBSITES //////////////////
/////////////////////////////////////////

export const pageTemplateObjectListForWebsites = {
}

export const blockObjectListForWebsites = {
  divider: blockDivider,
  spacer: blockSpacer,
}

export const websiteConfig: SiteConfigProps = {
  pageTemplateObjectList: pageTemplateObjectListForWebsites,
  blockObjectList: blockObjectListForWebsites,
  app: 'website',
  toolbarConfig: {
    showEdit: true,
    showDrag: true,
    showDelete: true,
    showDrafted: true,
    showStarred: true,
    showCreate: true,
    showName: true,
  },
}

/////////////////////////////////////////
///////////// IDENTITY //////////////////
/////////////////////////////////////////


export const pageTemplateObjectListForIdentity = {
  pageTemplate_VisualIdentity1: pageTemplateVisualIdentity1,
}

export const blockObjectListForIdentity = {
  blockButtons,
  blockDivider,
  blockSpacer,
  blockIdentity,
  blockLogos,
  blockColors,
  blockType,
  blockFooterSho
}

export const visualIdentityConfig: SiteConfigProps = {
  pageTemplateObjectList: pageTemplateObjectListForIdentity,
  blockObjectList: blockObjectListForIdentity,
  app: 'identity',
  toolbarConfig: {
    showEdit: true,
    showDrag: false,
    showDelete: false,
    showDrafted: false,
    showStarred: false,
    showCreate: false,
    showName: true,
  },
}

/////////////////////////////////////////
///////////// PUBLICATION ///////////////
/////////////////////////////////////////

export const pageTemplateObjectListForPublications = {
  pageTemplateVertical,
}

export const blockObjectListForPublications = {
  blockPubArticleHeader,
  blockPubArticleBody,
  blockPubArticleRelatedArticles,
  blockPubAuthorOverview,
  blockPubAuthorRelatedArticles,
  blockEmailCapture,
  blockFaq,
  blockPubFooter,
  blockGoogleAd,
  blockPubMediaTopStories,
  blockNavSqueeze,
  blockPaywallArticle,
  blockPubAccount,
  blockPubCheckout,
  blockPubHeaderMenu,
  blockPubHomeHero,
  blockPubLatestArticles,
  blockPubPayments,
  blockPubSignIn,
  blockPubSubscribe,
  blockPubHomeTopStories,
  blockPubArticlesBySection,
  blockPubSectionMain,
  blockPubSectionRelatedArticles,
  blockPubSectionTopStories,
  blockPubTagRelatedArticles,
  blockPubTagHeader,
  blockThankYou,
  blockWisiwig,
  blockPub404
}


export const publicationConfig: SiteConfigProps = {
  pageTemplateObjectList: pageTemplateObjectListForPublications,
  blockObjectList: blockObjectListForPublications,
  app: 'publication',
  toolbarConfig: {
    showEdit: true,
    showDrag: true,
    showDelete: true,
    showDrafted: true,
    showStarred: true,
    showCreate: true,
    showName: true,
  },
}
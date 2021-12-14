import { defaultArticleAccess, defaultExternalDisplay } from '../components/organisms/SitePage/blocks/blockPubArticleHeader/blockPubArticleHeader'
import { CreateSiteInput } from '../graphql/operations'
import { CreatePageInput } from './../graphql/operations'
import { idGeneratorForAppsync } from './appsync-utils'

// TEMPLATE FOR VISUAL IDENTITY SITE
export const publicationSiteInputCreator = ({ brandId }: { brandId: string }): Omit<CreateSiteInput, 'name'> => {
  const siteId = idGeneratorForAppsync('site')
  // pages
  const pageHomeId = idGeneratorForAppsync('page')
  const pageSubscribeId = idGeneratorForAppsync('page')
  const pageSignInId = idGeneratorForAppsync('page')
  const pageCheckoutId = idGeneratorForAppsync('page')
  const pageAccountId = idGeneratorForAppsync('page')
  const pagePaymentsId = idGeneratorForAppsync('page')
  const pageThankYouId = idGeneratorForAppsync('page')
  const pageTermsId = idGeneratorForAppsync('page')
  const pagePrivacyPolicyId = idGeneratorForAppsync('page')
  const pageLatestArticlesId = idGeneratorForAppsync('page')
  const page404Id = idGeneratorForAppsync('page')
  // PageTemplates
  const mainTemplateId = idGeneratorForAppsync('pageTemplate')
  const squeezeTemplateId = idGeneratorForAppsync('pageTemplate')
  const articleTemplateId = idGeneratorForAppsync('pageTemplate')
  const authorTemplateId = idGeneratorForAppsync('pageTemplate')
  const sectionTemplateId = idGeneratorForAppsync('pageTemplate')
  const tagTemplateId = idGeneratorForAppsync('pageTemplate')
  // TemplateBLocks
  const blockPubFooterId = idGeneratorForAppsync('block')
  const blockPubHeaderMenuId = idGeneratorForAppsync('block')
  const blockEmailCaptureId = idGeneratorForAppsync('block')
  const blockNavSqueezeId = idGeneratorForAppsync('block')
  const blockPaywallArticleId = idGeneratorForAppsync('block')
  const blockPubArticleRelatedArticlesId = idGeneratorForAppsync('block')
  const blockPubAuthorRelatedArticlesId = idGeneratorForAppsync('block')
  const blockPubSectionTopStoriesId = idGeneratorForAppsync('block')
  const blockPubSectionRelatedArticlesId = idGeneratorForAppsync('block')
  const blockPubTagRelatedArticlesId = idGeneratorForAppsync('block')

  // Home Page
  const blockPubHomeHeroId = idGeneratorForAppsync('block')
  const blockPubHomeTopStoriesId = idGeneratorForAppsync('block')
  const blockGoogleAdId1 = idGeneratorForAppsync('block')
  const blockGoogleAdId2 = idGeneratorForAppsync('block')
  const blockGoogleAdId3 = idGeneratorForAppsync('block')
  const blockGoogleAdId4 = idGeneratorForAppsync('block')
  const blockPubMediaTopStoriesId = idGeneratorForAppsync('block')
  const blockPubArticlesBySectionId1 = idGeneratorForAppsync('block')
  const blockPubArticlesBySectionId2 = idGeneratorForAppsync('block')
  const blockPubArticlesBySectionId3 = idGeneratorForAppsync('block')
  // Subscribe Page
  const blockPubSubscribeId = idGeneratorForAppsync('block')
  const blockFaqId = idGeneratorForAppsync('block')
  // SignIn Page
  const blockPubSigninId = idGeneratorForAppsync('block')
  // Checkout Page
  const blockPubCheckoutId = idGeneratorForAppsync('block')
  // Account Page
  const blockPubAccountId = idGeneratorForAppsync('block')
  // Payments Page
  const blockPaymentsId = idGeneratorForAppsync('block')
  // Thank You Page
  const blockThankYouId = idGeneratorForAppsync('block')
  // Terms Page 
  const blockWisiwigId1 = idGeneratorForAppsync('block')
  // Privacy Policy Page 
  const blockWisiwigId2 = idGeneratorForAppsync('block')
  // Latest Articles Page 
  const blockPubLatestArticlesId = idGeneratorForAppsync('block')
  // Page 404 
  const blockPub404Id = idGeneratorForAppsync('block')

  return {
    brandId,
    id: siteId,
    siteCategory: 'Publication',
    createPageTemplates: [
      {
        id: mainTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockPubHeaderMenuId],
          },
          {
            slot: 'footer',
            ids: [blockEmailCaptureId, blockPubFooterId],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: blockPubHeaderMenuId,
            siteId,
            blockCategory: 'PubHeaderMenu',
            componentId: 'blockPubHeaderMenu',
            data: '{}',
          },
          {
            id: blockEmailCaptureId,
            siteId,
            blockCategory: 'EmailCapture',
            componentId: 'blockEmailCapture',
            data: '{}',
          },
          {
            id: blockPubFooterId,
            siteId,
            blockCategory: 'PubFooter',
            componentId: 'blockPubFooter',
            data: '{}',
          },
        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: 'PublicationMain',
        siteId,
      },
      {
        id: articleTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockPubHeaderMenuId],
          },
          {
            slot: 'footer',
            ids: [blockPubArticleRelatedArticlesId, blockEmailCaptureId, blockPubFooterId, blockPaywallArticleId],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: blockPubArticleRelatedArticlesId,
            siteId,
            blockCategory: 'PubArticleRelatedArticles',
            componentId: 'blockPubArticleRelatedArticles',
            data: '{}',
          },
          {
            id: blockPaywallArticleId,
            siteId,
            blockCategory: 'PaywallArticle',
            componentId: 'blockPaywallArticle',
            data: '{}',
          },

        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: 'PublicationArticle',
        siteId,
      },
      {
        id: authorTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockPubHeaderMenuId],
          },
          {
            slot: 'footer',
            ids: [blockPubAuthorRelatedArticlesId, blockEmailCaptureId, blockPubFooterId],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: blockPubAuthorRelatedArticlesId,
            siteId,
            blockCategory: 'PubAuthorRelatedArticles',
            componentId: 'blockPubAuthorRelatedArticles',
            data: '{}',
          },
        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: "PublicationAuthor",
        siteId,
      },
      {
        id: sectionTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockPubHeaderMenuId],
          },
          {
            slot: 'footer',
            ids: [blockPubSectionTopStoriesId, blockPubSectionRelatedArticlesId, blockEmailCaptureId, blockPubFooterId],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: blockPubSectionTopStoriesId,
            siteId,
            blockCategory: 'PubSectionTopStories',
            componentId: 'blockPubSectionTopStories',
            data: '{}',
          },
          {
            id: blockPubSectionRelatedArticlesId,
            siteId,
            blockCategory: 'PubSectionRelatedArticles',
            componentId: 'blockPubSectionRelatedArticles',
            data: '{}',
          },
        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: "PublicationSection",
        siteId,
      },
      {
        id: tagTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockPubHeaderMenuId],
          },
          {
            slot: 'footer',
            ids: [blockPubTagRelatedArticlesId, blockEmailCaptureId, blockPubFooterId],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: blockPubTagRelatedArticlesId,
            siteId,
            blockCategory: 'PubTagRelatedArticles',
            componentId: 'blockPubTagRelatedArticles',
            data: '{}',
          },
        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: "PublicationTag",
        siteId,
      },
      {
        id: squeezeTemplateId,
        blockVariants: [],
        blockTemplates: [
          {
            slot: 'header',
            ids: [blockNavSqueezeId],
          },
          {
            slot: 'footer',
            ids: [blockPubFooterId],
          },
        ],
        createBlockTemplates: [
          {
            id: blockNavSqueezeId,
            siteId,
            blockCategory: 'NavSqueeze',
            componentId: 'blockNavSqueeze',
            data: '{}',
          },
        ],
        componentId: 'pageTemplateVertical',
        pageTemplateCategory: 'PublicationSqueeze',
        siteId,
      },
    ],
    createPages: [
      {
        templateId: mainTemplateId,
        slug: '/',
        id: pageHomeId,
        siteId,
        pageCategory: 'PublicationHome',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [
              blockPubHomeHeroId,
              blockPubHomeTopStoriesId,
              blockGoogleAdId1,
              blockPubMediaTopStoriesId,
              blockPubArticlesBySectionId1,
              blockGoogleAdId2,
              blockPubArticlesBySectionId2,
              blockGoogleAdId3,
              blockPubArticlesBySectionId3,
              blockGoogleAdId4,
            ],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubHomeHeroId,
            pageId: pageHomeId,
            blockCategory: 'PubHomeHero',
            componentId: 'blockPubHomeHero',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockPubHomeTopStoriesId,
            pageId: pageHomeId,
            blockCategory: 'PubHomeTopStories',
            componentId: 'blockPubHomeTopStories',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockGoogleAdId1,
            pageId: pageHomeId,
            blockCategory: 'GoogleAd',
            componentId: 'blockGoogleAd',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockPubMediaTopStoriesId,
            pageId: pageHomeId,
            blockCategory: 'PubMediaTopStories',
            componentId: 'blockPubMediaTopStories',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockPubArticlesBySectionId1,
            pageId: pageHomeId,
            blockCategory: 'PubArticlesBySection',
            componentId: 'blockPubArticlesBySection',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockGoogleAdId2,
            pageId: pageHomeId,
            blockCategory: 'GoogleAd',
            componentId: 'blockGoogleAd',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockPubArticlesBySectionId2,
            pageId: pageHomeId,
            blockCategory: 'PubArticlesBySection',
            componentId: 'blockPubArticlesBySection',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockGoogleAdId3,
            pageId: pageHomeId,
            blockCategory: 'GoogleAd',
            componentId: 'blockGoogleAd',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockPubArticlesBySectionId3,
            pageId: pageHomeId,
            blockCategory: 'PubArticlesBySection',
            componentId: 'blockPubArticlesBySection',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockGoogleAdId4,
            pageId: pageHomeId,
            blockCategory: 'GoogleAd',
            componentId: 'blockGoogleAd',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/subscribe/',
        id: pageSubscribeId,
        siteId,
        pageCategory: 'PublicationSubscribe',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPubSubscribeId, blockFaqId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubSubscribeId,
            pageId: pageSubscribeId,
            blockCategory: 'PubSubscribe',
            componentId: 'blockPubSubscribe',
            data: '{}',
            externalBlockIds: [],
          },
          {
            id: blockFaqId,
            pageId: pageSubscribeId,
            blockCategory: 'Faq',
            componentId: 'blockFaq',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/sign-in/',
        id: pageSignInId,
        siteId,
        pageCategory: 'PublicationSignIn',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPubSigninId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubSigninId,
            pageId: pageSignInId,
            blockCategory: 'PubSignIn',
            componentId: 'blockPubSignIn',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/checkout/',
        id: pageCheckoutId,
        siteId,
        pageCategory: 'PublicationCheckout',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPubCheckoutId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubCheckoutId,
            pageId: pageCheckoutId,
            blockCategory: 'PubCheckout',
            componentId: 'blockPubCheckout',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/account/',
        id: pageAccountId,
        siteId,
        pageCategory: 'PublicationAccount',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPubAccountId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubAccountId,
            pageId: pageAccountId,
            blockCategory: 'PubAccount',
            componentId: 'blockPubAccount',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/payments/',
        id: pagePaymentsId,
        siteId,
        pageCategory: 'PublicationPayments',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPaymentsId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPaymentsId,
            pageId: pagePaymentsId,
            blockCategory: 'PubPayments',
            componentId: 'blockPubPayments',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: squeezeTemplateId,
        slug: '/thank-you/',
        id: pageThankYouId,
        siteId,
        pageCategory: 'PublicationThankYou',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockThankYouId],
          },
        ],
        createLocalblocks: [
          {
            id: blockThankYouId,
            pageId: pageThankYouId,
            blockCategory: 'ThankYou',
            componentId: 'blockThankYou',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: mainTemplateId,
        slug: '/terms/',
        id: pageTermsId,
        siteId,
        pageCategory: 'PublicationTerms',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockWisiwigId1],
          },
        ],
        createLocalblocks: [
          {
            id: blockWisiwigId1,
            pageId: pageTermsId,
            blockCategory: 'Wisiwig',
            componentId: 'blockWisiwig',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: mainTemplateId,
        slug: '/privacy-policy/',
        id: pagePrivacyPolicyId,
        siteId,
        pageCategory: 'PublicationPrivacyPolicy',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockWisiwigId2],
          },
        ],
        createLocalblocks: [
          {
            id: blockWisiwigId2,
            pageId: pagePrivacyPolicyId,
            blockCategory: 'Wisiwig',
            componentId: 'blockWisiwig',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: mainTemplateId,
        slug: '/latest-articles/',
        id: pageLatestArticlesId,
        siteId,
        pageCategory: 'PublicationLatestArticles',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPubLatestArticlesId],
          },
        ],
        createLocalblocks: [
          {
            id: blockPubLatestArticlesId,
            pageId: pageLatestArticlesId,
            blockCategory: 'PubLatestArticles',
            componentId: 'blockPubLatestArticles',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
      {
        templateId: mainTemplateId,
        slug: '/404/',
        id: page404Id,
        siteId,
        pageCategory: 'Publication404',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [blockPub404Id],
          },
        ],
        createLocalblocks: [
          {
            id: blockPub404Id,
            pageId: page404Id,
            blockCategory: 'Pub404',
            componentId: 'blockPub404',
            data: '{}',
            externalBlockIds: [],
          },
        ],
      },
    ],
  }
}

export const createArticleInput = ({
  siteId,
  templateId,
}: {
  siteId: string
  templateId: string
}): Omit<CreatePageInput, 'slug'> => {
  const pageId = idGeneratorForAppsync('page')
  const blockPubArticleHeaderId = idGeneratorForAppsync('block')
  const blockPubArticleBodyId = idGeneratorForAppsync('block')

  return {
    templateId,
    id: pageId,
    siteId,
    pageCategory: 'PublicationArticle',
    localBlockSlots: [
      {
        slot: 'main',
        ids: [blockPubArticleHeaderId, blockPubArticleBodyId,],
      },
    ],
    createLocalblocks: [
      {
        id: blockPubArticleHeaderId,
        pageId,
        blockCategory: 'PubArticleHeader',
        componentId: 'blockPubArticleHeader',
        data: '{}',
        externalBlockIds: [],
      },
      {
        id: blockPubArticleBodyId,
        pageId,
        blockCategory: 'PubArticleBody',
        componentId: 'blockPubArticleBody',
        data: JSON.stringify({
          articleAccess: defaultArticleAccess,
          externalDisplay: defaultExternalDisplay,
          tags: [],
          authors: [],
        }),
        externalBlockIds: [],
      },

    ],
  }
}

export const createAuthorInput = ({
  siteId,
  templateId,
}: {
  siteId: string
  templateId: string
}): Omit<CreatePageInput, 'slug'> => {
  const pageId = idGeneratorForAppsync('page')
  const blockPubAuthorOverviewId = idGeneratorForAppsync('block')

  return {
    templateId,
    id: pageId,
    siteId,
    pageCategory: 'PublicationAuthor',
    localBlockSlots: [
      {
        slot: 'main',
        ids: [blockPubAuthorOverviewId],
      },
    ],
    createLocalblocks: [
      {
        id: blockPubAuthorOverviewId,
        pageId,
        blockCategory: 'PubAuthorOverview',
        componentId: 'blockPubAuthorOverview',
        data: '{}',
        externalBlockIds: [],
      },
    ],
  }
}

export const createSectionInput = ({
  siteId,
  templateId,
}: {
  siteId: string
  templateId: string
}): Omit<CreatePageInput, 'slug'> => {
  const pageId = idGeneratorForAppsync('page')
  const blockPubSectionMainId = idGeneratorForAppsync('block')

  return {
    templateId,
    id: pageId,
    siteId,
    pageCategory: 'PublicationSection',
    localBlockSlots: [
      {
        slot: 'main',
        ids: [blockPubSectionMainId],
      },
    ],
    createLocalblocks: [
      {
        id: blockPubSectionMainId,
        pageId,
        blockCategory: 'PubSectionMain',
        componentId: 'blockPubSectionMain',
        data: '{}',
        externalBlockIds: [],
      },
    ],
  }
}

export const createTagInput = ({
  siteId,
  templateId,
}: {
  siteId: string
  templateId: string
}): Omit<CreatePageInput, 'slug'> => {
  const pageId = idGeneratorForAppsync('page')
  const blockPubTagHeaderId = idGeneratorForAppsync('block')

  return {
    templateId,
    id: pageId,
    siteId,
    pageCategory: 'PublicationTag',
    localBlockSlots: [
      {
        slot: 'main',
        ids: [blockPubTagHeaderId,],
      },
    ],
    createLocalblocks: [
      {
        id: blockPubTagHeaderId,
        pageId,
        blockCategory: 'PubTagHeader',
        componentId: 'blockPubTagHeader',
        data: '{}',
        externalBlockIds: [],
      },
    ],
  }
}

type StripPlanType = {
  description: string
  name: string
  occurence: string,
  price: number
  stripeId: string
}

export const stripePlans: Record<string, StripPlanType> = {
  digital: {
    description: '<p>Lorem Ipsum Benefits</p>',
    name: "Digital",
    price: 3.45,
    occurence: 'week',
    stripeId: "price_1JnKVYEOFZ64mhcsGgg2tmVk"
  },
  digitalPlus: {
    description: '<p>Lorem Ipsum Benefits</p>',
    name: "Digital +",
    price: 3.95,
    occurence: 'week',
    stripeId: "price_1JubIbEOFZ64mhcsJc0wUaJf"
  },
  printAndDigital: {
    description: '<p>Lorem Ipsum Benefits</p>',
    name: "Print and Digital",
    price: 4.15,
    occurence: 'week',
    stripeId: "price_1JnKUpEOFZ64mhcsG1KKSZdL"
  }
}

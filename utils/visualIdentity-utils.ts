import { CreateSiteInput } from '../graphql/operations'
import { idGeneratorForAppsync } from './appsync-utils'

// TEMPLATE FOR VISUAL IDENTITY SITE
export const visualIdentitySiteTemplate = (brandId: string): CreateSiteInput => {
  const siteId = idGeneratorForAppsync('site')
  const pageId = idGeneratorForAppsync('page')
  const templateId = idGeneratorForAppsync('pageTemplate')
  // list of block is in order
  const temp_identity_top_spacerId = idGeneratorForAppsync('block')
  const tempIdentityId = idGeneratorForAppsync('block')
  const temp_logos_top_spacerId = idGeneratorForAppsync('block')
  const temp_logos_id = idGeneratorForAppsync('block')
  const temp_logos_bottom_divider_id = idGeneratorForAppsync('block')
  const temp_colors_id = idGeneratorForAppsync('block')
  const temp_type_top_divider_id = idGeneratorForAppsync('block')
  const temp_type_id = idGeneratorForAppsync('block')
  const buttons_top_spacer_id = idGeneratorForAppsync('block')
  const buttons_1_id = idGeneratorForAppsync('block')
  const buttons_1_bottom_spacer = idGeneratorForAppsync('block')
  const footer_id = idGeneratorForAppsync('blockTemplate')

  const site: CreateSiteInput = {
    brandId,
    id: siteId,
    name: 'Visual Identity Site',
    siteCategory: 'Identity',
    createPageTemplates: [
      {
        id: templateId,
        blockVariants: [
          {
            componentId: 'blockSpacer',
            defaultVariant: 'big',
          },
          {
            componentId: 'blockDivider',
            defaultVariant: 'big',
          },
        ],
        blockTemplates: [
          {
            slot: 'footer',
            ids: [footer_id],
          },
        ], // all the blocks that will be in template
        createBlockTemplates: [
          {
            id: footer_id,
            siteId,
            blockCategory: 'FooterSho',
            componentId: 'blockFooterSho',
            data: '{}',
            isBeingEdited: false,
          },
        ],
        componentId: 'pageTemplate_VisualIdentity1',
        pageTemplateCategory: 'Identity',
        siteId,
      },
    ],
    createPages: [
      {
        templateId,
        slug: '/',
        id: pageId,
        siteId: siteId,
        pageCategory: 'Identity',
        localBlockSlots: [
          {
            slot: 'main',
            ids: [
              temp_identity_top_spacerId,
              tempIdentityId,
              temp_logos_top_spacerId,
              temp_logos_id,
              temp_logos_bottom_divider_id,
              temp_colors_id,
              temp_type_top_divider_id,
              temp_type_id,
              buttons_top_spacer_id,
              buttons_1_id,
              buttons_1_bottom_spacer,
            ],
          },
        ],
        createLocalblocks: [
          {
            id: temp_identity_top_spacerId,
            pageId,
            blockCategory: 'Spacer',
            componentId: 'blockSpacer',
            data: '{}',
            externalBlockIds: [],
            variant: 'small',
            isBeingEdited: false,
          },
          {
            id: tempIdentityId,
            pageId,
            blockCategory: 'Identity',
            componentId: 'blockIdentity',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: temp_logos_top_spacerId,
            pageId,
            blockCategory: 'Divider',
            componentId: 'blockDivider',
            variant: 'big',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: temp_logos_id,
            pageId,
            blockCategory: 'Identity',
            componentId: 'blockLogos',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: temp_logos_bottom_divider_id,
            pageId,
            blockCategory: 'Divider',
            componentId: 'blockDivider',
            data: '{}',
            externalBlockIds: [],
            variant: 'big',
            isBeingEdited: false,
          },
          {
            id: temp_colors_id,
            pageId,
            blockCategory: 'Identity',
            componentId: 'blockColors',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: temp_type_top_divider_id,
            pageId,
            blockCategory: 'Divider',
            componentId: 'blockDivider',
            data: '{}',
            externalBlockIds: [],
            variant: 'big',
            isBeingEdited: false,
          },
          {
            id: temp_type_id,
            pageId,
            blockCategory: 'Identity',
            componentId: 'blockType',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: buttons_top_spacer_id,
            pageId,
            blockCategory: 'Spacer',
            componentId: 'blockSpacer',
            data: '{}',
            externalBlockIds: [],
            variant: 'small',
            isBeingEdited: false,
          },
          {
            id: buttons_1_id,
            pageId,
            blockCategory: 'Identity',
            componentId: 'blockButtons',
            data: '{}',
            externalBlockIds: [],
            isBeingEdited: false,
          },
          {
            id: buttons_1_bottom_spacer,
            pageId,
            blockCategory: 'Spacer',
            componentId: 'blockSpacer',
            data: '{}',
            externalBlockIds: [],
            variant: 'small',
            isBeingEdited: false,
          },
        ],
      },
    ],
  }
  return site
}

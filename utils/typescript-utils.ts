import { config } from '@sho-ai-org/pattern-library'
import Stitches from '@stitches/react'
// import { MutationTuple } from '@apollo/client'
import React from 'react'

import { Block, BlockCategory, BlockConnection, BlockTemplate, GetSitePageQuery, Maybe, PublishState } from '../graphql/operations'
import { UpdateBlockMutationFn } from './../graphql/operations'

export type CSS = Stitches.CSS<typeof config>
interface ScaleCategory {
  scaleCategoryId: string
  name: string
  typefaceId: string
  typefaceVariantId: string
  case: React.CSSProperties['textTransform']
  fontSize: number
  lineHeight: number
  letterSpacing: number
  spaceAfter: number
}

interface Button {
  id: string
  borderStyle: React.CSSProperties['borderStyle']
  borderWidth: number
  borderRadius: number
}

interface Logo {
  imageAssetKey: string
  clearspace: number
  backgroundColorId: string
  preferredLockup: boolean
}
interface AppIcon {
  imageAssetKey: string
  backgroundColorId: string
}

enum ColorIdProps {
  pri = 'pri',
  sec = 'sec',
  lin = 'lin',
  ale = 'ale',
  suc = 'suc',
  war = 'war',
  gs1 = 'gs1',
  gs2 = 'gs2',
  gs3 = 'gs3',
  gs4 = 'gs4',
  gs5 = 'gs5',
  gs6 = 'gs6',
  gs7 = 'gs7',
  gs8 = 'gs8',
  gs9 = 'gs9',
  gs10 = 'gs10',
  gs11 = 'gs11',
  gs12 = 'gs12',
  w1 = 'w1',
  w2 = 'w2',
  w3 = 'w3',
  w4 = 'w4',
  w5 = 'w5',
  w6 = 'w6',
  w7 = 'w7',
  w8 = 'w8',
  w9 = 'w9',
  w10 = 'w10',
  w11 = 'w11',
  w12 = 'w12',
  b1 = 'b1',
  b2 = 'b2',
  b3 = 'b3',
  b4 = 'b4',
  b5 = 'b5',
  b6 = 'b6',
  b7 = 'b7',
  b8 = 'b8',
  b9 = 'b9',
  b10 = 'b10',
  b11 = 'b11',
  b12 = 'b12',
  btnPriBg = 'btnPriBg',
  btnPriBo = 'btnPriBo',
  btnSecBg = 'btnSecBg',
  btnSecBo = 'btnSecBo',
  btnTerBg = 'btnTerBg',
  btnTerBo = 'btnTerBo',
  btnGhoBg = 'btnGhoBg',
  btnGhoBo = 'btnGhoBo',
}
export interface Theme {
  schemaVersion: number
  colors: {
    colorId: ColorIdProps
    name: string
    palette: 'primary' | 'secondary' | 'grayscale' | 'black' | 'white' | 'button'
    value: {
      r: number
      g: number
      b: number
      a: number
    }
  }[]
  typefaces: {
    [key: string]: {
      typefaceId: string
      fontFamily: string
      category: 'sans-serif' | 'serif'
      variants: {
        typefaceVariantId: string
        typefaceId: string
        fontWeight: string
        fontStyle: 'normal' | 'italic'
        format: 'woff2'
        fontURL: string
      }[]
    }
  }
  scaleCategories: {
    h1: ScaleCategory
    h2: ScaleCategory
    h3: ScaleCategory
    h4: ScaleCategory
    h5: ScaleCategory
    h6: ScaleCategory
    subtitle1: ScaleCategory
    subtitle2: ScaleCategory
    body1: ScaleCategory
    body2: ScaleCategory
    button: ScaleCategory
    caption: ScaleCategory
    overline: ScaleCategory
    blockquote: ScaleCategory
  }
  button: {
    primary: Button
    secondary: Button
    tertiary: Button
    fab: Button
  }
  logos: {
    name: string
    id: string
    favicon: {
      imageAssetKey: string
    }
    appicon: AppIcon
    logomark: Logo
    horizontallockup: Logo
    verticallockup: Logo
  }[]
}

export enum ScaleCategories {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  overline = 'overline',
  blockquote = 'blockquote',
}

export interface SiteConfigProps {
  pageTemplateObjectList: {
    [key: string]: PageTemplateProps
  }
  blockObjectList: {
    [key: string]: BlockProps | BlockTemplateProps
  }
  app: 'identity' | 'website' | 'publication'
  toolbarConfig: {
    showEdit: boolean
    showDrag: boolean
    showDelete: boolean
    showDrafted: boolean
    showStarred: boolean
    showCreate: boolean
    showName: boolean
  }
}
export interface PageTemplateProps {
  id: string
  name: string
  viewComponent: React.FunctionComponent<any>
  editComponent: React.FunctionComponent<any>
  IconComponent: React.ReactNode
  description: string
  blockVariationToolbarDefaultOption: string
  blockVariationToolbarOptions: { label: string; value: string }[]
  tags: string[]
}

type ListPageAddditionalBlocks = NonNullable<
  GetSitePageQuery['getSite']['getPageBySlug']
>['items'][0]['listPageAdditionalBlocks']
type ListPageLocalBlocks = NonNullable<GetSitePageQuery['getSite']['getPageBySlug']>['items'][0]['listPageLocalBlocks']
export interface BlockViewProps<DataProps = Record<string, any>> {
  theme: Theme
  variant: any
  data: DataProps
  block: Block
  brandId: string
  brandStyleId: string
  listPageAdditionalBlocks: ListPageAddditionalBlocks
  listExternalBlocks: Maybe<BlockConnection>
  listPageLocalBlocks: ListPageLocalBlocks
  pageId: string
  siteId: string
}
export interface BlockEditProps<DataProps = Record<string, any>> extends BlockViewProps<DataProps> {
  onUpdateBlock: UpdateBlockMutationFn
}
export interface BlockProps<DataProps = Record<string, any>> {
  id: string
  name: string
  viewComponent: React.FunctionComponent<BlockViewProps<DataProps>>
  editComponent: React.FunctionComponent<BlockEditProps<DataProps>>
  IconComponent: React.ReactNode
  description: string
  blockVariationToolbarDefaultOption: string
  blockVariationToolbarOptions: { label: string; value: string }[]
  tags: string[]
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlockTemplateViewProps<DataProps = Record<string, any>> {
  theme: Theme
  variant: any
  data: DataProps
  block: BlockTemplate
  brandId: string
  brandStyleId: string
  listPageAdditionalBlocks: ListPageAddditionalBlocks
  listPageLocalBlocks: ListPageLocalBlocks
  pageId: string
  siteId: string
}
export interface BlockTemplateEditProps<DataProps = Record<string, any>> extends BlockTemplateViewProps<DataProps> {
  onUpdateBlock: UpdateBlockMutationFn
}
export interface BlockTemplateProps<DataProps = Record<string, any>> {
  id: string
  name: string
  viewComponent: React.FunctionComponent<BlockTemplateViewProps<DataProps>>
  editComponent: React.FunctionComponent<BlockTemplateEditProps<DataProps>>
  IconComponent: React.ReactNode
  description: string
  blockVariationToolbarDefaultOption: string
  blockVariationToolbarOptions: { label: string; value: string }[]
  tags: string[]
}

export type ValidationFunction<Input> = (input: Input) => string



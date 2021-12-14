import { v4 as uuidv4 } from 'uuid'

export const schemaNamespaces = {
  workspace: 'work',
  brand: 'brand',
  workspaceUser: 'user',
  brandStyle: 'bstyle',
  asset: 'asset',
  site: 'site',
  page: 'page',
  menuItem: 'mitem',
  block: 'block',
  pageTemplate: 'paget',
  blockTemplate: 'blockt'
}

type nameSpaceProp = keyof typeof schemaNamespaces
export const idGeneratorForAppsync = (namespace: nameSpaceProp):string => `${schemaNamespaces[namespace]}_${uuidv4()}`

import { GetSitePageQuery, UpdateBlockInput, UpdateBlockMutationFn } from '../graphql/operations'

export const onSwitchChangeUpdateDB = ({
  componentId,
  data,
  onUpdateBlock,
  field,
  isChecked,
}: {
  componentId: string
  data: GetSitePageQuery
  onUpdateBlock: UpdateBlockMutationFn
  isChecked: boolean
  field: string
}): void => {
  const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
    block => block.componentId === componentId,
  )
  const dataBlock = componentInDB?.data
    ? { ...JSON.parse(componentInDB.data), [field]: isChecked }
    : { [field]: isChecked }
  if (componentInDB) {
    onUpdateBlock({
      variables: {
        updateBlockInput: {
          id: componentInDB?.id,
          data: JSON.stringify(dataBlock),
        },
      },
    })
  }
}

export const onUpdateFieldDB =
  ({
    componentId,
    data,
    onUpdateBlock,
    callback,
    field,
  }: {
    componentId: string
    data: GetSitePageQuery
    onUpdateBlock: UpdateBlockMutationFn
    callback?: (value: string) => unknown
    field: string
  }) =>
    (value: string): void => {
      const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
        block => block.componentId === componentId,
      )
      const dataBlock = componentInDB?.data ? { ...JSON.parse(componentInDB.data), [field]: value } : { [field]: value }
      if (componentInDB) {
        onUpdateBlock({
          variables: {
            updateBlockInput: {
              id: componentInDB?.id,
              data: JSON.stringify(dataBlock),
            },
          },
        })
        if (callback) {
          callback(value)
        }
      } else {
        console.error('component in data page cannot be found:data, componentId ', data, componentId)
      }
    }

export const onUpdateFieldsDB =
  ({
    componentId,
    data,
    onUpdateBlock,
    callback,
    objectToInsert,
  }: {
    componentId: string
    data: GetSitePageQuery
    onUpdateBlock: UpdateBlockMutationFn
    callback?: () => unknown
    objectToInsert: Record<string, unknown>
  }) => {
    const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
      block => block.componentId === componentId,
    )
    const dataBlock = componentInDB?.data ? { ...JSON.parse(componentInDB.data), ...objectToInsert } : objectToInsert
    console.log("new dataBlock'", dataBlock)
    if (componentInDB) {
      onUpdateBlock({
        variables: {
          updateBlockInput: {
            id: componentInDB?.id,
            data: JSON.stringify(dataBlock),
          },
        },
      })
      if (callback) {
        callback()
      }
    } else {
      console.error('component in data page cannot be found:data, componentId ', data, componentId)
    }
  }

export const onUpdateWisiwigdDB =
  ({
    componentId,
    data,
    onUpdateBlock,
    callback,
  }: {
    componentId: string
    data: GetSitePageQuery
    onUpdateBlock: UpdateBlockMutationFn
    callback?: (value: string) => unknown
  }) =>
    // (value: string): void => {
    (value: any): any => { // TODO: fix this so that it is typed
      const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
        block => block.componentId === componentId,
      )
      const valueStringified = JSON.stringify(value)

      const newDataObjectForArticleBody = JSON.stringify({ content: valueStringified })

      if (componentInDB) {
        onUpdateBlock({
          variables: {
            updateBlockInput: {
              id: componentInDB?.id,
              data: newDataObjectForArticleBody
            },
          },
        })
        if (callback) {
          callback(value)
        }
      } else {
        console.error('component in data page cannot be found:data, componentId ', data, componentId)
      }
    }

export const onUpdateDropdownDB =
  ({
    componentId,
    componentIdOfExternalBlock,
    data,
    onUpdateBlock,
    callback,
    field,
    updateExternalBlocks = false,
  }: {
    componentId: string
    componentIdOfExternalBlock?: string
    callback?: (value: string) => unknown
    data: GetSitePageQuery
    field: string
    onUpdateBlock: UpdateBlockMutationFn
    updateExternalBlocks?: boolean
  }) =>
    ({ key }: { key: string }): void => {
      const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
        block => block.componentId === componentId,
      )
      const dataBlock = componentInDB?.data ? { ...JSON.parse(componentInDB.data), [field]: key } : { [field]: key }
      if (componentInDB) {
        const updateBlockInput: UpdateBlockInput = {
          id: componentInDB?.id,
          data: JSON.stringify(dataBlock),
        }

        // DATA NEEDED TO UPDATE external Blocks 
        if (updateExternalBlocks) {

          if (!componentInDB.externalBlockIds?.length) {
            updateBlockInput.externalBlockIds = [key]
          } else {

            // remove all external blocks that have the same componentId as the block I'm adding 
            // and add all the selected values 
            if (componentInDB?.listExternalBlocks?.items?.length) {
              updateBlockInput.externalBlockIds = componentInDB?.listExternalBlocks?.items?.reduce((tot: UpdateBlockInput['externalBlockIds'], externalBlock): UpdateBlockInput['externalBlockIds'] => {
                if (tot) {
                  return externalBlock.componentId === componentIdOfExternalBlock ? tot : [...tot, externalBlock.id]
                } else {
                  return externalBlock.componentId === componentIdOfExternalBlock ? tot : [externalBlock.id]
                }
              }, [key])
            }
          }
        }

        onUpdateBlock({
          variables: {
            updateBlockInput
          },
        })

        if (callback) {
          callback(key)
        }
      } else {
        console.error('component in data page cannot be found:data, componentId ', data, componentId)
      }
    }



export const onUpdateToggleGroupDB =
  ({
    componentId,
    componentIdOfExternalBlock,
    data,
    onUpdateBlock,
    callback,
    field,
    updateExternalBlocks = false,
  }: {
    componentId: string
    componentIdOfExternalBlock?: string
    data: GetSitePageQuery
    onUpdateBlock: UpdateBlockMutationFn
    callback?: (value: string[]) => unknown
    updateExternalBlocks?: boolean
    field: string
  }) =>
    (values: string[]): void => {
      const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
        block => block.componentId === componentId,
      )
      const dataBlock = componentInDB?.data ? { ...JSON.parse(componentInDB.data), [field]: values } : { [field]: values }
      if (componentInDB) {

        const updateBlockInput: UpdateBlockInput = {
          id: componentInDB?.id,
          data: JSON.stringify(dataBlock),
        }

        // DATA NEEDED TO UPDATE external Blocks 
        if (updateExternalBlocks) {
          if (!componentInDB.externalBlockIds?.length) {
            updateBlockInput.externalBlockIds = values
          } else {
            // remove all external blocks that have the same componentId as the block I'm adding 
            // and add all the selected values 
            if (componentInDB?.listExternalBlocks?.items?.length) {
              updateBlockInput.externalBlockIds = componentInDB?.listExternalBlocks?.items?.reduce((tot: UpdateBlockInput['externalBlockIds'], externalBlock): UpdateBlockInput['externalBlockIds'] => {
                if (tot) {
                  return externalBlock.componentId === componentIdOfExternalBlock ? tot : [...tot, externalBlock.id]
                } else {
                  return externalBlock.componentId === componentIdOfExternalBlock ? tot : [externalBlock.id]
                }
              }, values)
            }
          }
        }

        onUpdateBlock({
          variables: {
            updateBlockInput
          },
        })

        if (callback) {
          callback(values)
        }
      } else {
        console.error('component in data page cannot be found:data, componentId ', data, componentId)
      }

    }


export const onTextfieldBlurUpdateDB =
  ({
    componentId,
    data,
    onUpdateBlock,
  }: {
    componentId: string
    data: GetSitePageQuery
    onUpdateBlock: UpdateBlockMutationFn
  }) =>
    e => {
      const {
        target: { name, value },
      } = e
      console.log('is blurred', name, value)
      let newData = {}
      const componentInDB = data?.getSite?.getPageBySlug?.items[0]?.listPageLocalBlocks?.items.find(
        block => block.componentId === componentId,
      )

      const componentInDBDataStringified = componentInDB?.data
      let componentInDBDataParsed

      // If data in DB is null, then create object
      if (!componentInDBDataStringified) {
        newData[name] = value.trim()
      } else {
        componentInDBDataParsed = JSON.parse(componentInDBDataStringified)
        newData = {
          ...componentInDBDataParsed,
          [name]: value.trim(),
        }
      }

      if (
        componentInDB &&
        // if no data for field, field value will be "", but in DB, it will be null.
        // we don't want to update the block if that is the case
        !(value.trim() === '' && componentInDBDataParsed?.[name] === null) &&
        value.trim() !== componentInDBDataParsed?.[name]
      ) {
        onUpdateBlock({
          variables: {
            updateBlockInput: {
              id: componentInDB?.id,
              data: JSON.stringify(newData),
            },
          },
        })
      }
    }

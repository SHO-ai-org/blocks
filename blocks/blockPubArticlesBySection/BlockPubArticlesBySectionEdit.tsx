import { DropdownExposed, useFormData } from '@sho-ai-org/pattern-library'
import { FC } from 'react'

import { BlockEditProps } from '../../../../../utils/typescript-utils'
import { BlockPubArticlesBySectionProps, PubArticlesBySectionCustomDataProps } from './blockPubArticlesBySection'

const BlockPubArticlesBySectionEdit: FC<
  BlockEditProps<{
    ShapeOfBlockDataInDB: BlockPubArticlesBySectionProps
    ShapeOfCustomPropsDerivedFromPageData: PubArticlesBySectionCustomDataProps
  }>
> = props => {
  const { formData, updateFormDataValue } = useFormData({
    section: props?.data?.section,
  })
  const { sectionDropdownList } = props.blockCustomData

  const onUpdateDropdown = ({ key }: { key: string }): void => {
    if (!props.onUpdateBlock) {
      console.error('onUpdateBlock function is not passed to edit mode block')
    } else {
      props.onUpdateBlock({
        variables: {
          updateBlockInput: {
            id: props.block.id,
            data: JSON.stringify({
              section: key,
            }),
          },
        },
      })
    }
  }

  return (
    <div>
      {sectionDropdownList && (
        <DropdownExposed
          LabelText="Choose Section"
          value={formData.section}
          onValueChange={(event, value) => {
            onUpdateDropdown(value)
            updateFormDataValue({ name: 'section', value })
          }}
          options={sectionDropdownList}
        />
      )}
    </div>
  )
}

export default BlockPubArticlesBySectionEdit

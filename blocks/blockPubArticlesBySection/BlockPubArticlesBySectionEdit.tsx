import { FC } from 'react'
import { BlockEditProps } from '../../../../../utils/typescript-utils'
import { useFormData, DropdownExposed } from '@sho-ai-org/pattern-library'
import { BlockPubArticlesBySectionProps } from './blockPubArticlesBySection'

const BlockPubArticlesBySectionEdit: FC<BlockEditProps<BlockPubArticlesBySectionProps>> = props => {
  const { formData, updateFormDataValue } = useFormData({
    section: props?.data?.section,
  })

  const onUpdateDropdown = ({ key }: { key: string }): void => {
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

  const sectionDropdownList = props.listPageAdditionalBlocks?.items?.reduce(
    (tot: { key: string; label: string }[], block) => {
      if (block.blockCategory === 'PubSectionMain') {
        const label = block.data ? JSON.parse(block.data)?.name : null
        if (label) {
          return [
            ...tot,
            {
              key: block.id,
              label,
            },
          ]
        } else {
          return tot
        }
      } else return tot
    },
    [],
  )

  return (
    <div>
      {sectionDropdownList && (
        <DropdownExposed
          LabelText="Choose Section"
          value={formData.section}
          onValueChange={value => {
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

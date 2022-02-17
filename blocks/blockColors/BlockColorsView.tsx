import { FC, useContext } from 'react'
import { Text } from '@sho-ai-org/pattern-library'
import * as C from './BlockColorComp'
import { convertThemeColor2Rgba } from '../../../../../utils/color-utils'
import copy from 'copy-to-clipboard'
import { snackbarContext } from '../../../../../utils/context-utils'
import MaterialIcon from '../../../MaterialIcon'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockColorsView: FC<BlockViewProps> = ({ theme }) => {
  const openSnackbar = useContext(snackbarContext)

  return (
    <C.Container
      cssColorCardsContainer={{
        '& > div': {
          width: '48%',
          '@bp2': {
            width: '30%',
          },
          '@bp4': {
            width: 'auto',
          },
        },
      }}
      uiCallback={({ id }) => {
        const colorValue = convertThemeColor2Rgba(theme?.colors?.find(color => color.colorId === id))
        return (
          <C.ColorTextContainer
            key={id}
            css={{ cursor: 'pointer' }}
            onClick={() => {
              copy(colorValue)
              if (openSnackbar) {
                openSnackbar({ message: `color "${colorValue}" copied to clipboard` })
              }
            }}>
            <Text variant="caption" css={{ pr: '$2' }}>
              {colorValue}
            </Text>
            <div>
              <MaterialIcon style={{ fontSize: '15px' }} iconName="content_copy" />
            </div>
          </C.ColorTextContainer>
        )
      }}
    />
  )
}

export default BlockColorsView

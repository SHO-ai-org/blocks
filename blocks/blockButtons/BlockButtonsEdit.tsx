import { useContext, useCallback, FC } from 'react'
import useIsMounted from 'ismounted'
import { Text, styled, Box, Button } from '@sho-ai-org/pattern-library'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as C from './BlockButtonsComp'
// import { useMutation } from '@apollo/client'
// utils
// import mutationUpdateBrandStyle from '../../../../../graphql/mutationUpdateBrandStyle'
import { snackbarContext } from '../../../../../utils/context-utils'
// ui
import Slider from '../../../Slider'
import ToggleGroup from '../../../ToggleGroup'
import { BlockEditProps } from '../../../../../utils/typescript-utils'
import { useUpdateBrandStyleMutation } from '../../../../../graphql/operations'

const TabsRoot = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
})

const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $gs3`,
  '& > *:first-child': {
    pl: 0,
  },
  '& > *:last-child': {
    pr: 0,
  },
})

const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  flex: 1,
  px: '$2',
  py: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  color: '$acc',
  userSelect: 'none',
  '&:hover': { color: '$acc_D' },
  '&[data-state="active"]': {
    color: '$gs12',
    borderBottom: '1px solid $gs12',
  },
})

const BorderUnit = ({ value, isActive }) => (
  <Box
    css={{
      width: '34px',
      mx: '$1',
      borderBottom: `1px ${value} ${isActive ? '$acc' : '$gs12'}`,
    }}
  />
)

const ColorUnit = ({ value }) => (
  <Box
    css={{
      border: '1px solid $gs1',
      backgroundColor: `$${value}`,
      borderRadius: '50%',
      width: '16px',
      height: '16px',
    }}
  />
)

const BlockButtonsEdit: FC<BlockEditProps> = ({ theme, brandStyleId }) => {
  const isMounted = useIsMounted()
  const openSnackbar = useContext(snackbarContext)
  const [onUpdateBrandStyle] = useUpdateBrandStyleMutation({
    onCompleted: () => {
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `button updated` })
      }
    },
    onError: error => {
      if (isMounted && openSnackbar) {
        console.log('error updating brand style', error)
        openSnackbar({ message: `Failed to update button` })
      }
    },
  })

  const onSliderChange = useCallback(
    ({ id, property }) =>
      value => {
        console.log('in onSliderChange with value', value)
        if (theme.button[id][property] !== value) {
          const newTheme = theme
          theme.button[id][property] = value
          onUpdateBrandStyle({
            variables: {
              brandStyle: {
                id: brandStyleId,
                properties: JSON.stringify(newTheme),
              },
            },
          })
        }
      },
    [brandStyleId, onUpdateBrandStyle, theme],
  )

  const onToggleGroupSelect = useCallback(
    ({ id, property }) =>
      value => {
        if (theme.button[id][property] !== value) {
          const newTheme = theme
          theme.button[id][property] = value
          onUpdateBrandStyle({
            variables: {
              brandStyle: {
                id: brandStyleId,
                properties: JSON.stringify(newTheme),
              },
            },
          })
        }
      },
    [theme, brandStyleId, onUpdateBrandStyle],
  )

  return (
    <C.Container>
      <Box>
        <Box
          css={{
            display: 'flex',
            flexFlow: 'row wrap',
            // gap: '$4',
            justifyContent: 'space-between',
            '& > *': {
              flex: '0 1 100%',
            },
            '@bp2': {
              flexWrap: 'nowrap',
              '& > *': {
                flex: '1 1 30%',
                maxWidth: '30%',
              },
            },
          }}>
          {C.options.map(({ id, title }) => (
            <div key={id}>
              <Text css={{ mb: '$4' }}>{title}</Text>
              <Button variant={id} label="Example" />

              <TabsRoot defaultValue="border" css={{ mt: '$4' }}>
                <TabsList>
                  <TabsTrigger value="border">
                    <Text>Border</Text>
                  </TabsTrigger>
                  <TabsTrigger value="color">
                    <Text>Color</Text>
                  </TabsTrigger>
                </TabsList>
                <TabsPrimitive.Content value="border">
                  {/* Radius */}
                  {/* <Slider
                    title="Radius TL"
                    initialValue={theme?.button[id].borderRadiusTL || 0}
                    onSliderChange={onSliderChange({ id, property: 'borderRadiusTL' })}
                    max={64}
                  />
                  <Slider
                    title="Radius TR"
                    initialValue={theme?.button[id].borderRadiusTR || 0}
                    onSliderChange={onSliderChange({ id, property: 'borderRadiusTR' })}
                    max={64}
                  />
                  <Slider
                    title="Radius BL"
                    initialValue={theme?.button[id].borderRadiusBL || 0}
                    onSliderChange={onSliderChange({ id, property: 'borderRadiusBL' })}
                    max={64}
                  />
                  <Slider
                    title="Radius BR"
                    initialValue={theme?.button[id].borderRadiusBR || 0}
                    onSliderChange={onSliderChange({ id, property: 'borderRadiusBR' })}
                    max={64}
                  /> */}
                  {/* Width */}
                  <Slider
                    title="Width"
                    initialValue={theme?.button[id].borderWidth || 0}
                    onSliderChange={onSliderChange({ id, property: 'borderWidth' })}
                    max={4}
                  />
                  {/* Style */}
                  <ToggleGroup
                    defaultValue="unset"
                    onValueChange={onToggleGroupSelect({ id, property: 'borderStyle' })}
                    title="style"
                    items={[
                      {
                        value: 'solid',
                        UI: BorderUnit,
                      },
                      {
                        value: 'dashed',
                        UI: BorderUnit,
                      },
                      {
                        value: 'dotted',
                        UI: BorderUnit,
                      },
                    ]}
                  />
                </TabsPrimitive.Content>
                <TabsPrimitive.Content value="color">
                  {/* <ToggleGroup
                    defaultValue={theme.button[id].typeColorId || 'unset'}
                    title="Type"
                    onValueChange={onToggleGroupSelect({ id, property: 'typeColorId' })}
                    items={colorList}
                  />
                  <ToggleGroup
                    defaultValue={theme.button[id].backgroundColorId || 'unset'}
                    title="Background"
                    onValueChange={onToggleGroupSelect({ id, property: 'backgroundColorId' })}
                    items={colorList}
                  />
                  <ToggleGroup
                    defaultValue={theme.button[id].borderColorId || 'unset'}
                    title="Border"
                    onValueChange={onToggleGroupSelect({ id, property: 'borderColorId' })}
                    items={colorList}
                  /> */}
                </TabsPrimitive.Content>
              </TabsRoot>
            </div>
          ))}
        </Box>
      </Box>
    </C.Container>
  )
}

const colorList = [
  { value: 'none', UI: ColorUnit },
  { value: 'pri', UI: ColorUnit },
  { value: 'sec', UI: ColorUnit },
  { value: 'ter', UI: ColorUnit },
  { value: 'acc', UI: ColorUnit },
  { value: 'lin', UI: ColorUnit },
  { value: 'ale', UI: ColorUnit },
  { value: 'suc', UI: ColorUnit },
  { value: 'gs1', UI: ColorUnit },
  { value: 'gs2', UI: ColorUnit },
  { value: 'gs3', UI: ColorUnit },
  { value: 'gs4', UI: ColorUnit },
  { value: 'gs5', UI: ColorUnit },
  { value: 'gs6', UI: ColorUnit },
]

export default BlockButtonsEdit

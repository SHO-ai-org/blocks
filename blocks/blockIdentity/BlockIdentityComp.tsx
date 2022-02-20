import { Box, Flex, Gutter, Text, Theme } from '@sho-ai-org/pattern-library'
import { FC, useContext, useMemo } from 'react'

import { downloadZip, getAssetUrlFromAssetObject } from '../../../../../utils/asset-utils'
import { snackbarContext } from '../../../../../utils/context-utils'
import MaterialIcon from '../../../MaterialIcon'

export const BlockIdentityComp: FC<{ theme: Theme }> = ({ theme }) => {
  const openSnackbar = useContext(snackbarContext)
  const showLogoButton = useMemo(
    () =>
      theme?.logos?.[0]?.logomark?.imageAssetKey ||
      theme?.logos?.[0]?.horizontallockup?.imageAssetKey ||
      theme?.logos?.[0]?.verticallockup?.imageAssetKey,
    [theme],
  )

  const showFontsButton = useMemo(() => !!theme?.typefaces && Object.keys(theme.typefaces)?.length, [theme])

  const onDownloadContent = ({ fonts = false, logos = false }: { fonts: boolean; logos: boolean }) => {
    const func = async () => {
      const contentToDownload: { url: string; name: string }[] = []
      // ADD FONTS TO DOWNLOAD
      if (logos) {
        if (theme?.logos?.[0]?.logomark?.imageAssetKey) {
          const src = await getAssetUrlFromAssetObject(
            { public: false, key: theme.logos?.[0]?.logomark.imageAssetKey },
            true,
          )
          contentToDownload.push({
            url: src,
            name: 'Logomark',
          })
        }
        if (theme?.logos?.[0]?.horizontallockup?.imageAssetKey) {
          const src = await getAssetUrlFromAssetObject(
            { public: false, key: theme.logos?.[0]?.horizontallockup.imageAssetKey },
            true,
          )
          contentToDownload.push({
            url: src,
            name: 'Horizontal_Logo',
          })
        }
        if (theme?.logos?.[0]?.verticallockup?.imageAssetKey) {
          const src = await getAssetUrlFromAssetObject(
            { public: false, key: theme.logos?.[0]?.verticallockup.imageAssetKey },
            true,
          )
          contentToDownload.push({
            url: src,
            name: 'Vertical_Logo',
          })
        }
      }
      // ADD LOGOS TO DOWNLOAD
      if (fonts) {
        if (theme?.typefaces && Object.keys(theme.typefaces)?.length) {
          Object.keys(theme.typefaces).forEach(typefaceID => {
            const typeface = theme.typefaces[typefaceID]
            typeface.variants.forEach(variant => {
              contentToDownload.push({
                url: variant.fontURL,
                name: `${typeface.fontFamily}_${variant.fontWeight}_${variant.fontStyle}`,
              })
              // download(variant.fontURL, typeface.fontFamily)
            })
          })
        }
      }

      let fileName = 'toolkit'
      if (fonts && !logos) {
        fileName = 'fonts'
      } else if (!fonts && logos) {
        fileName = 'logos'
      }

      if (!contentToDownload.length) {
        if (openSnackbar) {
          openSnackbar({ message: `No ${fileName} available for download` })
        }
      } else {
        downloadZip({
          urls: contentToDownload,
          fileName,
          callbackSuccess: () => {
            if (openSnackbar) {
              openSnackbar({ message: `Your download is successfull` })
            }
          },
          callbackFailure: () => {
            if (openSnackbar) {
              openSnackbar({ message: `Sorry, an error occured while downloading your files` })
            }
          },
        })
      }
    }
    func()
  }

  return (
    <Gutter>
      {/* {children} */}
      <Text variant="h2" allowNaturalMb={true}>
        Visual Identity
      </Text>
      <Text variant="body1" allowNaturalMb={true}>
        It all starts here. Use this guide as a high-level overview of how your brand comes to life.
      </Text>
      <Flex css={{ gap: '$4', flexWrap: 'wrap', pt: '$5', '@bp1': { flexWrap: 'nowrap' } }}>
        {[
          {
            title: 'toolkit',
            callback: () => {
              if (
                (theme?.logos?.[0]?.logomark?.imageAssetKey ||
                  theme?.logos?.[0]?.horizontallockup?.imageAssetKey ||
                  theme?.logos?.[0]?.verticallockup?.imageAssetKey) &&
                openSnackbar
              ) {
                openSnackbar({ message: 'Preparing download of toolkit', autoHideDuration: 8000 })
              }
              onDownloadContent({ fonts: true, logos: true })
            },
            isShown: showLogoButton || showFontsButton,
          },
          {
            title: 'logos',
            callback: () => {
              if (openSnackbar) {
                openSnackbar({ message: 'Preparing download of logos', autoHideDuration: 8000 })
              }
              onDownloadContent({ fonts: false, logos: true })
            },
            isShown: showLogoButton,
          },
          {
            title: 'fonts',
            callback: () => {
              if (openSnackbar) {
                openSnackbar({ message: 'Preparing download of fonts', autoHideDuration: 8000 })
              }
              onDownloadContent({ fonts: true, logos: false })
            },
            isShown: showFontsButton,
          },
          // {
          //   title: 'images',
          //   callback: () => {},
          // },
        ].map(({ title, callback, isShown }) =>
          isShown ? (
            <Box
              key={title}
              onClick={callback}
              css={{
                cursor: 'pointer',
                backgroundColor: '$gs1',
                color: '$acc',
                p: '$5',
                flex: '1 1 calc(50% - 8px)',
                '&:hover': {
                  color: '$acc_D',
                },
                '@bp1': {
                  flex: '1 1 auto',
                },
              }}>
              <Text variant="h6">{title}</Text>
              <Box css={{ textAlign: 'right' }}>
                <MaterialIcon style={{ fontSize: '20px' }} iconName="file_download" />
              </Box>
            </Box>
          ) : null,
        )}
      </Flex>
    </Gutter>
  )
}

export default BlockIdentityComp

export const defaultWiziwigValue = [
  { type: 'h2', children: [{ text: 'Identity' }] },
  { type: 'body1', children: [{ text: '' }] },
  {
    type: 'body1',
    children: [
      {
        text: 'It all starts here. Use this guide as a high-level overview of how your brand comes to life.',
      },
    ],
  },
]

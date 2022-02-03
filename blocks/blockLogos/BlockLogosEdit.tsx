import { useCallback, useContext, useState, FC } from 'react'
import useIsMounted from 'ismounted'
import * as SHO from '@sho-ai-org/pattern-library'
import Image from 'next/image'
import placeholderLogo from '../../../../../../public/images/placeholderLogo.png'
import { useDropzone } from 'react-dropzone'
import { snackbarContext } from '../../../../../utils/context-utils'
import { idGeneratorForAppsync } from '../../../../../utils/appsync-utils'
import ImageSHO from '../../../Image'
import MaterialIcon from '../../../MaterialIcon'
import {
  useCreateAssetMutation,
  useDeleteAssetMutation,
  useUpdateAssetMutation,
  useUpdateBrandStyleMutation,
} from '../../../../../graphql/operations'
import { BlockEditProps } from '../../../../../utils/typescript-utils'

const BlockLogosEdit: FC<BlockEditProps> = props => {
  const openSnackbar = useContext(snackbarContext)
  const isMounted = useIsMounted()
  const [uploadInProgress, setUploadInProgress] = useState(false)
  const [logoTypeToUpload, setLogoTypeToUpload] = useState<string | null>(null)

  const { theme, brandStyleId, brandId } = props

  const onMouseOverLogo = useCallback(
    themeId => () => {
      if (!uploadInProgress) {
        setLogoTypeToUpload(themeId)
      }
    },
    [uploadInProgress],
  )

  const [onUpdateBrandStyle] = useUpdateBrandStyleMutation({
    onCompleted: () => {
      setUploadInProgress(false)
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `logomark updated` })
      }
    },
    onError: error => {
      setUploadInProgress(false)
      console.error('failed updating asset', error)
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Failed updating logomark` })
      }
    },
  })

  const [onUpdateAsset] = useUpdateAssetMutation({
    onCompleted: data => {
      if (logoTypeToUpload) {
        const newTheme = {
          ...theme,
          logos: {
            ...theme.logos,
            [logoTypeToUpload]: {
              imageAssetKey: data.updateAsset.key, // or createAsset.key?
              clearspace: '0',
              backgroundColorId: 'gs6',
            },
          },
        }
        onUpdateBrandStyle({
          variables: {
            brandStyle: {
              id: brandStyleId,
              properties: JSON.stringify(newTheme),
            },
          },
        })
      } else {
        console.error('could not update asset as logoTypeToUpload is unknown')
      }
    },
    onError: error => {
      setUploadInProgress(false)
      console.error('failed updating asset', error)
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Failed updating logomark` })
      }
    },
  })

  const [onCreateAsset] = useCreateAssetMutation({
    onError: error => {
      setUploadInProgress(false)
      console.error('failed uploading asset', error)
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Failed updating logomark` })
      }
    },
  })
  const [onDeleteAsset] = useDeleteAssetMutation({
    onError: error => {
      setUploadInProgress(false)
      console.error('failed deleting asset', error)
    },
  })

  const onDropAccepted = async acceptedFiles => {
    setUploadInProgress(true)
    if (openSnackbar) {
      openSnackbar({ message: `Updating logomark...`, autoHideDuration: 10 * 1000 })
    }

    const file = acceptedFiles[0]
    const assetId = idGeneratorForAppsync('asset')
    const fileNameSplit = file.name.split('.')
    const extension = fileNameSplit[fileNameSplit.length - 1]
    const newAssetVariables = {
      brandId,
      contentType: file.type,
      extension,
      id: assetId,
      public: false,
    }
    try {
      const { data } = await onCreateAsset({ variables: { asset: newAssetVariables } })
      const asset = data?.createAsset?.asset
      const signedUrl = data?.createAsset?.signedUrl
      try {
        if (signedUrl && asset?.id) {
          const res = await fetch(signedUrl, {
            method: 'PUT',
            body: file,
          })
          console.log('res is', res)
          if (res?.status === 403) {
            console.error('error', res)
            setUploadInProgress(false)
            if (openSnackbar) {
              openSnackbar({ message: `Failed uploading logo` })
            }
            onDeleteAsset({ variables: { id: asset.id } })
          } else {
            // ...asset,
            const variablesUpdateAsset = {
              asset: {
                id: asset.id,
                uploaded: true,
              },
            }
            onUpdateAsset({ variables: variablesUpdateAsset })
          }
        }
      } catch (error) {
        console.error('error!', error)
      }
    } catch (error) {
      setUploadInProgress(false)
      if (isMounted && openSnackbar) {
        openSnackbar({ message: `Failed uploading logo` })
      }
      console.error('error!', error)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: onDropAccepted,
    onFileDialogCancel: () => {
      setUploadInProgress(false)
    },
    maxFiles: 1,
    maxSize: 5 * 1000000,
    disabled: uploadInProgress,
  })

  return (
    <SHO.Gutter>
      <SHO.Text variant="h2" allowNaturalMb="true">
        Logos
      </SHO.Text>
      <SHO.Text allowNaturalMb="true" variant="body1">
        Logos act as the visual aspects that form part of the overall brand.
      </SHO.Text>
      <SHO.Flex css={{ gap: '$4', flexWrap: 'wrap', '@bp1': { flexWrap: 'nowrap' } }}>
        {[
          {
            title: 'horizontal',
            themeId: 'horizontallockup',
            logoKey: theme?.logos?.[0]?.horizontallockup?.imageAssetKey,
          },
          {
            title: 'mark',
            themeId: 'logomark',
            logoKey: theme?.logos?.[0]?.logomark?.imageAssetKey,
          },
          {
            title: 'vertical',
            themeId: 'verticallockup',
            logoKey: theme?.logos?.[0]?.verticallockup?.imageAssetKey,
          },
        ].map(({ title, logoKey, themeId }) => (
          <SHO.Box
            key={title}
            css={{
              backgroundColor: '$pri',
              color: '$gs1',
              flex: '1 1 100%',
              display: 'flex',
              flexFlow: 'column',
              '&:hover': {
                ligther: ['$gs1'],
              },
              '@bp1': {
                flex: '1 auto auto',
              },
            }}>
            {logoKey ? (
              <ImageSHO
                asset={{
                  public: false,
                  key: logoKey,
                }}
                layout="fill"
                objectFit="contain"
                fillContainerCss={{
                  height: '235px',
                  m: '$12',
                }}
              />
            ) : (
              <SHO.Box
                css={{
                  position: 'relative',
                  height: '235px',
                  m: '$12',
                }}>
                <Image src={placeholderLogo} alt="Client Logo" layout="fill" objectFit="contain" />
              </SHO.Box>
            )}
            <div
              {...getRootProps({ className: `dropzone_input_${title}` })}
              style={{ cursor: uploadInProgress ? 'default' : 'pointer', flex: '1' }}
              onMouseOver={onMouseOverLogo(themeId)}>
              <input
                {...getInputProps()}
                onMouseDown={() => {
                  setUploadInProgress(false)
                }}
              />
              <SHO.Flex
                as="div"
                data-intercom-target={title}
                css={{
                  backgroundColor: '$acc',
                  p: '$4',
                  alignItems: 'center',
                  height: '100%',
                  '*': {
                    color: '$gs1_75',
                  },
                  '&:hover': {
                    '*': {
                      color: '$gs1',
                    },
                  },
                  scrollMarginTop: '60px',
                }}
                justify="between">
                {isDragActive ? (
                  <SHO.Text variant="h6">upload {title}</SHO.Text>
                ) : (
                  <SHO.Text variant="h6">upload {title}</SHO.Text>
                )}
                <MaterialIcon style={{ fontSize: '20px' }} iconName="file_upload" />
              </SHO.Flex>
            </div>
          </SHO.Box>
        ))}
      </SHO.Flex>
    </SHO.Gutter>
  )
}

export default BlockLogosEdit

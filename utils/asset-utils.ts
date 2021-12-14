import JSZip from 'jszip'
import JSZipUtils from 'jszip-utils'
import saveAs from './saveAs'
import { Auth } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid'

// https://codesource.io/how-to-download-file-in-javascript/
export const download = (assetUrl: string, name: string): void => {
  const anchor = document.createElement('a')
  anchor.setAttribute('id', `download_${uuidv4()}`)
  anchor.href = assetUrl
  anchor.download = name

  // console.log('anchor is', anchor)
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

interface DownloadZipProps {
  urls: { name?: string; url: string }[],
  fileName: string,
  callbackSuccess?: () => unknown,
  callbackFailure?: () => unknown
}

export const downloadZip = ({
  urls, fileName, callbackSuccess, callbackFailure
}: DownloadZipProps): void => {
  if (urls && urls.length) {
    const zip = new JSZip()
    let count = 0
    const zipFilename = `${fileName}.zip`
    urls.forEach(async function ({ name, url }) {
      const urlArr = url.split('/')
      let filename = urlArr[urlArr.length - 1]
      const extensionWithQueryString = filename.split('.')[1]
      const extension = extensionWithQueryString.split('?')[0]
      if (name) {
        filename = `${name}.${extension}`
      }
      try {
        const file = await JSZipUtils.getBinaryContent(url)
        zip.file(filename, file, { binary: true })
        count++
        if (count === urls.length) {
          zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, zipFilename)
            if (callbackSuccess) {
              callbackSuccess()
            }
          })
        }
      } catch (err) {
        console.log(err)
        if (callbackFailure) {
          callbackFailure()
        }
      }
    })
  } else {
    console.log(`No content to download for ${fileName}`)
  }
}

export const getAssetUrlFromAssetObject = async (asset, isForDownload = false) => {
  const user = await Auth.currentSession()
  const jwt = user.getIdToken().getJwtToken()
  const baseUrl = asset.public ? process.env.NEXT_PUBLIC_PUBLIC_ASSET_PATH : process.env.NEXT_PUBLIC_PRIVATE_ASSET_PATH
  let src = `https://${baseUrl}/${asset.key}${asset.public ? '' : `?jwt=${jwt}`}`
  if (isForDownload) {
    src += '&download=true'
  }
  return src
}

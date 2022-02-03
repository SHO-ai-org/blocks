import * as SHO from '@sho-ai-org/pattern-library'
import ImageNext from 'next/image'
import placeholderLogo from '../../../../../../public/images/placeholderLogo.png'
import ImageSHO from '../../../Image'
import { getAssetUrlFromAssetObject, download } from '../../../../../utils/asset-utils'
import MaterialIcon from '../../../MaterialIcon'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockLogosView: FC<BlockViewProps> = ({ theme }) => (
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
          logoKey: theme?.logos?.[0]?.horizontallockup?.imageAssetKey,
        },
        {
          title: 'mark',
          logoKey: theme?.logos?.[0]?.logomark?.imageAssetKey,
        },
        {
          title: 'vertical',
          logoKey: theme?.logos?.[0]?.verticallockup?.imageAssetKey,
        },
      ].map(({ title, logoKey }) => {
        const asset = {
          public: false,
          key: logoKey,
        }

        return (
          <SHO.Box
            key={title}
            css={{
              backgroundColor: '$pri',
              color: '$gs1',
              flex: '1 1 100%',
              '&:hover': {
                ligther: ['$gs1'],
              },
              '@bp1': {
                flex: '1 auto auto',
              },
            }}>
            {logoKey ? (
              <ImageSHO
                asset={asset}
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
                <ImageNext src={placeholderLogo} alt="Client Logo" layout="fill" objectFit="contain" />
              </SHO.Box>
            )}
            <SHO.Flex
              as="div"
              css={{
                backgroundColor: '$gs12',
                p: '$4',
                alignItems: 'center',
                cursor: logoKey ? 'pointer' : 'default',
                '*': {
                  color: '$gs1_75',
                },
                '&:hover': {
                  '*': {
                    color: logoKey ? '$gs1' : 'nothing', // TODO: need to figure out to write that properly
                  },
                },
              }}
              justify="between"
              onClick={async () => {
                if (logoKey) {
                  const src = await getAssetUrlFromAssetObject(asset, true)
                  download(src, title)
                }
              }}>
              <SHO.Text variant="h6">{title}</SHO.Text>
              {logoKey && <MaterialIcon style={{ fontSize: '20px' }} iconName="file_download" />}
            </SHO.Flex>
          </SHO.Box>
        )
      })}
    </SHO.Flex>
  </SHO.Gutter>
)

export default BlockLogosView

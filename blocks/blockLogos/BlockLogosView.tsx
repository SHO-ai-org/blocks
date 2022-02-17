import { Text, Gutter, Box, Flex } from '@sho-ai-org/pattern-library'
import ImageNext from 'next/image'
import placeholderLogo from '../../../../../../public/images/placeholderLogo.png'
import ImageSHO from '../../../Image'
import { getAssetUrlFromAssetObject, download } from '../../../../../utils/asset-utils'
import MaterialIcon from '../../../MaterialIcon'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'

const BlockLogosView: FC<BlockViewProps> = ({ theme }) => (
  <Gutter>
    <Text variant="h2" allowNaturalMb="true">
      Logos
    </Text>
    <Text allowNaturalMb="true" variant="body1">
      Logos act as the visual aspects that form part of the overall brand.
    </Text>
    <Flex css={{ gap: '$4', flexWrap: 'wrap', '@bp1': { flexWrap: 'nowrap' } }}>
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
          <Box
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
              <Box
                css={{
                  position: 'relative',
                  height: '235px',
                  m: '$12',
                }}>
                <ImageNext src={placeholderLogo} alt="Client Logo" layout="fill" objectFit="contain" />
              </Box>
            )}
            <Flex
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
              <Text variant="h6">{title}</Text>
              {logoKey && <MaterialIcon style={{ fontSize: '20px' }} iconName="file_download" />}
            </Flex>
          </Box>
        )
      })}
    </Flex>
  </Gutter>
)

export default BlockLogosView

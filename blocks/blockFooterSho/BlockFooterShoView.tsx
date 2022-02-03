import * as SHO from '@sho-ai-org/pattern-library'
import { FC } from 'react'
import { BlockViewProps } from '../../../../../utils/typescript-utils'
import placeholderLogo from '../../../../../../public/images/placeholderLogo.png'
import LinkContainer from '../../../LinkContainer'
import Image from 'next/image'
import ImageSho from '../../../Image'

const BlockFooterShoView: FC<BlockViewProps> = ({ theme }) => (
  <SHO.Box
    as="footer"
    css={{
      color: '$gs1',
      backgroundColor: '$pri',
      paddingTop: '$12',
    }}>
    <SHO.Gutter>
      <SHO.Flex
        css={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          pb: '$15',
          margin: '0 auto',
          maxWidth: '1240px',
        }}>
        {theme?.logos?.[0]?.logomark?.imageAssetKey ? (
          <div className="container">
            <ImageSho
              asset={{
                public: false,
                key: theme?.logos?.[0]?.logomark?.imageAssetKey,
              }}
              alt="logo"
              layout="fill"
              customLayout={true}
              fillContainerCss={{
                height: '35px',
                mr: '$4',
              }}
            />
          </div>
        ) : (
          <div>
            <Image src={placeholderLogo} layout="intrinsic" height={35} width={131} quality={100} alt="logo" />
          </div>
        )}
        <div>
          <LinkContainer variant="caption" color="secondary" css={{ mb: '$1', display: 'block' }}>
            <a href="https://our.sho.ai/terms" rel="external">
              Terms
            </a>
          </LinkContainer>
          <LinkContainer variant="caption" color="secondary" css={{ mb: '$1', display: 'block' }}>
            <a href="https://our.sho.ai/privacy" rel="external">
              Privacy
            </a>
          </LinkContainer>
          <SHO.Text variant="caption" css={{ marginBottom: '$1' }}>
            version 0.0.1
          </SHO.Text>
          <SHO.Text variant="caption">© 2017 – 2020 SHO.ai</SHO.Text>
        </div>
      </SHO.Flex>
    </SHO.Gutter>
  </SHO.Box>
)

export default BlockFooterShoView

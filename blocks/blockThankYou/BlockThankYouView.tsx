import { Box } from '@sho-ai-org/pattern-library'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'

import { BlockViewProps } from '../../../../../utils/typescript-utils'
import Image from '../../../Image'
import { BlockPubArticleHeaderProps } from '../blockPubArticleHeader/blockPubArticleHeader'

type HeroArticleData = {
  title: string | undefined
  src: string
}

const BlockThankYouView: FC<BlockViewProps> = props => {
  const { status, data: session } = useSession()
  const subscriber = session?.user

  const topStoryArticles = props?.listPageAdditionalBlocks?.items
    ?.reduce((tot: HeroArticleData[], block): HeroArticleData[] => {
      if (block.blockCategory === 'PubArticleHeader' && block.data) {
        const data = JSON.parse(block.data) as BlockPubArticleHeaderProps
        if (data?.externalDisplay === 'topStory' && data.image) {
          return [
            ...tot,
            {
              title: data.title,
              src: data.image,
            },
          ]
        } else return tot
      } else return tot
    }, [])
    ?.slice(0, 5)

  return (
    <div className="single-layout">
      <div className="single-layout-row w-row">
        {!!topStoryArticles?.length && (
          <div className="single-layout-col left ali-background-brand overflow-hidden w-col w-col-4">
            <div className="collection-list-wrapper-2 w-dyn-list">
              <div role="list" className="collection-list-2 w-dyn-items">
                {topStoryArticles.map(el => (
                  <div role="listitem" className="collection-item-5 w-dyn-item" key={el.src}>
                    <a className="link-block-4 w-inline-block">
                      <Box
                        css={{
                          width: '100%',
                          '& > div': {
                            paddingBottom: '60%',
                            width: '100%',
                            height: '100%',
                          },
                        }}>
                        <Image
                          className="fullscreen-image"
                          alt={el.title}
                          layout="fill"
                          objectFit="cover"
                          asset={{
                            public: true,
                            key: el.src,
                          }}
                        />
                      </Box>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={`single-layout-col right w-col w-col-${topStoryArticles?.length ? 8 : 12}`}>
          <div className="single-layout-right">
            <div className="single-layout-right-content center-align">
              <h2 className="center-align">Thank you for Subscribing</h2>
              <p className="subtitle1-brand">A confirmation has been sent to your email address.</p>
              <div className="div-block-25 sue-background-brand border-radius">
                <p className="no-margin">{subscriber?.email}</p>
              </div>
              <div className="_20px"></div>
              <Link href={'/'}>
                <a className="button-primary-brand button-brand wide-btn large w-button">Continue Reading</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockThankYouView

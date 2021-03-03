import React from 'react'
import { useRecoilValue } from 'recoil'
import { contentStore } from '@stores/index'
import Button from '@components/Button'
import { useRouter } from 'next/router'
import Image from 'next/Image'
import dayjs from 'dayjs'
import { useEffect } from 'react'

const ContentPage: React.FC = () => {
    const content = useRecoilValue(contentStore)
    const { title, abstract, published_date, section, url } = content
    const router = useRouter()

    return (
        <div>
            <div className="flex">
                <div className="w-1/12">
                    <Button type="text" onClick={() => router.back()}>
                        <img src="/assets/icons/back_icon.svg" />
                    </Button>
                </div>
                <div className="px-45 w-11/12">
                    <div className="uppercase text-sm text-black-50 font-bold">{section}</div>
                    <div className="text-3xl font-bold">{title}</div>
                    <div className="italic mt-1 text-xl">{abstract}</div>
                    <div className="flex">
                        <div className="my-6 font-bold">
                            {dayjs(published_date).format('DD MMM YYYY hh:mm A')}
                        </div>
                        <div></div>
                    </div>
                    <div>
                        {content?.media[0]?.['media-metadata'][2].url ? (
                            <img
                                src={content.media[0]?.['media-metadata'][2].url}
                                className="w-full object-cover h-96"
                            />
                        ) : (
                            <Image
                                src="/assets/icons/empty-image.png"
                                alt="me"
                                width="64"
                                height="64"
                            />
                        )}
                    </div>
                    <div>
                        <Button
                            className="uppercase mt-7"
                            type="primary"
                            onClick={() => window.open(url)}>
                            Read more
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPage

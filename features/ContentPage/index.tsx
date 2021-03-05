import React from 'react'
import { useRecoilValue } from 'recoil'
import { contentStore } from '@stores/index'
import Button from '@components/Button'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

const ContentPage: React.FC = () => {
    const content = useRecoilValue(contentStore)
    const {
        title,
        abstract,
        published_date,
        section,
        url,
        pub_date,
        section_name,
        snippet,
        web_url,
        headline
    } = content
    const router = useRouter()

    const image = content?.multimedia
        ? `https://static01.nyt.com/${content?.multimedia[0].url}`
        : content?.media
        ? content.media[0]?.['media-metadata']
            ? content.media[0]?.['media-metadata'][2].url
            : ''
        : ''

    return (
        <>
            <div className="flex flex-wrap sm:justify-center xs:justify-center pb-10">
                <div className="md:w-1/12 w-full">
                    <Button type="text" onClick={() => router.back()}>
                        <img src="/assets/icons/back_icon.svg" />
                    </Button>
                </div>
                <div className="px-45 w-11/12 sm:mt-4 xs:mt-4">
                    <div className="uppercase text-sm text-black-50 font-bold">
                        {section || section_name}
                    </div>
                    <div className="md:text-3xl text-xl font-bold">{title || headline?.main}</div>
                    <div className="italic mt-1 md:text-xl text-default">{abstract}</div>
                    <div className="flex">
                        <div className="my-6 font-bold">
                            <span className="md:text-lg text-sm">
                                {dayjs(published_date || pub_date).format('DD MMM YYYY hh:mm A')}
                            </span>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        {image ? (
                            <img
                                src={image}
                                className="w-full object-cover h-96"
                                role="content-banner-image"
                            />
                        ) : (
                            <img
                                src="/assets/icons/empty-image.png"
                                alt="me"
                                width="64"
                                height="64"
                                role="content-banner-empty-image"
                            />
                        )}
                    </div>
                    <div>
                        <Button
                            className="uppercase mt-7"
                            type="primary"
                            onClick={() => window.open(url || web_url)}>
                            Read more
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentPage

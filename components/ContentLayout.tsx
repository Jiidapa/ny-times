import React from 'react'
import { calculateDay } from '@utils/index'
import { useSetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { contentSelector } from '@stores/index'
import { Result } from '@interfaces/index'

export interface LayoutType {
    name: string
    value: ContentType
}

export interface ContentType {
    value: Result[]
}

const Layout: React.FC<LayoutType> = ({ name, value }: LayoutType) => {
    const router = useRouter()
    const SetContent = useSetRecoilState(contentSelector)

    const handleOnClickContent = (value: Result) => {
        SetContent(value)
        router.push(`/content/${value.id}`)
    }

    const layout1 = (value: any): any => {
        const component = (
            <div>
                <button className="text-left" onClick={() => handleOnClickContent(value[0])}>
                    <div className="flex flex-wrap">
                        <div className="md:w-3/5 md:pr-4">
                            {value[0]?.media[0]?.['media-metadata'][2].url ? (
                                <img
                                    src={value[0]?.media[0]?.['media-metadata'][2].url}
                                    width="100%"
                                    loading="lazy"
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/assets/icons/empty-image.png"
                                        alt="me"
                                        width="64"
                                        height="64"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="md:w-2/5 sm:mt-4">
                            <div className="font-bold md:text-lg text-default">
                                {value[0]?.title}
                            </div>
                            <div className="md:text-sm text-xxs mt-2">{value[0]?.abstract}</div>
                            <div className="text-black-50 md:text-sm text-xxs mt-2">
                                {calculateDay(value[0]?.updated)}
                            </div>
                        </div>
                    </div>
                </button>

                <div className="flex flex-wrap mt-4">
                    <div className="md:w-1/2">
                        <button
                            className="text-left"
                            onClick={() => handleOnClickContent(value[1])}>
                            <div className="font-bold md:text-lg text-default">
                                {value[1]?.title}
                            </div>
                            <div className="md:text-sm text-xxs mt-2">{value[1]?.abstract}</div>
                            <div className="text-black-50 md:text-sm text-xxs mt-2">
                                {value[1] && calculateDay(value[1]?.updated)}
                            </div>
                        </button>
                    </div>

                    <div className="md:w-1/2 sm:mt-4">
                        <button
                            className="text-left"
                            onClick={() => handleOnClickContent(value[2])}>
                            <div className="font-bold md:text-lg text-default">
                                {value[2]?.title}
                            </div>
                            <div className="md:text-sm text-xxs mt-2">{value[2]?.abstract}</div>
                            <div className="text-black-50 md:text-sm text-xxs mt-2">
                                {value[2] && calculateDay(value[2]?.updated)}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const selectLayout = (data: ContentType): any => {
        const result = layout1(data)
        return result
    }

    return (
        <div className="mb-20 sm:mt-4 xs:mt-4">
            {typeof window === 'undefined' ? (
                ''
            ) : (
                <div>
                    <div className="border-b border-black-50 font-bold md:text-2xl text-md mb-6">
                        {name}
                    </div>
                    {selectLayout(value)}
                </div>
            )}
        </div>
    )
}

export default Layout

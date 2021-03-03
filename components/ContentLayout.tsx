import React from 'react'
import { calcualteDay } from '@utils/index'
import Image from 'next/image'
export interface LayoutType {
    data: DataType
}

export interface DataType {
    name: string
    value: any[]
}

const Layout: React.FC<LayoutType> = ({ data }: LayoutType) => {
    const layout1 = (value: any): any => {
        console.log('value ', value)
        const component = (
            <div>
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
                                <Image
                                    src="/assets/icons/empty-image.png"
                                    alt="me"
                                    width="64"
                                    height="64"
                                />
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/5 sm:mt-4">
                        <div className="font-bold text-lg">{value[0]?.title}</div>
                        <div className="text-sm mt-2">{value[0]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {calcualteDay(value[0]?.updated)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="md:w-1/2">
                        <div className="font-bold text-lg">{value[1]?.title}</div>
                        <div className="text-sm mt-2">{value[1]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[1] && calcualteDay(value[1]?.updated)}
                        </div>
                    </div>
                    <div className="md:w-1/2 sm:mt-4">
                        <div className="font-bold text-lg">{value[2]?.title}</div>
                        <div className="text-sm mt-2">{value[2]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[2] && calcualteDay(value[2]?.updated)}
                        </div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout2 = (value: any): any => {
        const component = (
            <div className="flex flex-wrap">
                <div className="md:w-3/5 md:pr-8">
                    <div>
                        {value[0]?.media[0]?.['media-metadata'][2].url ? (
                            <img
                                src={value[0]?.media[0]?.['media-metadata'][2].url}
                                width="100%"
                                loading="lazy"
                                className="object-cover md:pr-5"
                            />
                        ) : (
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/icons/empty-image.png"
                                    alt="me"
                                    width="64"
                                    height="64"
                                />
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <div className="font-bold text-lg">{value[0]?.title}</div>
                        <div className="text-sm mt-2">{value[0]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[0]?.updated && calcualteDay(value[0]?.updated)}
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <div className="sm:mt-4 xs:mt-4">
                        <div className="font-bold text-lg">{value[1]?.title}</div>
                        <div className="text-sm mt-2">{value[2]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[1]?.updated && calcualteDay(value[1]?.updated)}
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-lg">{value[2]?.title}</div>
                        <div className="text-sm mt-2">{value[2]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2 mb-4">
                            {value[2]?.updated && calcualteDay(value[2]?.updated)}
                        </div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout3 = (value: any): any => {
        const component = (
            <div>
                <div className="flex flex-wrap sm:flex-col-reverse xs:flex-col-reverse">
                    <div className="md:w-2/5 md:pr-4 xs:mt-4 sm:mt-4">
                        <div className="font-bold text-lg">{value[0].title}</div>
                        <div className="text-sm mt-2">{value[0].abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[0]?.updated && calcualteDay(value[0]?.updated)}
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        {value[0]?.media[0]?.['media-metadata'][2].url ? (
                            <img
                                src={value[0]?.media[0]?.['media-metadata'][2].url}
                                width="100%"
                                loading="lazy"
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/icons/empty-image.png"
                                    alt="me"
                                    width="64"
                                    height="64"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="md:w-1/2 md:pr-2">
                        <div className="font-bold text-lg">{value[1]?.title}</div>
                        <div className="text-sm mt-2">{value[1]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[1]?.updated && calcualteDay(value[1]?.updated)}
                        </div>
                    </div>
                    <div className="md:w-1/2 sm:mt-4 md:pl-2">
                        <div className="font-bold text-lg">{value[2]?.title}</div>
                        <div className="text-sm mt-2">{value[2]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2 xs:mb-4 sm:mb-4">
                            {value[2]?.updated && calcualteDay(value[2]?.updated)}
                        </div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout4 = (value: any): any => {
        const component = (
            <div className="flex flex-wrap h-full">
                <div className="md:w-1/3 md:pr-4">
                    {value[0]?.media[0]?.['media-metadata'][2].url ? (
                        <img
                            src={value[0]?.media[0]?.['media-metadata'][2].url}
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/icons/empty-image.png"
                                alt="me"
                                width="64"
                                height="64"
                            />
                        </div>
                    )}
                </div>
                <div className="md:w-1/3 md:pr-4 xs:mt-4 sm:mt-4">
                    <div>
                        <div className="font-bold text-lg">{value[0]?.title}</div>
                        <div className="text-sm mt-2">{value[0]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[0]?.updated && calcualteDay(value[0]?.updated)}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <div className=" xs:mt-4 sm:mt-4">
                        <div className="font-bold text-lg">{value[1]?.title}</div>
                        <div className="text-sm mt-2">{value[1]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2">
                            {value[1]?.updated && calcualteDay(value[1]?.updated)}
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-lg">{value[2]?.title}</div>
                        <div className="text-sm mt-2">{value[2]?.abstract}</div>
                        <div className="text-black-50 text-sm mt-2  xs:mb-4 sm:mb-4">
                            {value[2]?.updated && calcualteDay(value[2]?.updated)}
                        </div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const random = () => {
        const min = 1
        const max = 4
        const randomResult = Math.floor(Math.random() * (max - min + 1)) + min
        return randomResult
    }

    const selectLayout = (data: any): any => {
        const randomResult = random()

        const result = selectLayoutFromRandom(randomResult, data)
        return result
    }

    const selectLayoutFromRandom = (randomResult: number, data: any) => {
        let component = <div />

        switch (randomResult) {
            case 1:
                component = layout1(data)
                break
            case 2:
                component = layout2(data)
                break
            case 3:
                component = layout3(data)
                break
            case 4:
                component = layout4(data)
                break
            default:
                component = layout1(data)
                break
        }
        return component
    }

    return (
        <div className="mb-20">
            {typeof window === 'undefined' ? (
                ''
            ) : (
                <div>
                    <div className="border-b border-black-50 font-bold text-2xl mb-6">
                        {data.name}
                    </div>
                    {selectLayout(data.value)}
                </div>
            )}
        </div>
    )
}

export default Layout

import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'next/router'
import { calcualteDay } from '@utils/index'
import SearchIcon from '../../public/assets/icons/search_icon_small.svg'
import { contentSelector } from '@stores/index'
import { useSetRecoilState } from 'recoil'
import { Content } from '@interfaces/index'
import Image from 'next/image'

const Search: React.FC<any> = ({ searchResponse, search }: any) => {
    const router = useRouter()
    const SetContent = useSetRecoilState(contentSelector)

    const handleSearch = useDebouncedCallback((value: string) => {
        router.push(`/?search=${value}`)
    }, 1000)

    const data = searchResponse?.response?.docs || []

    const handleOnClickContent = (value: Content) => {
        SetContent(value)
        const id = value?.['_id'].split('/')[3]
        router.push(`/content/${id}`)
    }

    return (
        <div>
            <>
                <div className="flex search items-center">
                    <div className="mr-1">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        defaultValue={search}
                        placeholder="Type something"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleSearch.callback(e.target.value)
                        }
                    />
                </div>
                <div className="border-b pb-6 mb-10" />
                {data.length > 0 ? (
                    <div>
                        {data.map((item: any, i: number) => (
                            <div className="" key={i}>
                                <button
                                    className="w-full text-left flex flex-wrap lg:flex-row flex-col-reverse justify-between lg:px-28 md:px-10 px-6 mt-10"
                                    onClick={() => handleOnClickContent(item)}>
                                    <div className="lg:w-3/5 w-full lg:mt-0 mt-6">
                                        <div className="uppercase md:text-sm text-xxs text-black-50 font-bold">
                                            {item.section_name}
                                        </div>
                                        <div className="font-bold md:text-xl text-default mt-1">
                                            {item.abstract}
                                        </div>
                                        <div className="md:text-sm text-xxs mt-2">
                                            {item.snippet}
                                        </div>
                                        <div className="text-black-50 md:text-sm text-xxs mt-2">
                                            {calcualteDay(item.pub_date)}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/5 w-full">
                                        <div style={{ height: '150px' }}>
                                            {item?.multimedia ? (
                                                <img
                                                    src={`https://static01.nyt.com/${item?.multimedia[0]?.url}`}
                                                    className="w-full object-cover"
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
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    ''
                )}
            </>
        </div>
    )
}

export default Search

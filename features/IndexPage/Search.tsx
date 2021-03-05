import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'next/router'
import { calculateDay } from '@utils/index'
import SearchIcon from '../../public/assets/icons/search_icon_small.svg'
import { contentSelector } from '@stores/index'
import { Content } from '@interfaces/index'
import { useSetRecoilState } from 'recoil'
import { searchSelector } from '@stores/index'
import { SearchResponse } from '@interfaces/index'

export interface Type {
    searchResponse?: SearchResponse
    search?: string
    role?: string
}

const SearchContainer: React.FC<Type> = ({ searchResponse, search, role }: Type) => {
    const router = useRouter()
    const SetContent = useSetRecoilState(contentSelector)
    const setSearch = useSetRecoilState(searchSelector)

    const handleSearch = useDebouncedCallback((value: string) => {
        router.push(`/?search=${value}`)
    }, 1000)

    const data = searchResponse?.response?.docs || []

    const handleOnClickContent = (value: Content) => {
        SetContent(value)
        const id = value?.['_id'] ? value?.['_id'].split('/')[3] : ''
        setSearch(false)
        router.push(`/content/${id}`)
    }

    return (
        <div role={role}>
            <>
                <div className="flex search items-center">
                    <div className="mr-1">
                        <SearchIcon role="search-icon" />
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
                                            {item?.headline?.main}
                                        </div>
                                        <div className="md:text-sm text-xxs mt-2">
                                            {item.snippet}
                                        </div>
                                        <div className="text-black-50 md:text-sm text-xxs mt-2">
                                            {calculateDay(item.pub_date)}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/5 w-full">
                                        <div style={{ height: '150px' }}>
                                            {item?.multimedia.length > 0 ? (
                                                <img
                                                    src={`https://static01.nyt.com/${item?.multimedia[0]?.url}`}
                                                    className="w-full object-cover"
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

export default SearchContainer

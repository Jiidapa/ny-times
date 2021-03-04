import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'next/router'
import { SearchResponse } from '@interfaces/index'

const Search: React.FC = () => {
    // console.log(props)
    const router = useRouter()
    const handleSearch = useDebouncedCallback((value: string) => {
        router.push(`/?search=${value}`)
    }, 1000)

    return (
        <div>
            <div className="flex search items-center">
                <div className="search-small-icon" />
                <input
                    type="text"
                    placeholder="Type something"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSearch.callback(e.target.value)
                    }
                />
            </div>
            <div className="border-b pb-6 mb-10" />
        </div>
    )
}

export default Search

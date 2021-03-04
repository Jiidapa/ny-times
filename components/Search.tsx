import React from 'react'
import Button from './Button'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchSelector } from '@stores/index'
import Cookies from 'next-cookies'

const SearchContianer: React.FC = () => {
    const [search, setSearch] = useRecoilState(searchSelector)

    return (
        <>
            <Button type="text" onClick={() => setSearch(!search)}>
                {search ? (
                    <div className="close-container" />
                ) : (
                    <div className="search-container" />
                )}
            </Button>
        </>
    )
}

export default SearchContianer

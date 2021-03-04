import React from 'react'
import Button from './Button'
import { useRecoilState } from 'recoil'
import { searchSelector } from '@stores/index'

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

import React from 'react'
import Button from './Button'
import { useRecoilState } from 'recoil'
import { searchSelector } from '@stores/index'
import { useRouter } from 'next/router'

const SearchContianer: React.FC = () => {
    const router = useRouter()
    const [search, setSearch] = useRecoilState(searchSelector)

    const handleOnClick = () => {
        setSearch(!search)
        search ? router.push('/') : ''
    }

    return (
        <>
            <Button type="text" onClick={handleOnClick}>
                {search ? (
                    <div className="close-container" data-testid="close-container" />
                ) : (
                    <div className="search-container" data-testid="search-container" />
                )}
            </Button>
        </>
    )
}

export default SearchContianer

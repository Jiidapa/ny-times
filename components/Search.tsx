import React from 'react'
import SearchIcon from '../public/assets/icons/search_icon.svg'
import Button from './Button'

const Search: React.FC = () => {
    return (
        <div>
            <Button type="text">
                <SearchIcon />
            </Button>
        </div>
    )
}

export default Search

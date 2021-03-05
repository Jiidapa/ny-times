import React from 'react'
import Headline from './Headline'
import { IndexType } from '@interfaces/index'
import { groupSection } from '@utils/index'
import { useRecoilValue } from 'recoil'
import { searchStore } from '@stores/search'
import SearchContainer from './Search'

import FilterByDateRange from './FilterByDateRange'

import LayoutSection from '@components/ContentLayout'

const IndexPage: React.FC<IndexType> = ({
    searchResponse,
    mostPopularResponse,
    search
}: IndexType) => {
    const groupDataBySection = groupSection(mostPopularResponse)
    const isSearch = useRecoilValue(searchStore)

    return (
        <div>
            {!isSearch ? (
                <div className="my-14">
                    <Headline />
                    <FilterByDateRange />
                    <div className="grid lg:grid-cols-2 md:gap-5 grid-cols-1">
                        {groupDataBySection.map((data: any, i: number) => (
                            <div key={i}>
                                <LayoutSection name={data.name} value={data.value} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <SearchContainer
                    searchResponse={searchResponse}
                    search={search}
                    role="search-container"
                />
            )}
        </div>
    )
}

export default IndexPage

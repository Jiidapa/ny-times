import React from 'react'
import Headline from './Headline'
import dynamic from 'next/dynamic'
import { IndexType } from '@interfaces/index'
import { groupSection } from '@utils/index'
import { useRecoilValue } from 'recoil'
import { searchStore } from '@stores/search'
import SearchContainer from './Search'

const FilterByDateRange = dynamic(() => import('./FilterByDateRange'))

const LayoutSection = dynamic(() => import('@components/ContentLayout'))

const IndexPage: React.FC<IndexType> = ({ resp }: IndexType) => {
    const groupDataBySection = groupSection(resp)
    const isSearch = useRecoilValue(searchStore)

    return (
        <div>
            {isSearch ? (
                <div className="my-14">
                    <Headline />
                    <FilterByDateRange />
                    <div className="grid lg:grid-cols-2 md:gap-5 grid-cols-1">
                        {groupDataBySection.map((data: any, i: number) => (
                            <div key={i}>
                                <LayoutSection data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <SearchContainer />
            )}
        </div>
    )
}

export default IndexPage

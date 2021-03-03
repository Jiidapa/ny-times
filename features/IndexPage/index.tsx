import React from 'react'
import Section1 from '@components/Section/Layout'
import Headline from './Headline'
import FilterByDateRange from './FilterByDateRange'

const IndexPage: React.FC = () => {
    return (
        <div className="my-14">
            <Headline />
            <FilterByDateRange />
            <Section1 />
        </div>
    )
}

export default IndexPage

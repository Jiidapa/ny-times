import React from 'react'
import Headline from './Headline'
import dynamic from 'next/dynamic'

const FilterByDateRange = dynamic(() => import('./FilterByDateRange'))

const LayoutSection = dynamic(() => import('@components/Section/Layout'))

const IndexPage: React.FC = () => {
    return (
        <div className="my-14">
            <Headline />
            <FilterByDateRange />
            <div className="grid lg:grid-cols-2 gap-5 grid-cols-1">
                {['1', '2'].map((item, i) => (
                    <div key={i}>
                        <LayoutSection />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndexPage

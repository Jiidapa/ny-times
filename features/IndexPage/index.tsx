import React from 'react'
import LayoutSection from '@components/Section/Layout'
import Headline from './Headline'
import FilterByDateRange from './FilterByDateRange'

const IndexPage: React.FC<any> = ({ props }: any) => {
    console.log(props)
    return (
        <div className="my-14">
            <Headline />
            <FilterByDateRange />
            <div className="grid grid-cols-2 gap-5">
                {props.groupData.map((data, i) => (
                    <div key={i}>
                        <div>
                            <LayoutSection data={data} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndexPage

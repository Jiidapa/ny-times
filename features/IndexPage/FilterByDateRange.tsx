import Button from '@components/Button'
import React, { useState } from 'react'
import { FilterDateRangeType } from '@interfaces/index'
import { useRouter } from 'next/router'

const buttonList: FilterDateRangeType[] = ['Today', 'This week', 'This month']

const FilterByDateRange: React.FC = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState<number>(0)

    const setFilter = (index: number, item: FilterDateRangeType) => {
        router.push(`/?filter_date=${item}`)
        setActiveTab(index)
    }

    return (
        <div className="w-100 flex mt-6 mb-10 sm:my-2.5 xs:my-2.5">
            {buttonList.map((item: FilterDateRangeType, i: number) => (
                <div key={i} className="mr-4">
                    <Button
                        className={activeTab === i ? 'font-bold' : ''}
                        type={activeTab === i ? 'rounded' : 'outline'}
                        onClick={() => setFilter(i, item)}>
                        {item}
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default FilterByDateRange

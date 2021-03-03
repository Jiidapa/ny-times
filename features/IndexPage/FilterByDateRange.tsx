import Button from '@components/Button'
import React, { useState } from 'react'

const buttonList: string[] = ['Today', 'This week', 'This month']

const FilterByDateRange: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div className="w-100 flex mt-6 mb-10 sm:my-2.5 xs:my-2.5">
            {buttonList.map((item: string, i: number) => (
                <div key={i} className="mr-4">
                    <Button
                        type={activeTab === i ? 'rounded' : 'outline'}
                        onClick={() => setActiveTab(i)}>
                        {item}
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default FilterByDateRange

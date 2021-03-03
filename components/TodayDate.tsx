import React from 'react'
import dayjs from 'dayjs'

const TodayDate: React.FC = () => {
    return (
        <div className="text-right font-bold">
            <div>{dayjs().format('dddd, MMMM DD, YYYY')}</div>
            <div>{dayjs().format('hh:mm A')}</div>
        </div>
    )
}

export default TodayDate

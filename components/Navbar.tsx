import React from 'react'
import Search from './Search'
import TodayDate from './TodayDate'

const Navbar: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="logo" />
                <div className="flex items-center">
                    <TodayDate />
                    <div className="border-r ml-4 mr-6 xs:mx-4 sm:mx-4 border-black-50 border-2 h-full" />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Navbar

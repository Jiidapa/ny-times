import React from 'react'
import Logo from '../public/assets/icons/logo.svg'
import Search from './Search'
import TodayDate from './TodayDate'

const Navbar: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between">
                <Logo />
                <div className="flex items-center">
                    <TodayDate />
                    <div className="border-r mx-3 border-black-50 border-2 h-full" />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Navbar

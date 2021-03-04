import React from 'react'
import Search from './Search'
import TodayDate from './TodayDate'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
    const router = useRouter()
    const { pathname } = router
    console.log(router.pathname)
    return (
        <div className="flex justify-between mb-14">
            <div className="logo" />
            <div className="flex items-center">
                <TodayDate />
                {pathname.includes('content') ? (
                    ''
                ) : (
                    <>
                        <div className="border-r ml-4 mr-6 xs:mx-4 sm:mx-4 border-black-50 border-2 h-full" />
                        <Search />
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar

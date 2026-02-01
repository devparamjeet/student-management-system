import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const MainOutlet = () => {
    return (
        <div className='w-full h-screen dark:bg-neutral-800 dark:text-white bg-white text-black'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainOutlet

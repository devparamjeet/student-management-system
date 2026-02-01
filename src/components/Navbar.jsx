import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-20 h-20 border-b'>
            <div className='text-3xl'>LOGO</div>
            <div className='flex gap-2'>
                <Link to="/signup" ><Button value="Signup" /></Link>
                <Link to="/login" ><Button value="Login" bg="bg-black" /></Link>
            </div>
        </nav>
    )
}

export default Navbar

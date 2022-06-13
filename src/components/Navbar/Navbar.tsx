import React from 'react'
import { useAppSelector } from '../../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from '../ThemeToggle/ThemeToggle'

import './navbar.scss'

const Navbar:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <nav className='navbar'>
            <h2 className='logo'>Cryptocurrency</h2>
            <Link to="/sing-in" className='link'>Sing In</Link>
            <Link to="/sing-up" className='link'>Sing Up</Link>
            <Link to="/coin-page" className='link'>Coin Page</Link>
            <ThemeToggle/>
        </nav>
    )
}

export default Navbar;
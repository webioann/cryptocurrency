import React from 'react'
import { useAppSelector } from '../../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from '../ThemeToggle/ThemeToggle'

import './navbar.scss'

const Navbar:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <nav className='navbar'>
            <div className='nav-item'>
                <h2 className='logo'>Cryptocurrency</h2>
            </div>
            <div className='nav-item'>
                <Link to="/sing-in" className='link'>Sing In</Link>
            </div>
            <div className='nav-item'>
                <Link to="/sing-up" className='link'>Sing Up</Link>
            </div>
            <div className='nav-item'>
                <Link to="/coin-page" className='link'>Coin Page</Link>
            </div>
            <div className='nav-item'>
                <ThemeToggle/>
            </div>
        </nav>
    )
}

export default Navbar;
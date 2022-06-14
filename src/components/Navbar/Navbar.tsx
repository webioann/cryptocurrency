import React from 'react'
import { useAppSelector } from '../../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './navbar.scss'

const Navbar:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <nav className='navbar'>
            <Link to="/" className={`logo ${color_theme}`}>Cryptocurrency</Link>

            <div className='menu'>
                <Link to="/sing-in" className={`link ${color_theme}`}>Sing In</Link>
                <Link to="/sing-up" className={`link ${color_theme}`}>Sing Up</Link>
                <Link to="/coin-page" className={`link ${color_theme}`}>Coin Page</Link>
                <ThemeToggle/>
            </div>
            
            <div className='nav-item'>
            </div>
        </nav>
    )
}

export default Navbar;
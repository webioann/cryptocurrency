import React,{ useState } from 'react'
import { useAppSelector } from '../../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import BurgerSpiner from '../BurgerSpiner/BurgerSpiner'
import './navbar.scss'

const Navbar:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)
    const [active,setActive] = useState<boolean>(false)

    const display = () => {
        setActive(!active)
    }

    return (
        <nav className='navbar'>
            <div className='logo-wrapper'>
                <Link to="/" className={`logo ${color_theme}`}>Cryptocurrency</Link>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
                <Link to="/sing-in" className={`link ${color_theme}`}>Sing In</Link>
                <Link to="/sing-up" className={`link ${color_theme}`}>Sing Up</Link>
                <Link to="/coin-page" className={`link ${color_theme}`}>Coin Page</Link>
                <ThemeToggle/>
            </div>
            <div  onClick={() => setActive(!active)}>
                <BurgerSpiner active={active}/>
            </div>
        </nav>
    )
}

export default Navbar;
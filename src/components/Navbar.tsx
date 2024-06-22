import React,{ useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Burger from './Burger'
import DropDown from './DropDown'
import LinkToNewsPage from './LinkToNewsPage'
import '../Styles/navbar.scss'

const Navbar = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [active,setActive] = useState<boolean>(false)

    return (
        <nav className={`navbar ${theme}-nav`}>
            <div className='logo-wrapper'>
                <Link to="/" className='logo'>
                    Cryptocurrency
                </Link>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
                <LinkToNewsPage/>
                <DropDown/>
                <ThemeToggle/>
            </div>
            <div  onClick={() => setActive(!active)}>
                <Burger active={active}/>
            </div>
        </nav>
    )
}

export default Navbar;

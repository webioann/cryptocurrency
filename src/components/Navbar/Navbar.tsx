import React,{ useState } from 'react'
import { useAppSelector } from '../../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import BurgerSpiner from '../BurgerSpiner/BurgerSpiner'
import './navbar.scss'

const Navbar:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [active,setActive] = useState<boolean>(false)

    return (
        <nav className={`navbar ${theme}`}>
            <div className='logo-wrapper'>
                <Link to="/" className={`logo ${theme}`}>Cryptocurrency</Link>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
                <Link to="/singin" className={`link ${theme}`}>Sing In</Link>
                <Link to="/singup" className={`link ${theme}`}>Sing Up</Link>
                <Link to="/coinpage" className={`link ${theme}`}>Coin Page</Link>
                <ThemeToggle/>
            </div>
            <div  onClick={() => setActive(!active)}>
                <BurgerSpiner active={active}/>
            </div>
        </nav>
    )
}

export default Navbar;
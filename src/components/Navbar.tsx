import React,{ useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from "react-router-dom"
import ThemeToggle from './ThemeToggle'
import BurgerSpiner from './BurgerSpiner'
import { FaRegUser } from 'react-icons/fa'

import '../CSS/navbar.scss'

const Navbar:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const [active,setActive] = useState<boolean>(false)

    return (
        <nav className={`navbar ${theme}-nav`}>
            <div className='logo-wrapper'>
                <Link to="/" className='logo'>
                    Cryptocurrency
                </Link>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
                { user ? (
                    <Link to="/account" className={`link user ${theme}-nl`}>
                        <div className='img-wrapper'>
                            {/* <img src='' alt='#'/> */}
                            <FaRegUser/>
                        </div>
                        <span className='user-name'>{user}</span>
                    </Link>
                    ) : (
                    <>
                        <Link to="/singin" className={`link ${theme}-nl`}>Sing In</Link>
                        <Link to="/singup" className={`link ${theme}-nl`}>Sing Up</Link>
                    </>
                ) }
                <ThemeToggle/>
            </div>
            <div  onClick={() => setActive(!active)}>
                <BurgerSpiner active={active}/>
            </div>
        </nav>
    )
}

export default Navbar;
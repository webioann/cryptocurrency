import React,{ useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import BurgerSpiner from './BurgerSpiner'
import SignOut from './SignOut'
import { FaRegUser } from 'react-icons/fa'
import translator from '../hooks/translator'
import { login, sign_up } from '../data/text'
import '../CSS/navbar.scss'

const Navbar:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const user_photo = useAppSelector(state => state.redux.user_photo)
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
                    <>
                        <Link to="/account" className={`account ${theme}-account`}>
                            <div className='img-wrapper'>
                                { user_photo !== null ? (<img src={user_photo} alt='user photo'/>) : <FaRegUser/> }
                            </div>
                            <span className='user-name'>{user}</span>
                        </Link>
                        <SignOut/>
                    </>
                    ) : (
                    <>
                        <Link to="/signin" className={`link ${theme}-nl`}>{translator(login)}</Link>
                        <Link to="/signup" className={`link ${theme}-nl`}>{translator(sign_up)}</Link>
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
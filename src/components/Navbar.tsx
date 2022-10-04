import React,{ useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Burger from './Burger'
import DropDown from './DropDown'
// import SignOut from '../GARBAGE/SignOut'
// import { FaRegUser } from 'react-icons/fa'
import '../CSS/navbar.scss'

const Navbar = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    // const user = useAppSelector(state => state.redux.user)
    // const user_photo = useAppSelector(state => state.redux.user_photo)
    const [active,setActive] = useState<boolean>(false)

    return (
        <nav className={`navbar ${theme}-nav`}>
            <div className='logo-wrapper'>
                <Link to="/" className='logo'>
                    Cryptocurrency
                </Link>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
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
// { user ? (
//     <>
//         <Link to="/account" className={`account ${theme}-account`} onClick={() => setActive(false)}>
//             <div className='img-wrapper'>
//                 { user_photo !== null ? (<img src={user_photo} alt='user photo'/>) : <FaRegUser/> }
                
//             </div>
//             <span className='user-name'>{user}</span>
//         </Link>
//         <SignOut/>
//     </>
//     ) : (
//     <>
//         <Link to="/signin" className={`link ${theme}-nl`} onClick={() => setActive(false)}>Login</Link>
//         <Link to="/signup" className={`link ${theme}-nl`} onClick={() => setActive(false)}>Sign Up</Link>
//     </>
// ) }

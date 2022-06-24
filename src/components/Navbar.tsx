import React,{ useState } from 'react'
import { useAppSelector, useAppDispatch } from '../Redux/store'
import { removeUser } from '../Redux/reduxSlice'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"

import ThemeToggle from './ThemeToggle'
import BurgerSpiner from './BurgerSpiner'
import { FaRegUser } from 'react-icons/fa'

import '../CSS/navbar.scss'

const Navbar:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const [active,setActive] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const User_Sign_Out = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });    
    }


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
                        <Link to="/account" className={`link user ${theme}-nl`}>
                            <div className='img-wrapper'>
                                {/* <img src='' alt='#'/> */}
                                <FaRegUser/>
                            </div>
                            <span className='user-name'>{user}</span>
                        </Link>
                        <div onClick={User_Sign_Out} className={`link ${theme}-sign-out`}>Sing Out</div>
                    </>
                    ) : (
                    <>
                        <Link to="/signin" className={`link ${theme}-nl`}>Sing In</Link>
                        <Link to="/signup" className={`link ${theme}-nl`}>Sing Up</Link>
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
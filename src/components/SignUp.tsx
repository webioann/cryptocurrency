import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import Warning from './Warning'
// === firebase ===
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../Firebase/firebase-config';
import '../CSS/sign-up.scss'

const SignUp:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [inputType,setInputType] = useState<string>('password')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const User_Sign_Up = async (event: React.FormEvent) => {
        event.preventDefault()
            createUserWithEmailAndPassword(auth, email, password)
            .then (({user}) => {
                dispatch(putUser(user.email))
                navigate("/account")
            })
        .catch((error) => {
            console.log(error)
            setWarning(true)
        })
        // create database => db/user(email)/saved_coins/watch_list
        return setDoc(doc(db, email, "saved_coins"), {
            watch_list: [],
        });
    }

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }
    const closeWarning = () => {
        setWarning(false)
    }
    
    return (
        <div className='g-page-container'>
            <div className={`sign-up-wrapper ${theme}-sign-up`}>
                <h1 className='header'>Sign Up</h1>
                <form onSubmit={User_Sign_Up}>
                    { warning ? <Warning closeWarning={closeWarning}/> : null }
                    <div className='email-box'>
                        <label>Email</label>
                        <div className='email-input-box'>
                            <input 
                                type='email' 
                                placeholder='email'
                                value={email}
                                onChange={event => setEmail(event.target.value)}/>
                            <HiOutlineMail className='input-icon'/>
                        </div>
                    </div>
                    <div className='password-box'>
                        <label>Password</label>
                        <div className='password-input-box'>
                            <input 
                                type={inputType} 
                                placeholder='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}/>
                            {inputType === 'text' 
                                ? <GoEye className='input-icon' onClick={showPassword}/> 
                                : <GoEyeClosed className='input-icon' onClick={showPassword}/>
                            }
                        </div>
                    </div>
                    <button className='btn'>Sign Up</button>
                </form>
                <div className='question'>
                    <p className='q-text'>Already have an account ?</p>
                    <Link to='/signin' className='q-link'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}
export default SignUp;


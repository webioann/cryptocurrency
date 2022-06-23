import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import '../CSS/sing-up.scss'

const SingUp:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [lock,setLock] = useState<string>('password')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const Sing_Up = (event: React.FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email))
            navigate("/account")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const showPassword = () => {
        lock === 'password' ? setLock('text') : setLock('password')
    }
    
    return (
        <div className='g-page-container'>
            <div className={`sing-up-wrapper ${theme}-sing-up`}>
                <h1 className='header'>Sing Up</h1>
                <form onSubmit={Sing_Up}>
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
                                type={lock} 
                                placeholder='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}/>
                            {lock === 'text' 
                                ? <GoEye className='input-icon' onClick={showPassword}/> 
                                : <GoEyeClosed className='input-icon' onClick={showPassword}/>
                            }
                        </div>
                    </div>
                    <button className='btn'>Sing Up</button>
                </form>
                <div className='question'>
                    <p className='q-text'>Already have an account ?</p>
                    <Link to='/singin' className='q-link'>Sing In</Link>
                </div>
            </div>
        </div>
    )
}
export default SingUp;

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         if ( currentUser ) {
    //             dispatch(removeUser())
    //             dispatch(putUser(currentUser?.email))
    //             navigate("/account")
    //         }
    //     })
    //     return () => {
    //         unsubscribe();
    //     }
    // },[])

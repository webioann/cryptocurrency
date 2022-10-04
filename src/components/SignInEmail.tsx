import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../Firebase/firebase-config'
import { deleteUserPhoto } from '../Redux/reduxSlice'
import SignInGoogle from './SignInGoogle'
import '../CSS/signin-signup.scss'

const SignInEmail: React.FC = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [inputType,setInputType] = useState<string>('password')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logInWithEmail = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(deleteUserPhoto())
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email)) 
        })
        .catch((error) => {
            console.log(error) 
        })
        navigate('/')   
    }
    
    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    return (
        <div className='g-page-container'>
            <div className={`sign-wrapper ${theme}-sign`}>
                <h1 className='header'>Login</h1>
                <form onSubmit={logInWithEmail}>
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
                    <button className='btn'>Login</button>
                    <SignInGoogle/>
                </form>
                <div className='question'>
                    <p className='q-text'>Don't have an account ?</p>
                    <Link to='/signup' className='q-link'>Sing Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInEmail;
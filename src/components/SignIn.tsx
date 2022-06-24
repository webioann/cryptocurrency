import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../CSS/sign-in.scss'

const SignIn:React.FC = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [lock,setLock] = useState<string>('password')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const User_Sign_In = (event: React.FormEvent) => {
        event.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email))
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        });    
    }
    
    const showPassword = () => {
        lock === 'password' ? setLock('text') : setLock('password')
    }

    return (
        <div className='g-page-container'>
            <div className={`sign-in-wrapper ${theme}-sign-in`}>
                <h1 className='header'>Sing In</h1>
                <form onSubmit={User_Sign_In}>
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
                    <button className='btn'>Sing In</button>
                </form>
                <div className='question'>
                    <p className='q-text'>Don't have an account ?</p>
                    <Link to='/signup' className='q-link'>Sing Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
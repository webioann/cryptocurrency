import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser, setUserPhot } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore'
import { auth, provider, db } from '../Firebase/firebase-config'
import '../CSS/sign-in.scss'

const SignIn:React.FC = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)

    const [inputType,setInputType] = useState<string>('password')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const User_Sign_In = (event: React.FormEvent) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email)) 
        })
        .catch((error) => {
            console.log(error) 
        })
        navigate('/')   
    }

    const signInWithGoogle = () => {
        let temp_user: string | null = '';
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(putUser(result.user.email))
            dispatch(setUserPhot(result.user.photoURL)) 
            temp_user = result.user.email
        })
        .catch((error) => {console.error(error)} )

        return setDoc(doc(db, temp_user, "saved_coins"), { watch_list: [],})
    }
    
    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    return (
        <div className='g-page-container'>
            <div className={`sign-in-wrapper ${theme}-sign-in`}>
                <h1 className='header'>Sign In</h1>
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
                    <button className='btn'>Sign In</button>
                    <button className='btn' onClick={signInWithGoogle}>
                        Sign In with Google
                    </button>
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
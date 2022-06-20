import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import '../CSS/sing-in.scss'

const SingIn:React.FC = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [lock,setLock] = useState<string>('password')

    const showPassword = () => {
        if( lock === 'password' ) {
            setLock('text')
        }
        else{
            setLock('password')
        }
    }

    return (
        <div className='g-page-container'>
            <div className={`sing-in-wrapper ${theme}-sing-in`}>
                <h1 className='header'>Sing In</h1>
                <form>
                    <div className='email-box'>
                        <label>Email</label>
                        <div className='email-input-box'>
                            <input type='email' placeholder='email'/>
                            <HiOutlineMail className='input-icon'/>
                        </div>
                    </div>
                    <div className='password-box'>
                        <label>Password</label>
                        <div className='password-input-box'>
                            <input type={lock} placeholder='password'/>
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
                    <Link to='/singup' className='q-link'>Sing Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SingIn;
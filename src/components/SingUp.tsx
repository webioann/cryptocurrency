import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import '../CSS/sing-up.scss'

const SingUp = () => {

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
            <div className='sing-in-wrapper'>
                <h1 className='header'>Sing Up</h1>
                <form>
                    <div className='email-box'>
                        <label>Email</label>
                        <div className='email-input'>
                            <input type='email' placeholder='email'/>
                            <HiOutlineMail className='input-icon'/>
                        </div>
                    </div>
                    <div className='password-box'>
                        <label>Password</label>
                        <div className='password-input'>
                            <input type={lock} placeholder='password'/>
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
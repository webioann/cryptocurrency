import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import '../CSS/sing-in.scss'

const SingIn:React.FC = () => {
    
    return (
        <div className='g-page-container'>
            <div className='sing-in-wrapper'>
                <h1 className='header'>Sing In</h1>
                <form>
                    <div className='email-box'>
                        <label>Email</label>
                        <div className='email-input'>
                            <input type='email' placeholder='email'/>
                            <AiOutlineMail className='input-icon'/>
                        </div>
                    </div>
                    <div className='password-box'>
                        <label>Password</label>
                        <div className='password-input'>
                            <input type='password' placeholder='password'/>
                            <AiFillLock className='input-icon'/>
                        </div>
                    </div>
                    <button className='btn'>Sing in</button>
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
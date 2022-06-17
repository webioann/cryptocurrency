import React from 'react'
import { Link } from 'react-router-dom'
import './sing-in.scss'

const SingIn:React.FC = () => {
    
    return (
        <div className='g-page-container'>
            <p>SING IN</p>
            <Link to="/">home</Link>  
        </div>
    )
}

export default SingIn;
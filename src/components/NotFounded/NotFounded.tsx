import React from 'react'
import { Link } from 'react-router-dom';
import './not-found.scss'

const NotFounded:React.FC = () => {
    return (
        <div className='g-page-container'>
            <p>NotFounded</p>
            <Link to="/">BACK TO HOME</Link>
        </div>
    )
}

export default NotFounded;
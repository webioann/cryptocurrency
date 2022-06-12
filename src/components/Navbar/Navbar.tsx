import React from 'react'
import { PropsChildren } from '../../TYPES'
import './navbar.scss'

const Navbar:React.FC<PropsChildren> = ({ children }) => {

    return (
        <nav className='navbar'>
            { children }
        </nav>
    )
}

export default Navbar
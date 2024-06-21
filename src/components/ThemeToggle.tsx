import React from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { installThemeMode } from '../Redux/reduxSlice'
import { FaSun,FaMoon } from 'react-icons/fa'
import '../Styles/theme-toggle.scss'

const ThemeToggle = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const dispatch = useAppDispatch()

    if ( theme === 'light' ) {
        return (
            <button className='toggle-light' onClick={() => dispatch(installThemeMode('dark'))}>
                <FaMoon className='toggle-icon'/>  
                <span>Dark mode</span> 
            </button>
        )
    }
    else {
        return (
            <button className='toggle-dark' onClick={() => dispatch(installThemeMode('light'))}>
                <FaSun className='toggle-icon'/> 
                <span>Light mode</span> 
            </button>
        )
    }
}

export default ThemeToggle;


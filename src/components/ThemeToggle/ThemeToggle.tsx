import React from 'react'
import { useAppSelector,useAppDispatch } from '../../Redux/store'
import { installDarkTheme,installLightTheme } from '../../Redux/reduxSlice'
import { FaSun,FaMoon } from 'react-icons/fa'
import './theme-toggle.scss'

const ThemeToggle:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)
    const dispatch = useAppDispatch()

    if ( color_theme === 'light' ) {
        return (
            <button className='toggle' onClick={() => dispatch(installDarkTheme())}>
                <FaMoon className='toggle-icon'/>
                <span>Dark Mode</span>
            </button>
        )
    }
    else {
        return (
            <button className='toggle' onClick={() => dispatch(installLightTheme())}>
                <FaSun className='toggle-icon'/>
                <span>Light Mode</span>
            </button>
        )
    }
}
export default ThemeToggle;

// if ( color_theme === 'dark' )
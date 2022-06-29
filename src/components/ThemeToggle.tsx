import React from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { installThemeMode } from '../Redux/reduxSlice'
import { FaSun,FaMoon } from 'react-icons/fa'
import translator from '../hooks/translator'
import { theme_text_lt,theme_text_dk } from '../data/text'

import '../CSS/theme-toggle.scss'

const ThemeToggle:React.FC = () => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)
    const dispatch = useAppDispatch()

    if ( color_theme === 'light' ) {
        return (
            <button className='toggle-light' onClick={() => dispatch(installThemeMode('dark'))}>
                <FaMoon className='toggle-icon'/>
                <span>{ translator(theme_text_dk) }</span>
            </button>
        )
    }
    else {
        return (
            <button className='toggle-dark' onClick={() => dispatch(installThemeMode('light'))}>
                <FaSun className='toggle-icon'/>
                <span>{ translator(theme_text_lt) }</span>
            </button>
        ) 
    }
}
export default ThemeToggle;


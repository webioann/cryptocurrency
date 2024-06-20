import React from 'react'
import { useAppSelector } from '../Redux/store'
import '../CSS/burger.scss'

interface IBurgerProps  { 
    active: boolean;
}

const Burger: React.FC<IBurgerProps> = ({ active }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    // animated burger menu icon for screen less 640 px
    return (
        <div className='burger-spiner'>
            <span className={ active ? `line ${theme} top-line` : `line ${theme}` }></span>
            <span className={ active ? `line ${theme} center-line` : `line ${theme}` }></span>
            <span className={ active ? `line ${theme} bottom-line` : `line ${theme}` }></span>
        </div>
    )
}

export default Burger;
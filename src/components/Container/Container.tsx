import React from 'react'
import { PropsChildren } from '../../TYPES'
import { useAppSelector } from '../../Redux/store'
import './container.scss'

const Container:React.FC<PropsChildren> = ({ children }) => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className={`container-fluid ${color_theme}`}>
            <div className='container'>
                { children }
            </div> 

        </div>
    )
}
export default Container;
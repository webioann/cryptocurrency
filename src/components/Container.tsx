import React from 'react'
import { PropsChildrenType } from '../Types/react_types'
import { useAppSelector } from '../Redux/store'
import '../CSS/container.scss'

const Container:React.FC<PropsChildrenType> = ({ children }) => {

    const color_theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className={`container-fluid ${color_theme}-mode`}>
            <div className='container'>
                { children }
            </div> 
        </div>
    )
}
export default Container;
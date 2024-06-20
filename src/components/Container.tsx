import React from 'react'
import { useAppSelector } from '../Redux/store'
import '../CSS/container.scss'

interface IPropsChildren { children: JSX.Element | JSX.Element[] };

const Container: React.FC<IPropsChildren> = ({ children }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    // wrapper container with width 1200px
    return (
        <div className={`container-fluid ${theme}-mode`}>
            <div className='container'>
                { children }
            </div> 
        </div>
    )
}

export default Container;
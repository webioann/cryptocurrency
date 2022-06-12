import React from 'react'
import { PropsChildren } from '../../TYPES';
import './container.scss'

const Container:React.FC<PropsChildren> = ({ children }) => {

    return (
        <div className='container-fluid'>
            <div className='container'>
                { children }
            </div>
        </div>
    )
}
export default Container;
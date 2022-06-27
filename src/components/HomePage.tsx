import React from 'react'
import { PropsChildrenType } from '../Types/react_types'
import '../CSS/index.scss'

const HomePage:React.FC<PropsChildrenType> = ({ children }) => {

    return (
        <div className='g-page-container'>
            { children }
        </div>
    )
}
export default HomePage;
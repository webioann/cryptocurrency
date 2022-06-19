import React from 'react'
import { PropsChildrenType } from '../Types/react_types'

const HomePage:React.FC<PropsChildrenType> = ({ children }) => {

    return (
        <div>
            { children }
        </div>
    )
}
export default HomePage;
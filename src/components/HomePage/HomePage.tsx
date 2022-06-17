import React,{ useState,useEffect } from 'react'
import PageContainer from '../PageContainer/PageContainer'
import { PropsChildrenType } from '../../TYPES'

const HomePage:React.FC<PropsChildrenType> = ({ children }) => {

    return (
        <div>
            { children }
        </div>
    )
}
export default HomePage;
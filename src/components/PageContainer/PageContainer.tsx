import React from 'react'
import { PropsChildrenType } from '../../TYPES'
import './page-container.scss'

const PageContainer:React.FC<PropsChildrenType> = ({ children }) => {
    
    return (
        <section className='page-container'>
            { children }
        </section>
    )
}

export default PageContainer;
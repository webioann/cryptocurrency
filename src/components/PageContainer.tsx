import React from 'react'
import '../CSS/index.scss'

interface IPropsChildren {
    children: JSX.Element | JSX.Element[]
}

const PageContainer: React.FC<IPropsChildren> = ({ children }) => {

    return (
        <div className='g-page-container'>
            { children }
        </div>
    )
}

export default PageContainer;
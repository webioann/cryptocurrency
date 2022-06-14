import React from 'react'
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer/PageContainer'

const NotFounded:React.FC = () => {
    return (
        <PageContainer>
            <p>NotFounded</p>
            <Link to="/">BACK TO HOME</Link>
        </PageContainer>
    )
}

export default NotFounded;
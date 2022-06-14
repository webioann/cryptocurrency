import React from 'react'
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer/PageContainer'

const SingIn:React.FC = () => {
    
    return (
        <PageContainer>
            <p>SING IN</p>
            <Link to="/">home</Link>  
        </PageContainer>
    )
}

export default SingIn;
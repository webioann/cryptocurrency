import React from 'react';
import { changeNewsProvider } from '../Redux/reduxSlice';
import { useAppDispatch } from '../Redux/store'
import '../CSS/news-provider.scss'

function NewsProviderToggler() {

    const dispatch = useAppDispatch()

    return (
        <div className='provider-list'>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('coindesk'))}>Coindesk</span>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('cointelegraph'))}>Cointelegraph</span>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('bitcoinist'))}>Bitcoinist</span>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('decrypt'))}>Decrypt</span>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('bsc'))}>BSC News</span>
            <span className='provider' onClick={() => dispatch(changeNewsProvider('theguardian'))}>The guardian</span>
        </div>
    )
}

export default NewsProviderToggler;
import React from 'react';
import { changeNewsProvider } from '../Redux/reduxSlice';
import { useAppDispatch, useAppSelector } from '../Redux/store'
import '../CSS/news-provider.scss'

function NewsProviderToggler() {

    const dispatch = useAppDispatch()
    const newsProvider = useAppSelector(state => state.redux.newsProvider)
    const theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className='provider-list'>
            <span 
                className={newsProvider === 'coindesk' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('coindesk'))}>
                Coindesk
            </span>
            <span 
                className={newsProvider === 'cointelegraph' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('cointelegraph'))}>
                Cointelefraph
            </span>
            <span 
                className={newsProvider === 'bitcoinist' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('bitcoinist'))}>
                Bitcoinist
            </span>
            <span 
                className={newsProvider === 'decrypt' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('decrypt'))}>
                Decrypt
            </span>
            <span 
                className={newsProvider === 'bsc' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('bsc'))}>
                BSC News
            </span>
            <span 
                className={newsProvider === 'theguardian' ? `provider provider-${theme} active-provider-${theme}` : `provider provider-${theme}`} 
                onClick={() => dispatch(changeNewsProvider('theguardian'))}>
                The guardian
            </span>
        </div>
    )
}

export default NewsProviderToggler;
import React,{ useState,useEffect } from 'react'
import './coin-search.scss'

const CoinSearch:React.FC = () => {

    return (
        <div className='coin-search'>
            <h2>Search Crypto Currency</h2>
            <form>
                <input type='text' placeholder='Search a coins'/>
            </form>
        </div>
    )
}

export default CoinSearch;
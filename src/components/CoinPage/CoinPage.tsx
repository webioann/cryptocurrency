import React,{ useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../Redux/store'
import { getFetchCoins } from '../../Redux/reduxSlice'
import axios from "axios"
import { UnitCoinType } from '../../TYPES'

import './coin-page.scss'

const CoinPage:React.FC = () => {

    const [coin,setUnitCoin] = useState<UnitCoinType>( {} as UnitCoinType )
    const coin_url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true"
    
    useEffect(() => {
        axios.get(coin_url)
        .then( respons => {
            setUnitCoin(respons.data)
            console.log(respons.data);
    })
    },[coin_url])

    return (
        <div className='g-page-container'>
            <h1>COIN PAGE = {coin.name}</h1>
            <img src={coin.image?.small} alt='/' />      
        </div>
    )
}

export default CoinPage;
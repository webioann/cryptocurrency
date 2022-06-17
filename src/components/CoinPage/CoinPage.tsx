import React,{ useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../Redux/store'
import { getFetchCoins } from '../../Redux/reduxSlice'
import axios from "axios"
import { UnitCoinType } from '../../Types/unit_coin_types'

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
            <div className='unit-coin'>
                <div></div>
                <div className='discription'>
                    {coin.description?.eng}
                </div>
            </div>
        </div>
    )
}

export default CoinPage;
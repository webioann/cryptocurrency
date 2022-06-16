import React,{ useState,useEffect } from 'react'
import { useAppDispatch } from '../../Redux/store'
import { getFetchCoins } from '../../Redux/reduxSlice'
import axios from "axios"
import { TrendingType } from '../../TYPES'

import './trend-coins.scss'

const TrendCoins:React.FC = () => {

    const [trend_coins,setTrendCoins] = useState<TrendingType[]>([])

    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(() => {
        axios.get(url)
        .then( respons => {
            setTrendCoins(respons.data.coins)
            console.log(respons.data.coins);
        })
    },[url])

    return (
        <div className='trending'>
            <h1>Trending Coins</h1>
            <div className='trending-wrapper'>
                {trend_coins.map( coin => (
                <div>
                    <div className='logo'>
                        <img src={coin.item.small} alt={coin.item.name}/>
                    </div>
                    <div className='coin-name'>
                        <p>{coin.item.name}</p>
                        <p>{coin.item.symbol}</p>
                    </div>
                    <div>
                        <div className='small-logo'>
                            <img src={"https://assets.coingecko.com/coins/images/1/small/bitcoin.png"} alt="/"/>
                        </div>
                        <p>{coin.item.price_btc.toFixed(7)}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default TrendCoins;
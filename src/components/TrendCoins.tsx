import React,{ useState,useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import axios from "axios"
import { TrendingType } from '../Types/trending-types'
import '../CSS/trend-coins.scss'

import Test from './test'

const TrendCoins:React.FC = () => {

    const [trend_coins,setTrendCoins] = useState<TrendingType[]>([])
    const theme = useAppSelector(state => state.redux.theme_mode)

    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(() => {
        axios.get(url)
        .then( respons => {
            setTrendCoins(respons.data.coins)
        })
    },[url])

    return (
        <div className='trending'>
            <h2>Trending Coins
                <Test/>
            </h2>
            <div className='trending-wrapper'>
                {trend_coins.map( coin => (
                <div key={coin.item.coin_id} className={`trend-coin ${theme}-trend`}>

                    <div className='logo'>
                        <img src={coin.item.small} alt={coin.item.name}/>
                    </div>

                    <div className='coin-data'>
                        <h3 className='name'>{coin.item.name}</h3>

                        <div className='bottom-row'>
                            <p className='symbol'>{coin.item.symbol}</p>
                            <div className='small-logo'>
                                <img src={"https://assets.coingecko.com/coins/images/1/small/bitcoin.png"} alt="/"/>
                            </div>
                            <p>{coin.item.price_btc.toFixed(7)}</p>
                        </div>

                    </div>

                </div>
                ))}
            </div>
        </div>
    )
}

export default TrendCoins;
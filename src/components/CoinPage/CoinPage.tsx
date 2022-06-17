import React,{ useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../Redux/store'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import axios from "axios"
import { UnitCoinType } from '../../Types/unit_coin_types'
import { GoArrowDown,GoArrowUp } from 'react-icons/go';

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

                <div className='info'>
                    <div className='coin-info'>
                        <div className='main'>
                            <div className='logo'>
                                <img src={coin.image?.small} alt='/'/>
                            </div>
                            <div className='name'>
                                <div className='header'>
                                    <h1>{coin.name}</h1>
                                    <h2>({coin.symbol?.toUpperCase()})</h2>
                                </div>
                                <div className='rank'>
                                    Rank {coin.market_cap_rank}
                                </div>
                            </div>
                            <div className='price'>
                                <h2 className='top'>Price</h2>
                                {coin.market_data?.current_price ? (
                                <h3 className='bold'>${coin.market_data.current_price.usd.toLocaleString()}</h3>
                                ) : null}
                            </div>
                        </div>
                        <div className='spark-line'>
                            <div className='absolut'>
                                <span className='title'>dynamics for 7 days</span>
                                <div className='persent'>
                                    {coin.market_data?.price_change_percentage_7d > 0 ? <GoArrowUp color='green'/> : <GoArrowDown color='red'/>}
                                    <span>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</span>
                                </div>
                            </div>
                            <Sparklines data={coin.market_data?.sparkline_7d.price}>
                                <SparklinesLine color="#5388cd" /> 
                            </Sparklines>
                        </div>

                    </div>
                    <div className='market-info'>
                        <h3>Market stats</h3>
                    </div>
                </div>
                 {/*  */}
                <div className='discription'>
                    {coin.description?.en}
                </div>
            </div>
        </div>
    )
}

export default CoinPage;
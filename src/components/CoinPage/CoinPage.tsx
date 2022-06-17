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
                        <div className='general'>
                            <div className='cell algor'>
                                <p className='l-cell'>Hashing algorithm</p>
                                <p className='r-cell'>{coin.hashing_algorithm}</p>
                            </div>
                            <div className='cell trust'>
                                <p className='l-cell'>Trust score</p>
                                <p className='r-cell'>{coin.liquidity_score}</p>
                            </div>
                            <div className='cell cap'>
                                <p className='l-cell'>Market cap</p>
                                <p className='r-cell'>$ {coin.market_data?.market_cap.usd}</p>
                            </div>
                            <div className='cell volume'>
                                <p className='l-cell'>Trading volum</p>
                                <p className='r-cell'>$ {coin.market_data?.total_volume.usd}</p>
                            </div>
                        </div>
                    </div>
                    <div className='market-info'>
                        <h3 className='mk-title'>Market stats</h3>
                        <div className='row-info'>
                            <div className='cell-info-left'>
                                <p className='l-cell'>Price change 24h</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
                            </div>
                            <div className='cell-info-right'>
                                <p className='l-cell'>Price change 30 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>
                            </div>
                        </div>
                        <div className='row-info'>
                            <div className='cell-info-left'>
                                <p className='l-cell'>Price change 7 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>
                            </div>
                            <div className='cell-info-right'>
                                <p className='l-cell'>Price change 60 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>
                            </div>
                        </div>
                        <div className='row-info'>
                            <div className='cell-info-left'>
                                <p className='l-cell'>Price change 14 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>
                            </div>
                            <div className='cell-info-right'>
                                <p className='l-cell'>Price change 1 year</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_1y.toFixed(2)}%</p>
                            </div>
                        </div>
                        <div className='row-info'>
                            <div className='cell-info-left'>
                                <p className='l-cell'>24h high</p>
                                <p className='r-cell'>$ {coin.market_data?.high_24h.usd}</p>
                            </div>
                            <div className='cell-info-right'>
                                <p className='l-cell'>24h low</p>
                                <p className='r-cell'>$ {coin.market_data?.low_24h.usd}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='discription'>
                    {coin.description?.en}
                </div>
            </div>
        </div>
    )
}

export default CoinPage;
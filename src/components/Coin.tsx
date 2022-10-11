import React,{ useState,useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi'
import { CoinsType,UnitCoinType } from '../Types/coins.types'
import { IWatchListCoin } from '../Types/watchList.types'
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../Firebase/firebase-config"
import Tooltip from './Tooltip'
import '../CSS/coin.scss'

const Coin: React.FC<UnitCoinType> = ({ coin }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const currencyMark = useAppSelector(state => state.chart.currency.currencyMark)

    return (
        <tr className={`tab-row ${theme}-tab-row`} >
            <td className='rank'>#&#160;{ coin.market_cap_rank }</td>
            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div className='coin-link'>
                        <div className='img-wrapper'>
                            <img src={coin.image} alt={coin.id}/>
                        </div>
                        <p className='coin-name g-tab-hidden-425'>{coin.name}</p>
                    </div>
                </Link>
            </td>
            <td className='g-tab-hidden-756'>{ coin.symbol.toUpperCase() }</td>
            <td>
                { currencyMark }&#160;
                { new Intl.NumberFormat().format(coin.current_price) }
            </td>
            <td className='percent-change'>
                <div className='wrapper'>
                    {coin.price_change_percentage_24h > 0 
                        ? <HiArrowNarrowUp className='arrow' color='green'/> 
                        : <HiArrowNarrowDown className='arrow' color='#f85904'/>
                    }
                    {coin.price_change_percentage_24h > 0 
                        ? <p style={{color: 'green'}}>{coin.price_change_percentage_24h.toFixed(2)}</p> 
                        : <p style={{color: '#f85904'}}>{coin.price_change_percentage_24h.toFixed(2)}</p>
                    }
                    <span className='percent'>%</span>
                </div>
            </td>
            <td className='g-tab-hidden-640'>
                {currencyMark }&#160;
                { new Intl.NumberFormat().format(coin.total_volume) }
            </td>
            <td className='g-tab-hidden-640'>
                { currencyMark }&#160;
                { new Intl.NumberFormat().format(coin.market_cap) }
            </td>
            <td className='spark-line'>
                <Sparklines data={ coin.sparkline_in_7d.price }>
                    {/* to paint the SparkLine depending on the data for 7 days */}
                    { coin.price_change_percentage_7d_in_currency >= 0 
                        ? <SparklinesLine color="green" /> 
                        : <SparklinesLine color="red" /> 
                    }
                </Sparklines>
            </td>
        </tr>
    )
}

export default Coin;


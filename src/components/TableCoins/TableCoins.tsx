import React,{ useState,useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useAppSelector } from '../../Redux/store'
import { IoStarOutline,IoStar } from 'react-icons/io5'
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi'
import './table-coins.scss'

const CoinsTable:React.FC = () => {

    const coins = useAppSelector(state => state.redux.coins_data)
    const found = useAppSelector(state => state.redux.coins)
    console.log(found);
    return (
        <table className='table'>
            <thead className='tab-head'>
                <tr className='tab-head-row'>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>24h Volume</th>
                    <th className='market-cap'>
                        <p className='hidden'>Mkt</p>
                    </th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody className='tab-body'>
                {coins.map( (coin) => (
                <tr className='tab-row' key={coin.ath}>
                    <td><IoStarOutline className='hidden'/></td>
                    <td>
                        <p className='hidden'>{coin.market_cap_rank}</p>
                    </td>
                    <td>
                        <div className='coin-link'>
                            <div className='img-wrapper'>
                                <img src={coin.image} alt={coin.id}/>
                            </div>
                            <p className='coin-name'>{coin.name}</p>
                        </div>
                    </td>
                    <td>{coin.symbol.toUpperCase()}</td>
                    <td>$ {coin.current_price.toLocaleString()}</td>

                    <td className='percent-change'>
                        <div className='wrapper'>
                            {coin.price_change_percentage_24h > 0 
                                ? <HiArrowNarrowUp className='arrow' color='green'/> 
                                : <HiArrowNarrowDown className='arrow' color='#f85904'/>
                            }
                            {coin.price_change_percentage_24h > 0 
                                ? <p style={{color: 'green'}}>{coin.price_change_percentage_24h.toFixed(4)}</p> 
                                : <p style={{color: '#f85904'}}>{coin.price_change_percentage_24h.toFixed(4)}</p>
                            }
                            <span className='percent'>%</span>
                        </div>
                    </td>

                    <td>${coin.total_volume.toLocaleString()}</td>
                    <td className='market-cap'>
                        <div className='hidden'> ${coin.market_cap.toLocaleString()}</div>
                    </td>
                    <td className='spark-line'>
                        <Sparklines data={coin.sparkline_in_7d.price}>
                            <SparklinesLine color="#5388cd" />
                        </Sparklines>
                    </td>
                </tr>))}
            </tbody>
    </table>    )
}
export default CoinsTable;

import React,{ useState,useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useAppSelector } from '../../Redux/store'
import { IoStarOutline,IoStar } from 'react-icons/io5'
import './table-coins.scss'

const CoinsTable:React.FC = () => {

    const coins = useAppSelector(state => state.redux.coins)
    
    return (
        <table className='table'>
            <thead className='tab-head'>
                <tr className='tab-head-row'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>coin</th>
                    <th>coin symbol</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody className='tab-body'>
                {coins.map( (coin) => (
                <tr className='tab-row' key={coin.ath}>
                    <td><IoStarOutline/></td>
                    <td>{coin.market_cap_rank}</td>
                    <td>
                        <div className='coin-link'>
                            <div className='img-wrapper'>
                                <img src={coin.image} alt={coin.id}/>
                            </div>
                            <p className='coin-name'>{coin.name}</p>
                        </div>
                    </td>
                    <td>{coin.symbol}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h}</td>
                    <td>{coin.total_volume}</td>
                    <td>{coin.market_cap}</td>
                    <td>
                        <Sparklines data={coin.sparkline_in_7d.price}>
                            <SparklinesLine color="#5388cd" />
                        </Sparklines>
                    </td>
                </tr>))}
            </tbody>
    </table>    )
}
export default CoinsTable;
// {coins
//     .filter((value) => {
//       if (searchText === '') {
//         return value;
//       } else if (
//         value.name.toLowerCase().includes(searchText.toLowerCase())
//       ) {
//         return value;
//       }
//     })
//     .map((coin) => (
//       <CoinItem key={coin.id} coin={coin} />
//     ))}

import React from 'react'
import { useAppSelector } from '../Redux/store'
import UnitCoin from './UnitCoin'
import '../CSS/table-coins.scss'

const CoinsTable = () => {

    const coins = useAppSelector(state => state.redux.coins_data)
    const input_value = useAppSelector(state => state.redux.input_value)

    return (
        <table className='table'>
            <thead className='tab-head'>
                <tr className='tab-head-row'>
                    <th className='star g-tab-hidden-640'></th>
                    <th className='rank g-tab-hidden-640'>Rank</th>
                    <th className='coin'>Coin</th>
                    <th className='g-tab-hidden-756'></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>24h volume</th>
                    <th className='g-tab-hidden-640'>Mkt</th>
                    <th className='spark-line g-tab-hidden-576'>Last 7 Days</th>
                </tr>
            </thead>
            <tbody className='tab-body'>
                {coins.filter((value) => {
                    if (input_value === '') { return value }
                    else if (value.name.toLowerCase().includes(input_value.toLowerCase())) { return value }})
                .map( (coin) => 
                    <UnitCoin key={coin.id} coin={coin}/>)
                }
            </tbody>
        </table>    
    )
}
export default CoinsTable;


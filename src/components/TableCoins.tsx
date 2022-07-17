import React from 'react'
import { useAppSelector } from '../Redux/store'
import { useFetchCoinsQuery } from '../Redux/coinsApi'
import UnitCoin from './UnitCoin'
import '../CSS/table-coins.scss'

const CoinsTable = () => {

    const input_value = useAppSelector(state => state.redux.input_value)
    const currentPage = useAppSelector(state => state.pagin.currentPage)

    const { data = [] } = useFetchCoinsQuery(currentPage);

    return (
        <table className='table'>
            <thead className='tab-head'>
                <tr className='tab-head-row'>
                    <th className='star'></th>
                    <th className='rank g-tab-hidden-576'>rank</th>
                    <th className='coin'>coin</th>
                    <th className='symbol g-tab-hidden-756'>symbol</th>
                    <th>price</th>
                    <th>24h</th>
                    <th className='g-tab-hidden-640'>24h volume</th>
                    <th className='g-tab-hidden-640'>mkt</th>
                    <th className='spark-line'>per 7 days</th>
                </tr>
            </thead>
            <tbody className='tab-body'>
                {data.filter((value) => {
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


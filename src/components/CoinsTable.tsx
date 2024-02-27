import React, { useEffect } from 'react'
import Coin from './Coin'
import { useAppSelector, useAppDispatch } from '../Redux/store'
import { useLazyFetchCoinsQuery } from '../Redux/coinsApi'
import { onFirstAppStart } from '../Redux/reduxSlice'
import '../CSS/coins-table.scss'

const CoinsTable: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.redux.currentPage)
    const currentCurrency = useAppSelector(state => state.chart.currency.currentCurrency)
    const [ getCoinsData, { data: coins = [], isSuccess: status } ] = useLazyFetchCoinsQuery()
    
    useEffect(() => {
        getCoinsData({
            page: currentPage,
            currency: currentCurrency
        })
    }, [currentCurrency, currentPage])

    console.log(coins)

    // it is needed for lazy loading TrendingCoins after fetching start page data
    const start = useAppSelector(state => state.redux.appStarted)
    useEffect(() => {
        status && dispatch(onFirstAppStart())
    }, [status])
    
    if(coins.length > 0) {
        return (
            <table className='table'>
                <thead className='tab-head'>
                    <tr className='tab-head-row'>
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
                    { coins.map((coin) => <Coin key={coin.id} coin={coin}/>) }
                </tbody>
            </table>    
        )
    }
    else  return null
}

export default CoinsTable;

import React from 'react'
import { useAppSelector } from '../Redux/store'
import { useExchanger } from '../hooks/useExchanger';
import StatsCell from './StatsCell'
import { ICoinData } from '../Types/coinDetails.types'
import '../Styles/market-stats.scss'

const MarketStats: React.FC<ICoinData> = ({ data }) => {

    const currencyMark = useAppSelector(state => state.chart.currency.currencyMark)

    return (
        <div className='market-stats'>
            <h2 className='stats-title'>Market stats</h2>
            <div className='stats-table'>
                <StatsCell title='Market cap' pref={ currencyMark } data={ new Intl.NumberFormat().format(useExchanger(data.market_data?.market_cap))}/>
                <StatsCell title='Volume' pref={ currencyMark } data={ new Intl.NumberFormat().format(useExchanger(data.market_data?.total_volume))}/>
                <StatsCell title='Price change 24h' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_24h_in_currency)}/>
                <StatsCell title='Price change 7 day' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_7d_in_currency)}/>
                <StatsCell title='Price change 14 day' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_14d_in_currency)}/>
                <StatsCell title='Price change 30 day' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_30d_in_currency)}/>
                <StatsCell title='Price change 60 day' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_60d_in_currency)}/>
                <StatsCell title='Price change 200 day' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_200d_in_currency)}/>
                <StatsCell title='Price change 1 year' syf='%' data={ useExchanger(data.market_data?.price_change_percentage_1y_in_currency)}/>
                <StatsCell title='24h high' pref={ currencyMark } data={ useExchanger(data.market_data?.high_24h)}/>
                <StatsCell title='24h low' pref={ currencyMark } data={ useExchanger(data.market_data?.low_24h)}/>
                <StatsCell title='Hashing algorithm' data={ data.hashing_algorithm }/>
                <StatsCell title='Trust score' data={ data.liquidity_score }/>
            </div>
        </div>
    )
}

export default MarketStats;
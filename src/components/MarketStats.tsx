import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import StatsCell from './StatsCell'
import { ICoinData } from '../Types/coinDetails.types'
import '../CSS/market-stats.scss'

const MarketStats: React.FC<ICoinData> = ({ data }) => {

    const { currentCurrency, currencyMark} = useAppSelector(state => state.chart.currency)
    const [marketCap, setMarketCap] = useState(0)
    const [totalVolume, setTotalVolume] = useState(0)
    const [high24, setHigh24] = useState(0)
    const [low24, setLow24] = useState(0)

    useEffect(() => {
        if(currentCurrency === 'usd') {
            setMarketCap(data.market_data?.market_cap.usd)
            setTotalVolume(data.market_data?.total_volume.usd)
            setHigh24(data.market_data?.high_24h.usd)
            setLow24(data.market_data?.low_24h.usd)
        }
        if(currentCurrency === 'eur') {
            setMarketCap(data.market_data?.market_cap.eur)
            setTotalVolume(data.market_data?.total_volume.eur)
            setHigh24(data.market_data?.high_24h.eur)
            setLow24(data.market_data?.low_24h.eur)
        }
        if(currentCurrency === 'jpy') {
            setMarketCap(data.market_data?.market_cap.jpy)
            setTotalVolume(data.market_data?.total_volume.jpy)
            setHigh24(data.market_data?.high_24h.jpy)
            setLow24(data.market_data?.low_24h.jpy)
        }
        if(currentCurrency === 'uah') {
            setMarketCap(data.market_data?.market_cap.uah)
            setTotalVolume(data.market_data?.total_volume.uah)
            setHigh24(data.market_data?.high_24h.uah)
            setLow24(data.market_data?.low_24h.uah)
        }
    }, [currentCurrency])

    return (
        <div className='market-stats'>
            <h2 className='stats-title'>Market stats</h2>
            <div className='stats-table'>
                <StatsCell title='Market cap' pref={ currencyMark } data={marketCap}/>
                <StatsCell title='Volume' pref={ currencyMark } data={totalVolume}/>
                <StatsCell title='Price change 24h' syf='%' data={data.market_data?.price_change_percentage_24h.toFixed(2)}/>
                <StatsCell title='Price change 30 day' syf='%' data={data.market_data?.price_change_percentage_30d.toFixed(2)}/>
                <StatsCell title='Price change 7 day' syf='%' data={data.market_data?.price_change_percentage_7d.toFixed(2)}/>
                <StatsCell title='Price change 60 day' syf='%' data={data.market_data?.price_change_percentage_60d.toFixed(2)}/>
                <StatsCell title='Price change 14 day' syf='%' data={data.market_data?.price_change_percentage_14d.toFixed(2)}/>
                <StatsCell title='Price change 1 year' syf='%' data={data.market_data?.price_change_percentage_1y.toFixed(2)}/>
                <StatsCell title='24h high' pref={ currencyMark } data={high24}/>
                <StatsCell title='24h low' pref={ currencyMark } data={low24}/>
                <StatsCell title='Hashing algorithm' data={data.hashing_algorithm}/>
                <StatsCell title='Trust score' data={data.liquidity_score}/>
            </div>
        </div>
    )
}

export default MarketStats;
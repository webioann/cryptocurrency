import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import { useExchanger } from '../hooks/useExchanger';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import { ICoinData } from '../Types/coinDetails.types'
import '../CSS/coin-details-title.scss'

const CoinDetailsTitle: React.FC<ICoinData> = ({ data }) => {

    const { currencyMark, currentCurrency } = useAppSelector(state => state.chart.currency)

    return (
        <div className='coin-main-info'>
            <div className='logo'>
                <img src={data.image?.small} alt='/'/>
            </div>
            <h2 className='rank'>
                #{ data.market_cap_rank }
            </h2>
            <div className='coin-name'>
                <h2>{ data.name }</h2>
                <h3>
                    ( { data.symbol?.toUpperCase() } )
                </h3>
            </div>
            <div className='price-dinamic'>
                {data.market_data?.price_change_percentage_24h_in_currency.usd > 0 ? <HiArrowNarrowUp color='green'/> : <HiArrowNarrowDown color='red'/>}
                <span>{ useExchanger(data.market_data?.price_change_percentage_24h_in_currency).toFixed(1) }%</span>
            </div>
            <div className='price'>
                {data.market_data?.current_price ? (
                <h2 className='bold'>
                    { currencyMark } 
                    &#160;
                    { useExchanger(data.market_data?.current_price).toFixed(2) }
                    &#160;
                    { currentCurrency.toLocaleUpperCase() }
                </h2>
                ) : null}
            </div>
        </div>
    )
}

export default CoinDetailsTitle;

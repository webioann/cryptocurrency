import React, { useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import SocialLink from './SocialLink'
import MarketStats  from './MarketStats'
import CoinDetailsTitle from './CoinDetailsTitle';
import LineChart from './LineChart'
import { useLazyCoinDetailsQuery } from '../Redux/coinsApi'
import { IQueryParams } from '../Types/chartData.types'
import { useLazyFetchChartDataQuery } from '../Redux/chartDataApi'

import '../CSS/coin-details.scss'

const CoinDetails: React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const { coinId } = useParams()
    const [ fetchCoinDetailsData, { data }] = useLazyCoinDetailsQuery()
    const { period, periodicity} = useAppSelector(state => state.chart)
    const { currentCurrency } = useAppSelector(state => state.chart.currency)
    const [ fetchChartData, { data: chartData } ] = useLazyFetchChartDataQuery()


    useEffect(() => {
        const queryParams:IQueryParams = {
            coinId: coinId,
            currency: currentCurrency,
            timePeriod:  period,
            interval: periodicity,
        }
        fetchChartData(queryParams)
    }, [period, currentCurrency])

    useEffect(() => {
        coinId !== null && fetchCoinDetailsData(coinId)
    }, [coinId, currentCurrency])
    
    if( data ) {
        return (
            <div className='g-page-container'>
                <div className='coin'>
                    <div className='info'>
                        <div className='coin-info'>
                            <CoinDetailsTitle data={data}/>
                            { chartData ? <LineChart chartData={chartData}/> : null}
                            <div className='social-links'>
                                <SocialLink type='homepage' coin={data}/>
                                <SocialLink type='fasebook' coin={data}/>
                                <SocialLink type='reddit' coin={data}/>
                                <SocialLink type='telegram' coin={data}/>
                                <SocialLink type='twitter' coin={data}/>
                            </div>
                        </div>
                        <MarketStats data={data}/>
                    </div>
                    <div className={`discription-${theme}`}>
                        <h2>About {data.name}</h2>
                        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description ? data.description.en : ''),}} ></p>
                    </div>
                </div>
            </div>
        )
    } else { return null }
}

export default CoinDetails;

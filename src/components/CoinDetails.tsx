import React, { useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import { useParams } from 'react-router-dom'
import SocialLink from './SocialLink'
import MarketStats  from './MarketStats'
import CoinDetailsTitle from './CoinDetailsTitle'
import News from './News'
import LineChart from './LineChart'
import { useLazyCoinDetailsQuery } from '../Redux/coinsApi'
import { IQueryParams } from '../Types/chartData.types'
import { useLazyFetchChartDataQuery } from '../Redux/chartDataApi'
import '../Styles/coin-details.scss'

const CoinDetails: React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const { coinId } = useParams()
    const period = useAppSelector(state => state.chart.period)
    const currentCurrency = useAppSelector(state => state.chart.currency.currentCurrency)
    const [ fetchChartData, { data: chartData, isLoading } ] = useLazyFetchChartDataQuery()
    const [ fetchCoinDetailsData, { data: coinData }] = useLazyCoinDetailsQuery()

    useEffect(() => {
        const queryParams: IQueryParams = {
            coinId: coinId,
            currency: currentCurrency,
            period:  period,
        }
        fetchChartData(queryParams)
    }, [period, currentCurrency])


    useEffect(() => {
        coinId !== null && fetchCoinDetailsData(coinId)
    }, [coinId])
    
    if( coinData ) {
        return (
            <div className='g-page-container'>
                <div className='coin'>
                    <div className='info'>
                        <div className='coin-info'>
                            <CoinDetailsTitle data={coinData}/>
                            { chartData ? <LineChart chartData={chartData}/> : null }
                            <div className='social-links'>
                                <SocialLink type='homepage' coin={coinData}/>
                                <SocialLink type='fasebook' coin={coinData}/>
                                <SocialLink type='reddit' coin={coinData}/>
                                <SocialLink type='telegram' coin={coinData}/>
                                <SocialLink type='twitter' coin={coinData}/>
                            </div>
                        </div>
                        <MarketStats data={coinData}/>
                    </div>
                    <div className={`news-${theme}`}>
                        <h2 className='news-title'>{`Fresh ${coinId?.toLocaleUpperCase()} news`}</h2>
                        <News  token={coinData.symbol.toUpperCase()} languages='en' batchSize={6}/>  
                    </div>
                </div>
            </div>
        )
    } else { return null }
}

export default CoinDetails;

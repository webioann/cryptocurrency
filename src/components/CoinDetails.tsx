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
import '../CSS/coin-details.scss'

const CoinDetails: React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const { coinId } = useParams()
    const [ fetchCoinDetailsData, { data }] = useLazyCoinDetailsQuery()
    const period = useAppSelector(state => state.chart.period)
    const currentCurrency = useAppSelector(state => state.chart.currency.currentCurrency)
    const [ fetchChartData, { data: chartData, isLoading } ] = useLazyFetchChartDataQuery()

    useEffect(() => {
        const queryParams:IQueryParams = {
            coinId: coinId,
            currency: currentCurrency,
            period:  period,
        }
        fetchChartData(queryParams)
    }, [period, currentCurrency])


    useEffect(() => {
        coinId !== null && fetchCoinDetailsData(coinId)
    }, [coinId])
    
    if( data ) {
        return (
            <div className='g-page-container'>
                <div className='coin'>
                    <div className='info'>
                        <div className='coin-info'>
                            <CoinDetailsTitle data={data}/>
                            { chartData ? <LineChart chartData={chartData}/> : null }
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
                    <div className={`news-${theme}`}>
                        <h2 className='news-title'>{`Fresh ${coinId?.toLocaleUpperCase()} news`}</h2>
                        { coinId && <News languages='en' batchSize={12}/>  }
                        {/* providerLogo={data.image?.large} */}
                    </div>
                </div>
            </div>
        )
    } else { return null }
}

export default CoinDetails;

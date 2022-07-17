import React from 'react'
import { useAppSelector } from '../Redux/store'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { GoArrowDown,GoArrowUp } from 'react-icons/go';
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import SocialLink from './SocialLink'
import StatsCell from './StatsCell'
import '../CSS/coin-full-info.scss'

import { useGetCoinFullInfoQuery } from '../Redux/coinsApi'

const CoinFullInfo:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const { coinId } = useParams()
    const { data } = useGetCoinFullInfoQuery(coinId);

    if( data ) {
        return (
            <div className='g-page-container'>
                <div className='unit-coin'>
                    <div className='info'>
                        <div className='coin-info'>
                            <div className='main'>
                                <div className='logo'>
                                    <img src={data.image?.small} alt='/'/>
                                </div>
                                <div className='name'>
                                    <div className='header'>
                                        <h2>{data.name}</h2>
                                        <h3 className='g-hidden-350'>({data.symbol?.toUpperCase()})</h3>
                                    </div>
                                    <div className='rank'>
                                        Rank {data.market_cap_rank}
                                    </div>
                                </div>
                                <div className='price'>
                                    <h3 className='top'>Price</h3>
                                    {data.market_data?.current_price ? (
                                    <h3 className='bold'>${data.market_data.current_price.usd.toLocaleString()}</h3>
                                    ) : null}
                                </div>
                            </div>
                            <section className='spark-line'>
                                <div className='absolut'>
                                    <span className='title'>dynamics for 7 days</span>
                                    <div className='persent'>
                                        {data.market_data?.price_change_percentage_7d > 0 ? <GoArrowUp color='green'/> : <GoArrowDown color='red'/>}
                                        <span>{data.market_data?.price_change_percentage_7d.toFixed(2)}%</span>
                                    </div>
                                </div>
                                <Sparklines data={data.market_data?.sparkline_7d.price}>
                                    <SparklinesLine color="#5388cd" /> 
                                </Sparklines>
                            </section>
                            <section className='social-links'>
                                <SocialLink type='homepage' coin={data}/>
                                <SocialLink type='fasebook' coin={data}/>
                                <SocialLink type='reddit' coin={data}/>
                                <SocialLink type='telegram' coin={data}/>
                                <SocialLink type='twitter' coin={data}/>
                            </section>
                        </div>
                        <section className='market-info'>
                            <h2 className='stats-title'>Market stats</h2>
                            <section className='stats-table'>
                                <StatsCell title='Market cap' pref='$' data={data.market_data?.market_cap.usd}/>
                                <StatsCell title='Volume' pref='$' data={data.market_data?.total_volume.usd}/>
                                <StatsCell title='Price change 24h' syf='%' data={data.market_data?.price_change_percentage_24h.toFixed(2)}/>
                                <StatsCell title='Price change 30 day' syf='%' data={data.market_data?.price_change_percentage_30d.toFixed(2)}/>
                                <StatsCell title='Price change 7 day' syf='%' data={data.market_data?.price_change_percentage_7d.toFixed(2)}/>
                                <StatsCell title='Price change 60 day' syf='%' data={data.market_data?.price_change_percentage_60d.toFixed(2)}/>
                                <StatsCell title='Price change 14 day' syf='%' data={data.market_data?.price_change_percentage_14d.toFixed(2)}/>
                                <StatsCell title='Price change 1 year' syf='%' data={data.market_data?.price_change_percentage_1y.toFixed(2)}/>
                                <StatsCell title='24h high' pref='$' data={data.market_data?.high_24h.usd}/>
                                <StatsCell title='24h low' pref='$' data={data.market_data?.low_24h.usd}/>
                                <StatsCell title='Hashing algorithm' data={data.hashing_algorithm}/>
                                <StatsCell title='Trust score' data={data.liquidity_score}/>
                            </section>
                        </section>
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

export default CoinFullInfo;
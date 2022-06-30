import React,{ useState,useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import axios from "axios"
import { FullDataCoinType } from '../Types/full_data_coin_types'
import { GoArrowDown,GoArrowUp } from 'react-icons/go';
import { FaTelegramPlane,FaTwitter,FaFacebook } from 'react-icons/fa';
import { AiFillRedditCircle } from 'react-icons/ai';
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import SocialLink from './SocialLink'
import StatsCell from './StatsCell'
import '../CSS/coin-full-info.scss'

const CoinFullInfo:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [coin,setUnitCoin] = useState<FullDataCoinType>( {} as FullDataCoinType )
    const params = useParams()
    const coin_url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    useEffect(() => {
        axios.get(coin_url)
        .then( respons => {
            setUnitCoin(respons.data)
            // console.log(respons.data);
    })
    },[coin_url])
    
    console.log(coin);

    return (
        <div className='g-page-container'>
            <div className='unit-coin'>

                <div className='info'>
                    <div className='coin-info'>
                        {/* ----- PRICE AND LOGO -------------- */}
                        <div className='main'>
                            <div className='logo'>
                                <img src={coin.image?.small} alt='/'/>
                            </div>

                            <div className='name'>
                                <div className='header'>
                                    <h2>{coin.name}</h2>
                                    <h3 className='g-hidden-350'>({coin.symbol?.toUpperCase()})</h3>
                                </div>
                                <div className='rank'>
                                    Rank {coin.market_cap_rank}
                                </div>
                            </div>

                            <div className='price'>
                                <h3 className='top'>Price</h3>
                                {coin.market_data?.current_price ? (
                                <h3 className='bold'>${coin.market_data.current_price.usd.toLocaleString()}</h3>
                                ) : null}
                            </div>
                        </div>

                        {/* ---- SPARK_LINE ---------- */}
                        <section className='spark-line'>
                            <div className='absolut'>
                                <span className='title'>dynamics for 7 days</span>
                                <div className='persent'>
                                    {coin.market_data?.price_change_percentage_7d > 0 ? <GoArrowUp color='green'/> : <GoArrowDown color='red'/>}
                                    <span>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</span>
                                </div>
                            </div>
                            <Sparklines data={coin.market_data?.sparkline_7d.price}>
                                <SparklinesLine color="#5388cd" /> 
                            </Sparklines>
                        </section>
                        <section className='social-links'>
                            <SocialLink type='homepage' coin={coin}/>
                            <SocialLink type='fasebook' coin={coin}/>
                            <SocialLink type='reddit' coin={coin}/>
                            <SocialLink type='telegram' coin={coin}/>
                            <SocialLink type='twitter' coin={coin}/>
                        </section>

                    </div>
                    <section className='market-info'>
                        <h2 className='stats-title'>Market stats</h2>
                        <section className='stats-table'>
                            <StatsCell title='Market cap' pref='$' data={coin.market_data?.market_cap.usd}/>
                            <StatsCell title='Volume' pref='$' data={coin.market_data?.total_volume.usd}/>
                            <StatsCell title='Price change 24h' syf='%' data={coin.market_data?.price_change_percentage_24h.toFixed(2)}/>
                            <StatsCell title='Price change 30 day' syf='%' data={coin.market_data?.price_change_percentage_30d.toFixed(2)}/>
                            <StatsCell title='Price change 7 day' syf='%' data={coin.market_data?.price_change_percentage_7d.toFixed(2)}/>
                            <StatsCell title='Price change 60 day' syf='%' data={coin.market_data?.price_change_percentage_60d.toFixed(2)}/>
                            <StatsCell title='Price change 14 day' syf='%' data={coin.market_data?.price_change_percentage_14d.toFixed(2)}/>
                            <StatsCell title='Price change 1 year' syf='%' data={coin.market_data?.price_change_percentage_1y.toFixed(2)}/>
                            <StatsCell title='24h high' pref='$' data={coin.market_data?.high_24h.usd}/>
                            <StatsCell title='24h low' pref='$' data={coin.market_data?.low_24h.usd}/>
                            <StatsCell title='Hashing algorithm' data={coin.hashing_algorithm}/>
                            <StatsCell title='Trust score' data={coin.liquidity_score}/>
                        </section>
                    </section>
                </div>
                {/* ------ DISKRIPTION --------------- */}
                <div className={`discription-${theme}`}>
                    <h2>About {coin.name}</h2>
                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
                </div>
            </div>
        </div>
    )
}

export default CoinFullInfo;
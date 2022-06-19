import React,{ useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import axios from "axios"
import { UnitCoinType } from '../Types/unit_coin_types'
import { GoArrowDown,GoArrowUp } from 'react-icons/go';
import { FaTelegramPlane,FaTwitter,FaFacebook } from 'react-icons/fa';
import { AiFillRedditCircle } from 'react-icons/ai';
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import '../CSS/coin-page.scss'

const CoinPage:React.FC = () => {

    const [coin,setUnitCoin] = useState<UnitCoinType>( {} as UnitCoinType )
    const params = useParams()
    const coin_url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
    const theme = useAppSelector(state => state.redux.theme_mode)
    
    useEffect(() => {
        axios.get(coin_url)
        .then( respons => {
            setUnitCoin(respons.data)
            console.log(respons.data);
    })
    },[coin_url])

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
                                    <h3>({coin.symbol?.toUpperCase()})</h3>
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
                        {/* ------ LINKS ON SOCIAL -------------- */} 
                        <section className='social-links'>

                            {/* ------- home page ------ */}
                            <div className={`link ${theme}-lk`}>
                                <div className='coin-icon'>
                                    <img src={coin.image?.thumb} alt="coin image"></img>
                                </div>
                                <a href={coin.links?.homepage[0]} target="blank">
                                    site
                                </a>
                            </div>
                            {/* ------ facebook -------------------- */}
                            { coin.links?.facebook_username ? (
                                <div className={`link ${theme}-lk`}>
                                    <FaFacebook className='link-icon' color='#5388cd'/>
                                    <a href={`https://facebook.com/${coin.links?.facebook_username}/`} target="blank">
                                        facebook
                                    </a>
                                </div>
                            ) : null }
                            {/* ------ reddit ---------------- */}
                            { coin.links?.subreddit_url ? (
                                <div className={`link ${theme}-lk`}>
                                    <AiFillRedditCircle className='link-icon' color='#5388cd'/>
                                    <a href={coin.links?.subreddit_url} target="blank">
                                        reddit
                                    </a>
                                </div>
                            ) : null }

                            {/* ------ telegram ----------- */}
                            { coin.links?.telegram_channel_identifier ? (
                                <div className={`link ${theme}-lk`}>
                                    <FaTelegramPlane className='link-icon' color='#5388cd'/>
                                    <a href={`https://t.me/${coin.links?.telegram_channel_identifier}`} target="blank">
                                        telegram
                                    </a>
                                </div>
                            ) : null }
                            {/* ---------- twitter ----------- */}
                            { coin.links?.twitter_screen_name ? (
                                <div className={`link ${theme}-lk`}>
                                    <FaTwitter className='link-icon' color='#5388cd'/>
                                    <a href={`https://twitter.com/${coin.links?.twitter_screen_name}`} target="blank">
                                        twitter
                                    </a>
                                </div>
                            ) : null }

                        </section>

                    </div>
                    {/* ---- MARKET STATS ------ */}
                    <section className='market-info'>
                        <h2 className='stats-title'>Market stats</h2>
                        <section className='stats-table'>
                        <div className='cell cap'>
                                <p className='l-cell'>Market cap</p>
                                <p className='r-cell'>$ {coin.market_data?.market_cap.usd}</p>
                            </div>
                            <div className='cell volume'>
                                <p className='l-cell'>Volume</p>
                                <p className='r-cell'>$ {coin.market_data?.total_volume.usd}</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 24h</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 30 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 7 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 60 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 14 day</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>Price change 1 year</p>
                                <p className='r-cell'>{coin.market_data?.price_change_percentage_1y.toFixed(2)}%</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>24h high</p>
                                <p className='r-cell'>$ {coin.market_data?.high_24h.usd}</p>
                            </div>
                            <div className='cell'>
                                <p className='l-cell'>24h low</p>
                                <p className='r-cell'>$ {coin.market_data?.low_24h.usd}</p>
                            </div>
                            <div className='cell algor'>
                                <p className='l-cell'>Hashing algorithm</p>
                                <p className='r-cell'>{coin.hashing_algorithm}</p>
                            </div>
                            <div className='cell trust'>
                                <p className='l-cell'>Trust score</p>
                                <p className='r-cell'>{coin.liquidity_score}</p>
                            </div>
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

export default CoinPage;
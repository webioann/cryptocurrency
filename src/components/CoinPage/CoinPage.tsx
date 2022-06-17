import React,{ useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../Redux/store'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import axios from "axios"
import { UnitCoinType } from '../../Types/unit_coin_types'

import './coin-page.scss'

const CoinPage:React.FC = () => {

    const [coin,setUnitCoin] = useState<UnitCoinType>( {} as UnitCoinType )
    const coin_url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true"
    
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
                        <div className='main'>
                            <div className='logo'>
                                <img src={coin.image?.small} alt='/'/>
                            </div>
                            <div className='name'>
                                <h2>{coin.name}</h2>
                                <h4>( {coin.symbol} / usd)</h4>
                            </div>
                            <div className='price'>
                                <h3 className='top'>Price</h3>
                                {coin.market_data?.current_price ? (
                                <h3 className='bold'>${coin.market_data.current_price.usd.toLocaleString()}</h3>
                                ) : null}
                            </div>
                        </div>
                        <div className='spark-line'>
                            <Sparklines data={coin.market_data?.sparkline_7d.price}>
                                <SparklinesLine color="green" /> 
                            </Sparklines>
                        </div>

                    </div>
                    <div className='market-info'>
                        <h3>Market stats</h3>
                    </div>
                </div>
                 {/*  */}
                <div className='discription'>
                    {coin.description?.en}
                </div>
            </div>
        </div>
    )
}

export default CoinPage;
import React, { useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import { useLazyTrendingCoinsQuery } from '../Redux/trendingCoinsApi'
import '../Styles/trending-coins.scss'

const TrendingCoins:React.FC = () => {
    // trending coins section
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [ fetchTrendingCoins, { data = [] }] = useLazyTrendingCoinsQuery()

    useEffect(() => {
        fetchTrendingCoins('')
    }, [])

    if( data ) {
        return (
            <div className='trending'>
                <h2>Trending Coins
                </h2>
                <div className='trending-wrapper'>
                    {data.map( coin => (
                            <Link to={`/coin/${coin.item.id}`} key={coin.item.coin_id} className={`trend-coin ${theme}-trend`}>
                                <div className='logo'>
                                    <img src={coin.item.small} alt={coin.item.name}/>
                                </div>
                                <div className='coin-data'>
                                    <h3 className='name'>{coin.item.name}</h3>
                                    <div className='bottom-row'>
                                        <p className='symbol'>{coin.item.symbol}</p>
                                        <div className='small-logo'>
                                            <img src={"https://assets.coingecko.com/coins/images/1/small/bitcoin.png"} alt="/"/>
                                        </div>
                                        <p>{coin.item.price_btc.toFixed(7)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    
    } 
    else  return null 
}

export default TrendingCoins;

import React,{ useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi'
import { CoinsType,UnitCoinType } from '../Types/coins_types'
// import { savedCoin } from '../Types/saved_coins_types'
import { pushSavedCoin } from '../Redux/reduxSlice'
import '../CSS/unit-coin.scss'

type savedCoin = {
    id: string;
    name: string;
    rank: number;
    symbol: string;
    image: string;
    price: number;
}

const UnitCoin:React.FC<UnitCoinType> = ( {coin} ) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const saved_coins = useAppSelector(state => state.redux.saved_coins)
    const dispatch = useAppDispatch()
    const [coin_is_saved,setCoinIsSaved] = useState<boolean>(false)

    // const push = useAppSelector(state => state.redux.saved_coins)
    // console.log(`push ==> ${JSON.stringify(push)}`);
    // const [saved_coin,setSavedCoin] = useState<savedCoin>( {} as savedCoin)
    function createData (coin:CoinsType) {

        let filteredArray = saved_coins.filter(item => item.id === coin.id)
        if ( coin_is_saved === false) {
            const raw = {
                id: coin.id,
                name: coin.name,
                rank: coin.market_cap_rank,
                symbol: coin.symbol,
                image: coin.image,
                price: coin.current_price,
            }
            dispatch(pushSavedCoin(raw))
            setCoinIsSaved(true)
        }
    }

    return (
        <tr className={`tab-row ${theme}-tab-row`} >

            <td onClick={() => createData(coin)} className='star g-tab-hidden-640'>
                { coin_is_saved ? <AiFillStar/> : <AiOutlineStar/> }
            </td>

            <td className='rank g-tab-hidden-640'>{coin.market_cap_rank}</td>

            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div className='coin-link'>
                        <div className='img-wrapper'>
                            <img src={coin.image} alt={coin.id}/>
                        </div>
                        <p className='coin-name g-tab-hidden-425'>{coin.name}</p>
                    </div>
                </Link>
            </td>

            <td className='g-tab-hidden-756'>{coin.symbol.toUpperCase()}</td>

            <td>${coin.current_price.toLocaleString()}</td>

            <td className='percent-change'>
                <div className='wrapper'>
                    {coin.price_change_percentage_24h > 0 
                        ? <HiArrowNarrowUp className='arrow' color='green'/> 
                        : <HiArrowNarrowDown className='arrow' color='#f85904'/>
                    }
                    {coin.price_change_percentage_24h > 0 
                        ? <p style={{color: 'green'}}>{coin.price_change_percentage_24h.toFixed(4)}</p> 
                        : <p style={{color: '#f85904'}}>{coin.price_change_percentage_24h.toFixed(4)}</p>
                    }
                    <span className='percent'>%</span>
                </div>
            </td>

            <td>${coin.total_volume.toLocaleString()}</td>

            <td className='g-tab-hidden-640'>${coin.market_cap.toLocaleString()}</td>

            <td className='spark-line g-tab-hidden-576'>
                <Sparklines data={coin.sparkline_in_7d.price}>
                    {/* to paint the SparkLine depending on the data for 7 days */}
                    {coin.price_change_percentage_7d_in_currency > 0 
                        ? <SparklinesLine color="green" /> 
                        : <SparklinesLine color="red" /> 
                    }
                </Sparklines>
            </td>
        </tr>
    )
}

export default UnitCoin;


    // const [saved_coin,setSavedCoin] = useState<savedCoin>( {
    //     id: "bitcoin",
    //     name: "Bitcoin",
    //     symbol: "btc",
    //     image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    //     price: 21386,
    // })

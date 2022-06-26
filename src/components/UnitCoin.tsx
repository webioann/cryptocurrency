import React,{ useState,useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi'
import { CoinsType,UnitCoinType } from '../Types/coins_types'
import { watchListCoin } from '../Types/saved_coins_types'
import { db } from "../Firebase/firebase-config"; 
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore"; 
import '../CSS/unit-coin.scss'

const UnitCoin:React.FC<UnitCoinType> = ( {coin} ) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const [watchListCoins, setWatchListCoins] = useState<watchListCoin[]>([])
    const [chosenStar,setChosenStar] = useState<boolean>(false)

    // == get watch list from firebase and update watchListCoins 
    useEffect(() => {
        if( typeof user === "string" ) {
            onSnapshot(doc(db, user, "saved_coins"), (doc)=> {
                setWatchListCoins(doc.data()?.watch_list)
            })
        }
    }, [])

    // == check if coin is saved and check star
    useEffect(() => {
        let coin_in_array = watchListCoins.some(item => item.id === coin.id)
        coin_in_array ? setChosenStar(true) : setChosenStar(false)
    },[watchListCoins])

    const  putCoinInWatchList  = async (coin:CoinsType) => {
        if( typeof user === "string" &&  !chosenStar ) {
            setChosenStar(true)
            await updateDoc(doc(db, user, "saved_coins"), { watch_list: arrayUnion({
                id: coin.id,
                name: coin.name,
                rank: coin.market_cap_rank,
                symbol: coin.symbol,
                image: coin.image,
                price: coin.current_price,
            })});
        }
        else { alert("Please sign up for save coins on watch list") }
    }

    return (
        <tr className={`tab-row ${theme}-tab-row`} >
            { user ? (
            <td onClick={() => {putCoinInWatchList(coin)}} className='star g-tab-hidden-640'> 
                { chosenStar ? <AiFillStar/> : <AiOutlineStar/> }
            </td>
            ) : (
                <td className='star g-tab-hidden-640'>
                <AiOutlineStar/> 
            </td>
            ) }
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

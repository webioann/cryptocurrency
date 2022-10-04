import React,{ useState,useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import { HiArrowNarrowUp,HiArrowNarrowDown } from 'react-icons/hi'
import { CoinsType,UnitCoinType } from '../Types/coins.types'
import { IWatchListCoin } from '../Types/watchList.types'
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../Firebase/firebase-config"
import Tooltip from './Tooltip'
import '../CSS/coin.scss'

const Coin: React.FC<UnitCoinType> = ({ coin }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const currencyMark = useAppSelector(state => state.chart.currency.currencyMark)

    const [watchListCoins, setWatchListCoins] = useState<IWatchListCoin[]>([])
    const [chosenStar,setChosenStar] = useState<boolean>(false)
    const [showTooltip,setShowTooltip] = useState<boolean>(false)

    // == get watch list from firebase and update WatchList
    useEffect(() => {
        if( typeof user === "string" ) {
            onSnapshot(doc(db, user, "saved_coins"), (doc)=> {
                setWatchListCoins(doc.data()?.watch_list)
            })
        }
    }, [])

    //== check if coin is saved and check star
    useEffect(() => {
        let coin_in_array = watchListCoins.some(item => item.id === coin.id)
        coin_in_array ? setChosenStar(true) : setChosenStar(false)
    },[watchListCoins])

    const  updateWatchList  = async (coin:CoinsType) => {
        // save coin in watch list on firebase db
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
        // delete coin from watch list ===
        else if( typeof user === "string" &&  chosenStar ) {
            setChosenStar(false)
            try{
                const result = watchListCoins.filter(item => item.id !== coin.id)
                await updateDoc(doc(db, user, "saved_coins"), {
                    watch_list: result
                })
            } catch(error) { console.log(error) }
        }
    }

    return (
        <tr className={`tab-row ${theme}-tab-row`} >
            { user ? (
                <td onClick={() => {updateWatchList(coin)}} className='star'> 
                    { chosenStar ? <AiFillStar color='#f85904'/> : <AiOutlineStar/> }
                </td>
            ) : (
                <td className='star' 
                    onMouseOver={() => setShowTooltip(true)} 
                    onMouseLeave={() => setShowTooltip(false)}>
                    <AiOutlineStar/>
                    { showTooltip ? <Tooltip message={'pleace login for save coins'}/> : null } 
                </td>
            ) }
            <td className='rank g-tab-hidden-576'>{coin.market_cap_rank}</td>
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
            <td>
                {currencyMark}&#160;
                {coin.current_price.toLocaleString()}
            </td>
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
            <td className='g-tab-hidden-640'>
                {currencyMark}&#160;
                {coin.total_volume.toLocaleString()}
            </td>
            <td className='g-tab-hidden-640'>
                {currencyMark}&#160;
                {coin.market_cap.toLocaleString()}
            </td>
            <td className='spark-line'>
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

export default Coin;


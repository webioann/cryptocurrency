import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import { doc, onSnapshot, updateDoc  } from "firebase/firestore" 
import { db } from "../Firebase/firebase-config"
import { IWatchListCoin } from '../Types/watchList.types'
import '../CSS/watch-list.scss'

const WatchList: React.FC = () => {

    const user = useAppSelector(state => state.redux.user)
    const [watchListCoins, setWatchListCoins] = useState<IWatchListCoin[]>([])
    
    // get watch list from firebase and update watchListCoins 
    useEffect(() => {
        if( typeof user === "string" ) {
            onSnapshot(doc(db, user, "saved_coins"), (doc)=> {
                setWatchListCoins(doc.data()?.watch_list)
            })
        }
    }, [])
    
    const DeleteCoin = async (id: string) => {
        if( typeof user === "string" ) {
            try{
                const result = watchListCoins.filter(item => item.id !== id)
                await updateDoc(doc(db, user, "saved_coins"), {
                    watch_list: result
                })
            } catch(error) { console.log(error) }
        }
    }

    if( user ) {
        return (
            <div className='saved-coins-list'>
                {watchListCoins.length === 0 ? (
                    <div className='empty-list'>
                        <p className='text'>You don't have any coins saved. Please save a coin to add it to your watch list.</p>
                        <Link to='/' className='link-text'>Click here to search coins.</Link>
                    </div>
                ) : (
                    <ul className='saved-coins-list'>
                        {watchListCoins.map(( coin )=> (
                        <li className='list-item' key={coin.id}>
                            <h3 className='rank'># {coin.rank}</h3>
                            <Link to={`/coin/${coin.id}`}>
                                <div className='coin-item'>
                                    <div className='logo'>
                                        <img src={coin.image} alt='#'/>
                                    </div>
                                    <h3 className='name'>{coin.name}</h3>
                                    <div className='symbol'>({coin.symbol.toUpperCase()})</div>
                                </div>
                            </Link>
                            <h3 className='price'>${coin.price.toFixed(2)}</h3>
                            <div className='remove' onClick={() => { DeleteCoin(coin.id) }}>
                                <div className='remove-btn'>
                                    <IoClose className='icon'/>
                                    <h3 className='btn-text'>Remove</h3>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
    else return null

}

export default WatchList;
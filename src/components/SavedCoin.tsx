import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { removeSavedCoin,removeUser } from '../Redux/reduxSlice'
import { Link } from 'react-router-dom'
import { doc, deleteDoc, getDocs, collection  } from "firebase/firestore" 
import { db } from "../Firebase/firebase-config"
import { savedCoin }  from '../Types/saved_coins_types'
import '../CSS/saved-coin.scss'

const SavedCoin = () => {

    const saved_coins = useAppSelector(state => state.redux.saved_coins)
    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const dispatch = useAppDispatch()
    
    const DeleteCoin = async (id: string) => {
        if( typeof user === "string" ) {
            let coinDoc = doc(db, user, id)
            await deleteDoc(coinDoc);
        }
        dispatch(removeSavedCoin(id))
    }

    if( user ) {
        return (
            <div className='saved-coins-list'>
                {saved_coins.length === 0 ? (
                    <div className='empty-list'>
                        <p className='text'>You don't have any coins saved. Please save a coin to add it to your watch list.</p>
                        <Link to='/' className='link-text'>Click here to search coins.</Link>
                    </div>
                ) : (
                    <ul className='saved-coins-list'>
                        {saved_coins.map((coin, index )=> (
                        <li className='list-item' key={coin.id}>
                            <h3 className='rank'># {coin.rank}</h3>
                            <div className='coin'>
                                <div className='logo'>
                                    <img src={coin.image} alt='#'/>
                                </div>
                                <h3 className='name'>{coin.name}</h3>
                                <div className='symbol'>({coin.symbol.toUpperCase()})</div>
                            </div>
                            <h3 className='price'>${coin.price}</h3>
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
export default SavedCoin;
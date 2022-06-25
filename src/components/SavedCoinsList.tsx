import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { removeSavedCoin,removeUser } from '../Redux/reduxSlice'
import { Link } from 'react-router-dom'
import { doc, deleteDoc, onSnapshot, updateDoc  } from "firebase/firestore" 
import { db } from "../Firebase/firebase-config"
import { savedCoin }  from '../Types/saved_coins_types'
import '../CSS/saved-coins-list.scss'

const SavedCoinsList = () => {

    const saved_coins = useAppSelector(state => state.redux.saved_coins)
    const theme = useAppSelector(state => state.redux.theme_mode)

    const [watch_list_coins,setWLC] = useState<savedCoin[]>([])
    const user = useAppSelector(state => state.redux.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if( typeof user === "string" && saved_coins.length > 0) {
            onSnapshot(doc(db, user, "saved_coins"), (doc)=> {
                setWLC(doc.data()?.watch_list)
            })
        }
    }, [user])
    
    const DeleteCoin = async (id: string) => {
        if( typeof user === "string" ) {
            try{
                const result = watch_list_coins.filter(item => item.id !== id)
                await updateDoc(doc(db, user, "saved_coins"), {
                    watch_list: result
                })
            } catch(error) { console.log(error) }
        }
        dispatch(removeSavedCoin(id))
    }

    if( user ) {
        return (
            <div className='saved-coins-list'>
                {watch_list_coins.length === 0 ? (
                    <div className='empty-list'>
                        <p className='text'>You don't have any coins saved. Please save a coin to add it to your watch list.</p>
                        <Link to='/' className='link-text'>Click here to search coins.</Link>
                    </div>
                ) : (
                    <ul className='saved-coins-list'>
                        {watch_list_coins.map((coin, index )=> (
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
export default SavedCoinsList;
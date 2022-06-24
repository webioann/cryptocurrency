import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { removeSavedCoin,removeUser } from '../Redux/reduxSlice'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import { doc, updateDoc, deleteField, deleteDoc  } from "firebase/firestore"; 

import { db } from "../Firebase/firebase-config"; 
import '../CSS/account.scss'

const Account = () => {

    const saved_coins = useAppSelector(state => state.redux.saved_coins)
    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const deleteCoinFromDB = async (id: string) => {
        if( typeof user === "string" ) {
            let coinDoc = doc(db, user, "saved_coins", id)
            await deleteDoc(coinDoc);
        }
    }


    // const remove_db = async () => {
    //     if( typeof user === "string" ) {
    //         const savedCoinsRef = doc(db, user, 'BJ');
    //         await updateDoc(savedCoinsRef, {
    //             capital: deleteField()
    //         });
    //     }
    // }


    // const createDB = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, "saved_coins"), { ...saved_coins });
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (error) {
    //         console.error("Error adding document: ", error);
    //     }
    // }

    // const save_coins_on_signout = async () => {
    //     if( typeof user === "string" ) {
    //         await setDoc(doc(db, user, "saved_coins"), { 
    //         name: "Bitcoin",
    //         price: 34567,
    //     });
    //     }
    //     console.log(`user 2 ===> ${user}`);
    //     console.log(`saved_coins 2 ===> ${saved_coins}`);
    
    // }
    

    const User_Sign_Out = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        
        }).catch((error) => {
            console.log(error);
        })
    }


    if( user ) {
        return (
            <div className='g-page-container'>
                <div className={`account-page ${theme}-account`}>
                    <h1 className='account-header'>Account</h1>
    
                    <div className='wellcome-sign-out'>
                        <div className='wellcome'>
                            <h3 className='wellcome-user'>Wellcome
                                <span className='user-name'>{user}</span>
                            </h3>
    
                        </div>
                        <button onClick={User_Sign_Out}
                            className='sign-out'>Sing Out</button>
                    </div>
    
                    <div className='watch-list'>
                        <h2 className='list-header'>Watch list</h2>
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
                                        <div className='remove' onClick={() => {
                                            dispatch(removeSavedCoin(coin.id))
                                            }}>
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
                    </div>
    
                </div>
            </div>
        )
    
    }
    else return null
}

export default Account;
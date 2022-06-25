import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { removeSavedCoin,removeUser } from '../Redux/reduxSlice'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import { doc, deleteDoc, getDocs, collection  } from "firebase/firestore" 
import { db } from "../Firebase/firebase-config"
import { savedCoin }  from '../Types/saved_coins_types'
import '../CSS/account.scss'
import SavedCoin from './SavedCoin'

const Account = () => {

    const saved_coins = useAppSelector(state => state.redux.saved_coins)
    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()
    

    const User_Sign_Out = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            console.log(error);
        })
    }
    const DeleteCoin = async (id: string) => {
        if( typeof user === "string" ) {
            let coinDoc = doc(db, user, id)
            await deleteDoc(coinDoc);
        }
        dispatch(removeSavedCoin(id))
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
                        <SavedCoin/>
                    </div>
    
                </div>
            </div>
        )
    
    }
    else return null
}

export default Account;
import React from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import SavedCoinsList from './SavedCoinsList'
import { removeUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth"
import { auth } from "../Firebase/firebase-config"
import '../CSS/account.scss'

const Account = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const User_Sign_Out = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => { console.log(error) })
    }
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
                    <SavedCoinsList/>
                </div>
            </div>
        </div>
    )
}
export default Account;
import React from 'react'
import { useAppSelector } from '../Redux/store'
import WatchList from './WatchList'
import SignOut from './SignOut'
import '../CSS/account.scss'

const Account = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const user = useAppSelector(state => state.redux.user)

    if ( user !== null ) {
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
                        <SignOut/>
                    </div>
                    <div className='watch-list'>
                        <h2 className='list-header'>Watch list</h2>
                        <WatchList/>
                    </div>
                </div>
            </div>
        )
    } else { return null }
}

export default Account;
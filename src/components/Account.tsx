import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'

import '../CSS/account.scss'

const Account = () => {

    // const [savedCoins,setSavedCoins] = useState([])
    const savedCoins = useAppSelector(state => state.redux.temporary_data)

    return (
        <div className='g-page-container'>
            <div className='accountpage'>

                <h1 className='account-header'>Account</h1>

                <div className='wellcome-sing-out'>
                    <div>
                        <h3>Wellcome USER_NAME</h3>
                    </div>
                    <div>
                        <button>Sing Out</button>
                    </div>
                </div>

                <div className='watch-list'>
                    <h3 className='list-header'>Watch list</h3>
                    <div className='saved-coins-list'>
                        {savedCoins.length === 0 ? (
                            <p className='empty-list'>EMPTY</p>
                        ) : (
                            <ul>
                                {savedCoins.map(coin => (
                                <li className='list-iten'>
                                    <div>Rank #</div>
                                    <div>
                                        <div>
                                            <img src='' alt='#'/>
                                        </div>
                                        <div>Bitcoin</div>
                                        <div>(BTC)</div>
                                    </div>
                                    <div>Price</div>
                                    <div>
                                        <div>
                                            <IoClose/>
                                            <p>Remove</p>
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

export default Account;
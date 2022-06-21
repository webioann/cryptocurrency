import React, { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { Link } from 'react-router-dom'

import '../CSS/account.scss'

const Account = () => {

    const savedCoins = useAppSelector(state => state.redux.temporary_data)

    return (
        <div className='g-page-container'>
            <div className='account-page'>

                <h1 className='account-header'>Account</h1>

                <div className='wellcome-sing-out'>
                    <div className='wellcome'>
                        <h3>Wellcome USER_NAME</h3>
                    </div>
                    <div className='sing-out'>
                        <button>Sing Out</button>
                    </div>
                </div>

                <div className='watch-list'>
                    <h3 className='list-header'>Watch list</h3>
                    <div className='saved-coins-list'>
                        {savedCoins.length === 0 ? (
                            <div className='empty-list'>
                                <p className='text'>You don't have any coins saved. Please save a coin to add it to your watch list.</p>
                                <Link to='/'  className='link-text'>Click here to search coins.</Link>
                            </div>
                        ) : (
                            <ul className='saved-coins-list'>
                                {savedCoins.map(coin => (
                                <li className='list-item' key={coin.id}>
                                    <div>Rank # {coin.rank}</div>
                                    <div className='coin'>
                                        <div className='logo'>
                                            <img src={coin.image} alt='#'/>
                                        </div>
                                        <h2 className='name'>Bitcoin</h2>
                                        <div>(BTC)</div>
                                    </div>
                                    <h3>${coin.price}</h3>
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
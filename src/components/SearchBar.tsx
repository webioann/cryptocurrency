import React, { useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { useLazySearchCoinsQuery } from '../Redux/coinsApi'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import '../CSS/search-bar.scss'

const SearchBar = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [value,setValue] = useState<string>('')
    const [ fetchSearchList, { data: coinsList = [] }] = useLazySearchCoinsQuery()

    return (
        <div className='search-bar'>
            <div className={`searcher searcher-${theme}`}>
                <input className={`input input-${theme}`}
                    type='text' 
                    placeholder='Search a coin...'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                { value.length < 2 
                    ? <FaSearch className='icon'/> 
                    : <FaSearch className='icon filled' onClick={() => {coinsList.length < 1 ? fetchSearchList(value) : setValue('')}}/>
                }
                { coinsList.length !== 0 ? (
                    <ul className={`result result-${theme}`}>
                    { coinsList.map((coin) => (
                        <Link to={`/coin/${coin.id}`} key={coin.id} onClick={() => setValue('')}>
                            <li className={`one-coin coin-${theme}`}>
                                <div className='img-wrapper'>
                                    <img src={coin.thumb} alt={coin.id}/> 
                                </div>
                                <p className='name'>{coin.name}</p>
                                <span>#{coin.market_cap_rank}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
                ) : null }
            </div>
        </div>
    )
}

export default SearchBar;

// { value !== "" 
// ? <VscChromeClose className='icon bigger' onClick={clearInput}/> 
// : <FaSearch className='icon'/>
// }
                    // onFocus={() => fetchSearchList(value)}

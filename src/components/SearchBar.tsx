import React, { useState } from 'react'
import { useAppSelector } from '../Redux/store'
import { useLazySearchCoinsQuery } from '../Redux/coinsApi'
import { Link } from 'react-router-dom'
import { CoinsSearchType } from "../Types/coinsSearch.types"
import { FaSearch } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import '../CSS/search-bar.scss'

const SearchBar = () => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [value,setValue] = useState<string>('')
    const [filteredData, setFilteredData] = useState<CoinsSearchType[] | []>([])
    const [ fetchSearchList, { data: coinsList = [] }] = useLazySearchCoinsQuery()

    const coinListFilter = (event: React.FormEvent<HTMLInputElement>) => {
        let searchWord = event.currentTarget.value
        let regEx = new RegExp(`\\b${searchWord}`, 'gmi')
        setValue(searchWord)
        if ( searchWord !== "" ) { 
            const newFilter = coinsList.filter((item) => {
                return regEx.test(item.name.toLowerCase())
            })
            setFilteredData(newFilter);
        } else {
            setFilteredData([]);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setValue("");
    }

    return (
        <div className='search-bar'>
            <div className={`searcher searcher-${theme}`}>
                <input className={`input input-${theme}`}
                    type='text' 
                    placeholder='Search a coin...'
                    value={value}
                    onChange={coinListFilter}
                    onFocus={() => fetchSearchList(value)}
                />
                { value !== "" 
                    ? <VscChromeClose className='icon bigger' onClick={clearInput}/> 
                    : <FaSearch className='icon'/>
                }
                { filteredData.length !== 0 ? (
                    <ul className={`result result-${theme}`}>
                    {filteredData.map((coin) => (
                        <Link to={`/coin/${coin.id}`} key={coin.id}>
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


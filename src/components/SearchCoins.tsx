import React,{ useState } from 'react'
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { putInputValue } from '../Redux/reduxSlice'
import { PropsChildrenType } from '../Types/react_types'

import '../CSS/search-coins.scss'

const SearchCoins:React.FC<PropsChildrenType> = ({ children }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const dispatch = useAppDispatch()
    const [value,setValue] = useState<string>('')

    const searchCoins = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        dispatch(putInputValue(event.currentTarget.value))

    }
    const onSubmited = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(!value) return;
        setValue('')
    }

    return (
        <div className='top-panel'>
            <div className={`coin-search ${theme}-search`}>
                <h4 className='search-title'>Search Crypto Currency</h4>
                <form className='form' onSubmit={onSubmited}>
                    <input 
                        className={`input-${theme}`}
                        type='text' 
                        placeholder='Search a coins'
                        value={value}
                        onChange={searchCoins}
                    />
                </form>
            </div>
            <div className='per-page-box'>
                { children }
            </div>
        </div>
    )
}

export default SearchCoins;


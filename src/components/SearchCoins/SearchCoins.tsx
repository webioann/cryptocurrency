import React,{ useState } from 'react'
import { useAppDispatch,useAppSelector } from '../../Redux/store'
import { putInputValue } from '../../Redux/reduxSlice'
import './search-coins.scss'

const SearchCoins:React.FC = () => {

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
        <div className={`coin-search ${theme}`}>
            <h2>Search Crypto Currency</h2>
            <form className={`form ${theme}`} onSubmit={onSubmited}>
                <input 
                    className={`input ${theme}`}
                    type='text' 
                    placeholder='Search a coins'
                    value={value}
                    onChange={searchCoins}
                />
            </form>
        </div>
    )
}

export default SearchCoins;


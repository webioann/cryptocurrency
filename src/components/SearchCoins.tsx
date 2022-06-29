import React,{ useState } from 'react'
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { putInputValue } from '../Redux/reduxSlice'
import '../CSS/search-coins.scss'

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
        <div className='top-panel'>
            <div className={`coin-search ${theme}-search`}>
                <h3 className='search-title'>Search coin</h3>
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
        </div>
    )
}

export default SearchCoins;


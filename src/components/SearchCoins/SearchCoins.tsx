import React,{ useState,useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../../Redux/store'
import { getSerchedCoins } from '../../Redux/reduxSlice'
import './search-coins.scss'

const SearchCoins:React.FC = () => {

    const coins_data = useAppSelector(state => state.redux.coins_data)
    const dispatch = useAppDispatch()
    const [value,setValue] = useState<string>('')

    const searchCoins = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        let found = coins_data.filter((coin) => {coin.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())})
        dispatch(getSerchedCoins(found))
    }

    // useEffect(() => {
    //     if ( value === '' ) {
    //         dispatch(getSerchedCoins(coins_data))
    //     }
    //     else {
    //         let found = coins_data.filter((coin) => {coin.name.toLowerCase().includes(value.toLowerCase())})
    //         dispatch(getSerchedCoins(found))
    //     }
    // },[value])

    // useEffect(() => {
        let found = coins_data.filter((coin) => {coin.name.toLowerCase().includes(value.toLowerCase())})

    //     if ( value === '' ) {
    //         dispatch(getSerchedCoins(coins_data))
    //     }
    //     else {
    //         let found = coins_data.filter((coin) => {coin.name.toLowerCase().includes(value.toLowerCase())})
    //         dispatch(getSerchedCoins(found))
    //     }
    // },[value])

    return (
        <div className='coin-search'>
            <h2>Search Crypto Currency</h2>
            <form>
                <input 
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

// {coins.filter((coin) => {
//       if (value === '') {
//         return coin;
//       } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
//         return coin;
//       }
//     })
//     .map((coin) => (
//       <CoinItem key={coin.id} coin={coin} />
//     ))}
// coins_data.filter((coin) => {
//     if (value === '') {
//         dispatch(getSerchedCoins(coins_data))
//     }
//     else if (coin.name.toLowerCase().includes(value.toLowerCase())) {
//         dispatch(getSerchedCoins(coin))

//     }
// })

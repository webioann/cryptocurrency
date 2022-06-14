import React from 'react'
import { useAppSelector } from '../../Redux/store'
import './coin-table-item.scss'

const CoinTableItem:React.FC = () => {

    const coins = useAppSelector(state => state.redux.coins)

    return (
        <tr>fffff
        </tr>
    )
}
export default CoinTableItem;
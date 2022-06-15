import React,{ useState,useEffect } from 'react'
import { CoinsType } from '../../TYPES'
import { useAppDispatch } from '../../Redux/store'
import axios from "axios"
import { getCoins } from '../../Redux/reduxSlice'
import Search_Coins from '../CoinSearch/CoinSearch'
import PageContainer from '../PageContainer/PageContainer'
import Table_Coins from '../TableCoins/TableCoins'

const CoinPage:React.FC = () => {

    const dispatch = useAppDispatch()
    const [coins,setCoins] =useState<CoinsType[]>([])
    
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    
    useEffect(() => {
        axios.get(url)
        .then( respons => {
            console.log(respons.data);
            setCoins(respons.data)
            dispatch(getCoins(respons.data))
        })
    },[url])
    
    console.log(coins);
    

    return (
        <PageContainer>
            <Search_Coins/>
            <Table_Coins/>
        </PageContainer>
    )
}

export default CoinPage;
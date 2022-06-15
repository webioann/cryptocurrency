import React,{ useState,useEffect } from 'react'
import { CoinsType } from '../../TYPES'
import { useAppDispatch } from '../../Redux/store'
import axios from "axios"
import { getCoins } from '../../Redux/reduxSlice'
import CoinSearch from '../CoinSearch/CoinSearch'
import PageContainer from '../PageContainer/PageContainer'
import CoinsTable from '../CoinsTable/CoinsTable'

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
            <CoinSearch/>
            <CoinsTable/>
        </PageContainer>
    )
}

export default CoinPage;
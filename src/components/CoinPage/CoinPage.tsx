import React,{ useState,useEffect } from 'react'
import CoinSearch from '../CoinSearch/CoinSearch'
import PageContainer from '../PageContainer/PageContainer'
import CoinsTable from '../CoinsTable/CoinsTable'
import CoinTableItem from '../CoinTableItem/CoinTableItem'
// import { useAppSelector } from '../../Redux/store'
// import axios from "axios"
// import { useAppDispatch } from '../../Redux/store'
// import { getCoins } from '../../Redux/reduxSlice'

const CoinPage:React.FC = () => {

    return (
        <PageContainer>
            <CoinSearch/>
            <CoinsTable/>
        </PageContainer>
    )
}

export default CoinPage;
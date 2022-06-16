import React,{ useState,useEffect } from 'react'
import SearchCoins from '../SearchCoins/SearchCoins'
import PageContainer from '../PageContainer/PageContainer'
import Table_Coins from '../TableCoins/TableCoins'
import TrendCoins from '../TrendCoins/TrendCoins'

const CoinPage:React.FC = () => {

    return (
        <PageContainer>
            <SearchCoins/>
            <Table_Coins/>
            <TrendCoins/>
        </PageContainer>
    )
}

export default CoinPage;
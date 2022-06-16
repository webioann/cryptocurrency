import React,{ useState,useEffect } from 'react'
import SearchCoins from '../SearchCoins/SearchCoins'
import PageContainer from '../PageContainer/PageContainer'
import Table_Coins from '../TableCoins/TableCoins'

const CoinPage:React.FC = () => {

    return (
        <PageContainer>
            <SearchCoins/>
            <Table_Coins/>
        </PageContainer>
    )
}

export default CoinPage;
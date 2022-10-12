import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import CoinDetails from './CoinDetails'
import PageContainer from './PageContainer'
import NotFounded from './NotFounded'
import Container from './Container'
import SearchBar from './SearchBar'
import CoinsTable from './CoinsTable'
import TrendingCoins from './TrendingCoins'
import Pagination from './Pagination'
import News from './News'
import { useLocalStorage } from '../hooks/useLocalStorage'
import '../CSS/app.scss'

const  App: React.FC = () => {

  useLocalStorage();

  
    
  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <PageContainer>
              <SearchBar/>
              <CoinsTable/>
              <Pagination/>
              <TrendingCoins/>
          </PageContainer>
        }/>
        <Route path='/news' element={
          <PageContainer>
            <h2 className='news-page-title'>CRYPTO NEWS</h2>
            <News category='cryptocurrency' count={12}/>
          </PageContainer>
        }/>
        <Route path="/coin/:coinId" element={<CoinDetails/>}>
          <Route path=':coinId'/>
        </Route>
        <Route path="*" element={<NotFounded/>}/>
      </Routes>
    </Container>
  )
}

export default App;

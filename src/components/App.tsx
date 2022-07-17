import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import CoinFullInfo from './CoinFullInfo'
import HomePage from './HomePage'
import Account from './Account'
import SignIn from './SignInEmail'
import SignUp from './SignUpEmail'
import NotFounded from './NotFounded'
import Container from './Container'
import SearchCoins from './SearchCoins'
import Table_Coins from './TableCoins'
import TrendCoins from './TrendCoins'
import Pagination from './Pagination'
import { useLocalStorage } from '../hooks/useLocalStorage'
import '../CSS/app.scss'

const  App:React.FC = () => {
  
  useLocalStorage();

  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <HomePage>
              <SearchCoins/>
              <Table_Coins/>
              <Pagination/>
              <TrendCoins/>
          </HomePage>
        }/>
        <Route path="/coin/:coinId" element={<CoinFullInfo/>}>
          <Route path=':coinId'/>
        </Route>
        <Route path="/account" element={<Account/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<NotFounded/>}/>
      </Routes>
    </Container>
  )
}

export default App;

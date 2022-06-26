import React,{ useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from './Navbar'
import CoinFullInfo from './CoinFullInfo'
import HomePage from './HomePage'
import Account from './Account'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NotFounded from './NotFounded'
import Container from './Container'
// ==== Redux axios and ect ====
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { getFetchCoins } from '../Redux/reduxSlice'
import axios from "axios"
// -------------------------------------------
import SearchCoins from './SearchCoins'
import Table_Coins from './TableCoins'
import TrendCoins from './TrendCoins'
import '../CSS/app.scss'

const  App:React.FC = () => {

  const dispatch = useAppDispatch()
  // ===== get coin data =============
  const coins_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1y"
  useEffect(() => {
      axios.get(coins_url)
      .then( respons => {
        dispatch(getFetchCoins(respons.data))
      })
  },[coins_url])

  // ===== save color theme mode in Localstorage (.getItem work in Redux) ====
  const theme = useAppSelector(state => state.redux.theme_mode)
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  },[theme])

  // ===== save current user in Localstorage (.getItem work in Redux) ====
  const user = useAppSelector(state => state.redux.user)
  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user))
  },[user])

  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <HomePage>
              <SearchCoins/>
              <Table_Coins/>
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

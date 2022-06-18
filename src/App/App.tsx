import React,{ useState,useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import CoinPage from '../components/CoinPage/CoinPage'
import HomePage from '../components/HomePage/HomePage'
import Account from '../components/Account/Account'
import SingIn from '../components/SingIn/SingIn'
import SingUp from '../components/SingUp/SingUp'
import NotFounded from '../components/NotFounded/NotFounded'
import Container from '../components/Container/Container'
// ==== Redux axios and ect ====
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { getFetchCoins } from '../Redux/reduxSlice'
import axios from "axios"
import { CoinsType } from '../Types/coins_types'
import './app.scss'
// -------------------------------------------
import SearchCoins from '../components/SearchCoins/SearchCoins'
import Table_Coins from '../components/TableCoins/TableCoins'
import TrendCoins from '../components/TrendCoins/TrendCoins'
// -----------------------------------------

const  App:React.FC = () => {

  const dispatch = useAppDispatch()

  // ===== get coin data =============
  const [coins,setCoins] =useState<CoinsType[]>([])
  const coins_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1y"
  
  useEffect(() => {
      axios.get(coins_url)
      .then( respons => {
          setCoins(respons.data)
          dispatch(getFetchCoins(respons.data))
      })
  },[coins_url])
  // ------------------------------------------------

  // ===== save color theme mode in Localstorage ====
  const theme = useAppSelector(state => state.redux.theme_mode)
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  },[theme])
  // ------------------------------------------------

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
        <Route path="/coin/:coinId" element={<CoinPage/>}>
          <Route path=':coinId'/>
        </Route>
        <Route path="/account" element={<Account/>}/>
        <Route path="/singin" element={<SingIn/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="*" element={<NotFounded/>}/>
      </Routes>
    </Container>
  )
}
export default App;

  // const coin_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"

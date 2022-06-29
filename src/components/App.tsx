import React,{ useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
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
// ==== Redux axios and ect ====
import { useAppDispatch,useAppSelector } from '../Redux/store'
import { getCoinsData } from '../Redux/reduxSlice'
import axios from "axios"
import '../CSS/app.scss'

const  App:React.FC = () => {
  
  const dispatch = useAppDispatch()
  // ===== get coin data =============
  const currentPage = useAppSelector(state => state.pagin.currentPage)

  const coins_url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1y`
  useEffect(() => {
      axios.get(coins_url)
      .then( respons => {
        dispatch(getCoinsData(respons.data))
      })
  }, [currentPage])

  // ===== save color theme mode in Localstorage (.getItem work in Redux) ====
  const theme = useAppSelector(state => state.redux.theme_mode)
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  },[theme])
    // ===== save user photo in Localstorage (.getItem work in Redux) ====
  const user_photo = useAppSelector(state => state.redux.user_photo)
  useEffect(() => {
    if ( user_photo !== null ) {
      window.localStorage.setItem("userPhoto", user_photo)
    }
  },[user_photo])

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

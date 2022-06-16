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
import { useAppDispatch } from '../Redux/store'
import { getFetchCoins } from '../Redux/reduxSlice'
import axios from "axios"
import { CoinsType } from '../TYPES'


import './app.scss'

const  App:React.FC = () => {

  const dispatch = useAppDispatch()
  const [coins,setCoins] =useState<CoinsType[]>([])
  
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  
  useEffect(() => {
      axios.get(url)
      .then( respons => {
          setCoins(respons.data)
          dispatch(getFetchCoins(respons.data))
      })
  },[url])
  
  console.log(coins);


  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/coinpage" element={<CoinPage/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/singin" element={<SingIn/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="*" element={<NotFounded/>}/>
      </Routes>
    </Container>
  )
}
export default App;


import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import CoinPage from '../components/CoinPage/CoinPage'
import HomePage from '../components/HomePage/HomePage'
import Account from '../components/Account/Account'
import SingIn from '../components/SingIn/SingIn'
import SingUp from '../components/SingUp/SingUp'
import NotFounded from '../components/NotFounded/NotFounded'
import Container from '../components/Container/Container'
import './app.scss'

const  App:React.FC = () => {

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


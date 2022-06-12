import React,{ useRef,useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
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

  const test = useAppSelector(state => state.redux.test)

  return (
    <Container>
      <Navbar>
        <h2 className='logo'>Cryptocurrency ts == {test}</h2>
        <Link to="/sing-in" className='link'>Sing In</Link>
        <Link to="/sing-up" className='link'>Sing Up</Link>
        <Link to="/coin-page" className='link'>Coin page</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/coin-page" element={<CoinPage/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/sing-in" element={<SingIn/>}/>
        <Route path="/sing-up" element={<SingUp/>}/>
        <Route path="*" element={<NotFounded/>}/>
      </Routes>
    </Container>
  )
}
export default App;


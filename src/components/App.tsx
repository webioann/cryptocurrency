import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import CoinDetails from './CoinDetails'
import HomePage from './HomePage'
import NotFounded from './NotFounded'
import Container from './Container'
import SearchBar from './SearchBar'
import CoinsTable from './CoinsTable'
import TrendingCoins from './TrendingCoins'
import Pagination from './Pagination'
import { useLocalStorage } from '../hooks/useLocalStorage'
import '../CSS/app.scss'

const  App: React.FC = () => {

  useLocalStorage();
  
return (
  <Container>
    <Navbar/>
    <Routes>
      <Route path="/" element={
        <HomePage>
            {/* <SearchBar/> */}
            <CoinsTable/>
            <Pagination/>
            <TrendingCoins/>
        </HomePage>
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
{/* <Route path="/account" element={<Account/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/> */}

// return (
//   <Container>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={
//         <HomePage>
//             {/* <SearchBar/> */}
//             <CoinsTable/>
//             <Pagination/>
//             <TrendingCoins/>
//         </HomePage>
//       }/>
//       <Route path="/coin/:coinId" element={<CoinDetails/>}>
//         <Route path=':coinId'/>
//       </Route>
//       <Route path="/account" element={<Account/>}/>
//       <Route path="/signin" element={<SignIn/>}/>
//       <Route path="/signup" element={<SignUp/>}/>
//       <Route path="*" element={<NotFounded/>}/>
//     </Routes>
//   </Container>
// )

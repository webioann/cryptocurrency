import React, { useEffect, useRef } from 'react'
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
  //  == to count renders ==
  // const render = useRef(0)
  // useEffect(() => {
  //   render.current++
  //   console.log(`RENDER NUMBER ==> ${render.current}`);
  // })
  
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

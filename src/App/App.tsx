import React,{ useRef,useEffect } from 'react'
import { useAppSelector } from '../Redux/store'

const  App:React.FC = () => {

  const test = useAppSelector(state => state.redux.test)

  return (
    <div>CRYPTOCURRENCY WITH ts == {test}</div>
  )
}
export default App;


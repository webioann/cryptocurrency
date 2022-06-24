import React,{useState,useEffect} from 'react'
import { db } from '../Firebase/firebase-config'
import { getDocs, collection, doc } from 'firebase/firestore'

function Test() {

    const [savedCoins,setSavedCoins] = useState([])
    const coinCollectionRef = collection( db,"saved_coins" )
    
    useEffect(() => {
        const getSavedCoins = async () => {
            const data = await getDocs(coinCollectionRef)
            // setSavedCoins(data.docs.map({...doc.data()}))
            setSavedCoins(data.docs.map({...doc.data()}))
        }
        getSavedCoins()
    },[])
    console.log(`sc ===> ${savedCoins[0].id}`)
    return (
        <div>test {savedCoins.map(coin =>
            (<span>{coin.id}</span>)
        )}</div>
    )
}

export default Test
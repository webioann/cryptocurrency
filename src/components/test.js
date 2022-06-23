import React,{useState,useEffect} from 'react'
import axios from "axios"

function Test() {

    const [data,setData] = useState('')
    const url = "https://cryptocurrency-cea64-default-rtdb.europe-west1.firebasedatabase.app/"
    
    useEffect(() => {
        axios.get(url)
        .then( respons => {
            setData(respons.data)
            console.log(respons.data);
    })
    },[url])

    return (
        <div>test {data}</div>
    )
}

export default Test
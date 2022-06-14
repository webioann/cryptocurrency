import React, { useState,useEffect } from "react"
import axios from "axios"

interface URL { url: string }

export const useFetchCoinsData = () => {

    const [coin_data,setData] =useState([])

    useEffect(() => {

    },[])


    return { coin_data }
};







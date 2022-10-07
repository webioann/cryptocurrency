import { useState, useEffect } from "react"
import { useAppSelector } from '../Redux/store'

interface dataInCurrency {
    usd: number
    eur: number
    jpy: number
    uah: number
}

export const useExchanger = ( data: dataInCurrency ) => {

    const currency = useAppSelector(state => state.chart.currency.currentCurrency)
    const [exData, setExData] = useState<number>(0)

    useEffect(() => {
        if( data ) {
            if( currency === 'usd' ) { setExData(data.usd) }
            if( currency === 'eur' ) { setExData(data.eur) }
            if( currency === 'jpy' ) { setExData(data.jpy) }
            if( currency === 'uah' ) { setExData(data.uah) }
        }
        else { setExData(0) }
    }, [currency])

    return exData
};
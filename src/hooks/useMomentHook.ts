import { useState, useEffect } from 'react'

const useMoment = ( ) => {
    const [moment, setMoment] = useState<string>('')

    // useEffect(() => {
        let past = Date.parse("2022-10-10T15:56:00.0000000Z")
        let nowTime = new Date()
        let now = Date.parse(nowTime.toString())
        let result = now - past
    
        if(result >= 3600000) {
            setMoment(`an ${result / 60000} minute ago`)
        }
        if(result >= 172800000) {
            setMoment(`an ${result / 3600000} hours ago`)
        }    
    // }, [datePublished])

    return moment
}
export default useMoment;

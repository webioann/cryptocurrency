import { useState, useEffect } from 'react'

const useMoment = (datePublished: string ) => {
    const [moment, setMoment] = useState<string>('')

    useEffect(() => {
        let past = Date.parse(datePublished)
        let nowTime = new Date()
        let now = Date.parse(nowTime.toString())
        let result = now - past
    
        if(result >= 3600000) {
            setMoment(`an ${result / 60000} minute ago`)
        }
        if(result >= 172800000) {
            setMoment(`an ${result / 3600000} hours ago`)
        }    
    }, [datePublished])

    return moment
}
export default useMoment;

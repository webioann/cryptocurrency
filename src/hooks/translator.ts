import { useState,useEffect } from "react"
import { useAppSelector } from '../Redux/store'

type propsObject = {
    eng: string;
    ukr: string;
}

const translator = ( key: propsObject ) => {

    const lang = useAppSelector((state) => state.pagin.lang)
    const [translation,setTranslation] = useState('')
    useEffect(() => {
        lang === 'eng' ? setTranslation(key.eng) : setTranslation(key.ukr)
    },[lang])
    return translation
}

export default translator;

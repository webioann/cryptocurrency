import { useEffect } from "react"
import { useAppSelector } from '../Redux/store'

export const useLocalStorage = () => {

    const { theme_mode } = useAppSelector(state => state.redux)
    // hook to save in local storage color theme value
    useEffect(() => {
        window.localStorage.setItem("theme", theme_mode)
    },[theme_mode])

};

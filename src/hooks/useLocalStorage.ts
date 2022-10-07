import { useEffect } from "react"
import { useAppSelector } from '../Redux/store'

export const useLocalStorage = () => {

    const { theme_mode } = useAppSelector(state => state.redux)

    useEffect(() => {
        window.localStorage.setItem("theme", theme_mode)
    },[theme_mode])

    // useEffect(() => {
    //     if ( user_photo !== null ) {
    //         window.localStorage.setItem("userPhoto", user_photo)
    // }
    // },[user_photo])

    // useEffect(() => {
    //     window.localStorage.setItem("user", JSON.stringify(user))
    // },[user])
};

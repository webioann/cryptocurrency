import React,{ useState } from 'react'
import { useAppSelector, useAppDispatch } from '../Redux/store'
import { removeUser } from '../Redux/reduxSlice'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import '../CSS/button.scss'

const SignOut:React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    // const user = useAppSelector(state => state.redux.user)
    // const [active,setActive] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const signOutUser = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });    
    }

    return (
        <div onClick={ signOutUser } className={`link ${theme}-sign-out`}>
            Sing Out
        </div>
    )
}

export default SignOut;
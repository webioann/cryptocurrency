import React from 'react'
import { useAppSelector, useAppDispatch } from '../Redux/store'
import { removeUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import '../CSS/sign-google.scss'

const SignOut = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
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
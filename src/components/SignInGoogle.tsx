import React, { useState,useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser, setUserPhoto } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
// === firebase ===
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { auth, provider } from '../Firebase/firebase-config'
import '../CSS/button.scss'

const SignInGoogle:React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(putUser(result.user.email))
            dispatch(setUserPhoto(result.user.photoURL))
        })
        .catch((error) => {console.error(error)} )
        navigate('/')
    }
    
    return (
        <button className='btn' onClick={logInWithGoogle}>
            Login with Google 
        </button>
    )
}
export default SignInGoogle;


import React, { useState,useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { putUser, setUserPhoto } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
// === firebase ===
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore'
import { auth, db, provider } from '../Firebase/firebase-config';
import '../CSS/button.scss'

const SignUpGoogle:React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(putUser(result.user.email))
            dispatch(setUserPhoto(result.user.photoURL))
            const user = result.user.email 
            if( typeof user === 'string' ) {
                setDoc(doc(db, user, "saved_coins"), { watch_list: [] })
            }
        })
        .catch((error) => {console.error(error)} )
        navigate('/')
    }
    
    return (
        <button className='btn' onClick={signInWithGoogle}>
            Google Sign Up 
        </button>
    )
}
export default SignUpGoogle;


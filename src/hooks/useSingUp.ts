import React, { useState,useEffect } from 'react'
import { useAppDispatch } from '../Redux/store'
import { putNewUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const useSingUp = ( email: string, password: string) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        console.log(`email => ${JSON.stringify(user)}`);
        dispatch(putNewUser(user.email))
        navigate("/account")
    })
    .catch((error) => {
        console.log(error);
    });

};



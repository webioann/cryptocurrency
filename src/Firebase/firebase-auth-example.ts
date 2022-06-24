import { 
    getAuth,
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { useAppDispatch } from '../Redux/store'
import { putUser, removeUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    export const Sing_Up = (event: React.FormEvent, email: string, password: string) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email))
            navigate("/account")
        })
        .catch((error) => {console.log(error);})
    };

    export const Sing_In = (event: React.FormEvent, email: string, password: string) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(putUser(user.email))
            navigate('/')
        })
        .catch((error) => {console.log(error);});    
    };
    
    export const Sing_Out = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });    
    };

import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins.types'

type themePayload = {
    payload: string
}

type InitialStateType = {
    theme_mode:  'light' | 'dark' | string
    coins_data: CoinsType[]
    user: string | null
    user_photo: string | null
    mobile_menu_is_active: boolean
}
// get state from LocalStorage  (setItem on App.tsx) ====
const storedTheme = localStorage.getItem('theme') || 'dark';

const storedUserPhoto = localStorage.getItem('userPhoto') || null;

const getUser: string | null  = localStorage.getItem("user");
let storedUser;
if ( typeof getUser === 'string' ) {
    storedUser = JSON.parse(getUser)
}
else { storedUser = null }

const initialState: InitialStateType = {
    theme_mode: storedTheme ,
    coins_data: [],
    user: storedUser,
    user_photo: storedUserPhoto,
    mobile_menu_is_active: false
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installThemeMode: (state,actions) => { state.theme_mode = actions.payload },
        getCoinsData: (state,actions) => {state.coins_data = actions.payload},
        putUser: (state,actions) => {state.user = actions.payload},
        removeUser: (state) => {state.user = null},
        setUserPhoto: (state,actions) => {state.user_photo = actions.payload},
        deleteUserPhoto: (state) => {state.user_photo = null},
        closeMobileMenu: (state) => {state.mobile_menu_is_active = false},
        openMobileMenu: (state) => {state.mobile_menu_is_active = true}
    }
});

export const { 
    installThemeMode,
    getCoinsData,
    putUser,
    removeUser,
    setUserPhoto,
    deleteUserPhoto,
    closeMobileMenu,
    openMobileMenu
} = reduxSlice.actions;

export default reduxSlice.reducer;


import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    input_value: string;
    user: string | null;
    user_photo: string | null;
}
// get state from LocalStorage  (setItem on App.tsx) ====
const storedTheme = localStorage.getItem('theme') || "dark";

const storedUserPhoto = localStorage.getItem('userPhoto') || null;

const getUser: string | null  = localStorage.getItem("user");
let storedUser;
if ( typeof getUser === 'string' ) {
    storedUser = JSON.parse(getUser)
}
else { storedUser = null }

const initialState:InitialStateType = {
    theme_mode: storedTheme,
    coins_data: [],
    input_value: "",
    user: storedUser,
    user_photo: storedUserPhoto,
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installThemeMode: (state,actions) => { state.theme_mode = actions.payload },
        getCoinsData: (state,actions) => {state.coins_data = actions.payload},
        putInputValue: (state,actions) => {state.input_value = actions.payload},
        putUser: (state,actions) => {state.user = actions.payload},
        removeUser: (state) => {state.user = null},
        setUserPhoto: (state,actions) => {state.user_photo = actions.payload},
        deleteUserPhoto: (state) => {state.user_photo = null},
    }
});

export const { 
    installThemeMode,
    getCoinsData,
    putInputValue,
    putUser,
    removeUser,
    setUserPhoto,
    deleteUserPhoto,

} = reduxSlice.actions;

export default reduxSlice.reducer;


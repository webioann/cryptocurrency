import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    full_coins_data: CoinsType[];
    input_value: string;
    user: string | null;
    user_photo: string | null;
}
// get state from LocalStorage  (setItem on App.tsx) ====
const storedTheme = localStorage.getItem('theme') || "light";
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
    full_coins_data: [],
    input_value: "",
    user: storedUser,
    user_photo: storedUserPhoto,
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getCoinsData: (state,actions) => {state.coins_data = actions.payload},

        fillFullCoinsData: (state,actions) => {state.full_coins_data = actions.payload},

        putInputValue: (state,actions) => {state.input_value = actions.payload},
        putUser: (state,actions) => {state.user = actions.payload},
        removeUser: (state) => {state.user = null},
        setUserPhoto: (state,actions) => {state.user_photo = actions.payload},
        deleteUserPhoto: (state) => {state.user_photo = null},
    }
});

export const { 
    installLightTheme,
    installDarkTheme,
    getCoinsData,
    fillFullCoinsData,
    putInputValue,
    putUser,
    removeUser,
    setUserPhoto,
    deleteUserPhoto,

} = reduxSlice.actions;

export default reduxSlice.reducer;

//==== put stored data in saved_coins (setItem on App.tsx)
// const getCoin: string | null  = localStorage.getItem("savedCoins");
// let storedId;
// if ( typeof getCoin === 'string' ) {
//     storedId = JSON.parse(getCoin)
// }
// else{ storedId = [] }

// // ==== put user in user
// const getUser: string | null  = localStorage.getItem("user");
// let storedUser;
// if ( typeof getUser === 'string' ) {
//     storedUser = JSON.parse(getUser)
// }
// else { storedUser = null }

        // createWatchList: (state,actions) => {state.watch_list.push(actions.payload)},
        // removeSavedCoin: (state,actions) => {
        //     let filteredArrayCoins = state.watch_list.filter(item => 
        //         item.id !== actions.payload)
        //         state.watch_list = filteredArrayCoins
        // },

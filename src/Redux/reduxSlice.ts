import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'
import { savedCoin } from '../Types/saved_coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    input_value: string;
    saved_coins: savedCoin[];
    user: string | null;
}
const storedTheme = localStorage.getItem('theme') || "light";

// ==== put stored data in saved_coins
// const getCoin: string | null  = localStorage.getItem("savedCoins");
// let storedSavedCoins;
// if ( typeof getCoin === 'string' ) {
//     storedSavedCoins = JSON.parse(getCoin) || []
// }

// // ==== put user in user
// const getUser: string | null  = localStorage.getItem("user");
// let storedUser;
// if ( typeof getUser === 'string' ) {
//     storedUser = JSON.parse(getUser)
// }
// else {storedUser = null}

const initialState:InitialStateType = {
    theme_mode: storedTheme,
    coins_data: [],
    input_value: "",
    saved_coins: [],
    user: null,
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getFetchCoins: (state,actions) => {state.coins_data = actions.payload},
        putInputValue: (state,actions) => {state.input_value = actions.payload},
        pushSavedCoin: (state,actions) => {state.saved_coins.push(actions.payload)},
        removeSavedCoin: (state,actions) => {
            let filteredArrayCoins = state.saved_coins.filter(item => 
                item.id !== actions.payload)
                state.saved_coins = filteredArrayCoins
        },
        putUser: (state,actions) => {state.user = actions.payload},
        removeUser: (state) => {state.user = null},
    }
});

export const { 
    installLightTheme,
    installDarkTheme,
    getFetchCoins,
    putInputValue,
    pushSavedCoin,
    removeSavedCoin,
    putUser,
    removeUser

} = reduxSlice.actions;

export default reduxSlice.reducer;

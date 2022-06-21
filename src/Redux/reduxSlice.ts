import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'
import { savedCoin } from '../Types/saved_coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    input_value: string;
    saved_coins: savedCoin[];
}
const storedTheme = localStorage.getItem('theme') || "light";

// ==== put stored data in saved_coins
const get: string | null  = localStorage.getItem("savedCoins");
let storedSavedCoins;
if ( typeof get === 'string' ) {
    storedSavedCoins = JSON.parse(get) || []
}

const initialState:InitialStateType = {
    theme_mode: storedTheme,
    coins_data: [],
    input_value: "",
    saved_coins: storedSavedCoins,
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
            if ( state.saved_coins !== [] ) {
                let filteredArrayCoins = state.saved_coins.filter(item => 
                    item.id !== actions.payload)
                    state.saved_coins = filteredArrayCoins
            }
        },
    }
});

export const { 
    installLightTheme,
    installDarkTheme,
    getFetchCoins,
    putInputValue,
    pushSavedCoin,
    removeSavedCoin,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;

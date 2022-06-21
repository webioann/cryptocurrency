import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'
import { savedCoin } from '../Types/saved_coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    input_value: string;
    temporary_data: savedCoin[];
}
const storedTheme = localStorage.getItem('theme') || "light";

const initialState:InitialStateType = {
    theme_mode: storedTheme,
    coins_data: [],
    input_value: "",
    // == remove thise soon
    temporary_data: [],

}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getFetchCoins: (state,actions) => {state.coins_data = actions.payload},
        putInputValue: (state,actions) => {state.input_value = actions.payload},
        pushTemporaryData: (state,actions) => {state.temporary_data.push(actions.payload)},
    },
});

export const { 
    installLightTheme,
    installDarkTheme,
    getFetchCoins,
    putInputValue,
    pushTemporaryData,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;

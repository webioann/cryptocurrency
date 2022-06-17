import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    input_value: string;
}
const storedTheme = localStorage.getItem('theme') || "light";

const initialState:InitialStateType = {
    theme_mode: storedTheme,
    coins_data: [],
    input_value: ""
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getFetchCoins: (state,actions) => {state.coins_data = actions.payload},
        putInputValue: (state,actions) => {state.input_value = actions.payload}
    },
});

export const { 
    installLightTheme,
    installDarkTheme,
    getFetchCoins,
    putInputValue,
} = reduxSlice.actions;

export default reduxSlice.reducer;

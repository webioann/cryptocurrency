import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../TYPES'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    coins: CoinsType[];
    input_value: string;
}
const initialState:InitialStateType = {
    theme_mode: 'light',
    coins_data: [],
    coins: [],
    input_value: ""
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getFetchCoins: (state,actions) => {state.coins_data = actions.payload},
        getSerchedCoins: (state,actions) => {state.coins = actions.payload},
        putInputValue: (state,actions) => {state.input_value = actions.payload}
    },
});

export const { installLightTheme,installDarkTheme,getFetchCoins,getSerchedCoins,putInputValue } = reduxSlice.actions;

export default reduxSlice.reducer;

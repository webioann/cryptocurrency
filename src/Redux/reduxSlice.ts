import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../TYPES'

type InitialStateType = {
    theme_mode: string;
    coins_data: CoinsType[];
    coins: CoinsType[];
}
const initialState:InitialStateType = {
    theme_mode: 'light',
    coins_data: [],
    coins: []
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getFetchCoins: (state,actions) => {state.coins_data = actions.payload},
        getSerchedCoins: (state,actions) => {state.coins = actions.payload}
    },
});

export const { installLightTheme,installDarkTheme,getFetchCoins,getSerchedCoins } = reduxSlice.actions;

export default reduxSlice.reducer;

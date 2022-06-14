import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    theme_mode: string;
    coins: object[]
}
const initialState:InitialStateType = {
    theme_mode: 'light',
    coins: []
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
        getCoins: (state,actions) => {state.coins = actions.payload}
    },
});

export const { installLightTheme,installDarkTheme,getCoins } = reduxSlice.actions;

export default reduxSlice.reducer;

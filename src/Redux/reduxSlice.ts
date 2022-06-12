import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    test: string;
    theme_mode: string;
}
const initialState:InitialState = {
    test: 'TEST',
    theme_mode: 'light'
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        getTest: (state) => { state.test = 'TEST_2' },
        installLightTheme: (state) => { state.theme_mode = 'light' },
        installDarkTheme: (state) => { state.theme_mode = 'dark' },
    },
});

export const { getTest,installLightTheme,installDarkTheme } = reduxSlice.actions;

export default reduxSlice.reducer;

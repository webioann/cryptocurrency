import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialStateType {
    theme_mode:  'light' | 'dark' | string
    currentPage: number
    appStarted: 'started' | null
}
// get state from LocalStorage  (setItem on App.tsx) ====
const storedTheme = localStorage.getItem('theme') || 'light';

const initialState: InitialStateType = {
    theme_mode: storedTheme ,
    currentPage: 1,
    appStarted: null,
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        installThemeMode: (state,actions) => { state.theme_mode = actions.payload },
        changeCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        onFirstAppStart: (state) => {state.appStarted = 'started'},
    }
});

export const { 
    installThemeMode,
    changeCurrentPage,
    onFirstAppStart,
} = reduxSlice.actions;

export default reduxSlice.reducer;



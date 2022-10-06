import { createSlice } from "@reduxjs/toolkit"

interface InitialStateType {
    theme_mode:  'light' | 'dark' | string
    currentPage: number
    appStarted: 'started' | null
}
// get state from LocalStorage  (setItem on App.tsx) ====
const storedTheme = localStorage.getItem('theme') || 'dark';

const initialState: InitialStateType = {
    theme_mode: storedTheme ,
    currentPage: 1,
    appStarted: null
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
    onFirstAppStart
} = reduxSlice.actions;

export default reduxSlice.reducer;

        // putUser: (state,actions) => {state.user = actions.payload},
        // removeUser: (state) => {state.user = null},
        // setUserPhoto: (state,actions) => {state.user_photo = actions.payload},
        // deleteUserPhoto: (state) => {state.user_photo = null},

// const storedUserPhoto = localStorage.getItem('userPhoto') || null;

// const getUser: string | null  = localStorage.getItem("user");
// let storedUser;
// if ( typeof getUser === 'string' ) {
//     storedUser = JSON.parse(getUser)
// }
// else { storedUser = null }

    // user: storedUser,
    // user_photo: storedUserPhoto,

    // user: string | null
    // user_photo: string | null


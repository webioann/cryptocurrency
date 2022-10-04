import { createSlice } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins.types'


type InitialStateType = {
    currentPage: number;
    currentPageCoins: CoinsType[] | [];
    lang: string;
}

const initialState:InitialStateType = {
    currentPage: 1,
    currentPageCoins: [],
    lang: 'eng'
}

export const paginationSlice = createSlice({
    name: "pagin",
    initialState,
    reducers: {
        changeCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        getCoinsForCurrentPage: (state,actions) => {state.currentPageCoins = actions.payload},
        setUILanguage: (state,actions) => {state.lang = actions.payload},
    }
});

export const { 
    changeCurrentPage,
    getCoinsForCurrentPage,
    setUILanguage,
} = paginationSlice.actions;

export default paginationSlice.reducer;

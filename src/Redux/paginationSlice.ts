import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'


type InitialStateType = {
    currentPage: number;
    currentPageCoins: CoinsType[];
    perPage: number;
}

const initialState:InitialStateType = {
    currentPage: 1,
    currentPageCoins: [],
    perPage: 10,
}

export const paginationSlice = createSlice({
    name: "pagin",
    initialState,
    reducers: {
        changeCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        getCoinsForCurrentPage: (state,actions) => {state.currentPageCoins = actions.payload},
        lessPerPage: state => {state.perPage = 10},
        morePerPage: state => {state.perPage = 20},
    }
});

export const { 
    changeCurrentPage,
    getCoinsForCurrentPage,
    lessPerPage,
    morePerPage 
} = paginationSlice.actions;

export default paginationSlice.reducer;

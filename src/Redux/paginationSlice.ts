import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CoinsType } from '../Types/coins_types'


type InitialStateType = {
    currentPage: number;
    currentPageCoins: CoinsType[];
}

const initialState:InitialStateType = {
    currentPage: 1,
    currentPageCoins: []
}

export const paginationSlice = createSlice({
    name: "pagin",
    initialState,
    reducers: {
        changeCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        getCoinsForCurrentPage: (state,actions) => {state.currentPageCoins = actions.payload},
    }
});

export const { changeCurrentPage, getCoinsForCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;

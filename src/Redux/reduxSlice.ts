import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    test: string;
}
const initialState:InitialState = {
    test: 'TEST',
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        getTest: (state) => { state.test = 'TEST_2' },
    },
});

export const { getTest, } = reduxSlice.actions;

export default reduxSlice.reducer;

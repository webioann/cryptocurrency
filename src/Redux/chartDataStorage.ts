import { createSlice } from "@reduxjs/toolkit"
import { IChatQueryParams } from '../Types/chartData.types'

const initialState:  IChatQueryParams = {
    currency: {
        currentCurrency: 'usd',
        currencyMark: '\u0024' 
        // \u0024 = usa dolar \u20AC = euro \u00A5 = japanis yena \u20B4 = ukrainian hrivna 
    },
    period: 1,
}

export const chartDataStorage = createSlice({
    name: "chart",
    initialState,
    reducers: {
        setPeriod: (state,actions) => {state.period = actions.payload},
        // call this funcition for auto change currency mark ( in DropDown )
        setCurrency: (state,actions) => {
            state.currency.currentCurrency = actions.payload
            if(actions.payload === 'usd') {state.currency.currencyMark = '\u0024'}
            if(actions.payload === 'eur') {state.currency.currencyMark = '\u20AC'}
            if(actions.payload === 'jpy') {state.currency.currencyMark = '\u00A5'}
            if(actions.payload === 'uah') {state.currency.currencyMark = '\u20B4'}
        },
    }
});

export const { setCurrency, setPeriod } = chartDataStorage.actions;

export default chartDataStorage.reducer;

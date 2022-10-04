import { createSlice } from "@reduxjs/toolkit"
import { IChatQueryParams } from '../Types/chartData.types'

const initialState:IChatQueryParams = {
    currency: {
        currentCurrency: 'usd',
        currencyMark: '\u0024' 
        // \u0024 = usa dolar \u20AC = euro \u00A5 = japanis yena \u20B4 = ukrainian hrivna 
    },
    period: 1,
    periodicity: 'minute',
}

export const chartDataStorage = createSlice({
    name: "chart",
    initialState,
    reducers: {
        // for  correct  coinGecko API response need - 24 hours data in the five-minute intervals 
        // by 7, 14, 30, 60, 90 days data - with hourly interval 
        // by 180, 364 days and all("max") period - dayly interval
        setByPeriod: (state,actions) => {
            state.period = actions.payload
            if(actions.payload === 1) {
                state.periodicity = 'minute'
            }
            if(actions.payload === 7 || actions.payload === 14 || actions.payload === 30 || actions.payload === 90) {
                state.periodicity = 'hourly'
            }
            if(actions.payload === 180 || actions.payload === 365 || actions.payload === 'max') {
                state.periodicity = 'daily'
            }
        },
        // call this funcition for auto change currency mark ( in DropDown )
        setCurrency: (state,actions) => {
            state.currency.currentCurrency = actions.payload
            if(actions.payload === 'usd') {
                state.currency.currencyMark = '\u0024'
            }
            if(actions.payload === 'eur') {
                state.currency.currencyMark = '\u20AC'
            }
            if(actions.payload === 'jpy') {
                state.currency.currencyMark = '\u00A5'
            }
            if(actions.payload === 'uah') {
                state.currency.currencyMark = '\u20B4'
            }
        },

    }
});

export const { setByPeriod, setCurrency } = chartDataStorage.actions;

export default chartDataStorage.reducer;

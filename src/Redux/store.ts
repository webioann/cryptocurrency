import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import reduxSlice  from './reduxSlice'
import { coinsApi } from './coinsApi'
import { trendingCoinsApi } from './trendingCoinsApi'
import { chartDataApi } from './chartDataApi'
import chartDataStorage from './chartDataStorage'

const store = configureStore({
    reducer: {
        redux: reduxSlice,
        chart: chartDataStorage,
        [coinsApi.reducerPath]: coinsApi.reducer,
        [trendingCoinsApi.reducerPath]: trendingCoinsApi.reducer,
        [chartDataApi.reducerPath]: chartDataApi.reducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            coinsApi.middleware,
            trendingCoinsApi.middleware,
            chartDataApi.middleware
        ]
    ),
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;

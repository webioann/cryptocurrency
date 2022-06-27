import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import reduxSlice  from './reduxSlice'
import paginationSlice  from './paginationSlice'

const store = configureStore({

    reducer: {
        redux: reduxSlice,
        pagin: paginationSlice
    } 
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;

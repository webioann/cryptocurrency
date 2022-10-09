import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITrendingResponseData, TrendingType } from '../Types/trendingCoins.types'

export const trendingCoinsApi = createApi({
    reducerPath: 'trendingCoinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        // data for seven trending coins
        trendingCoins: builder.query<TrendingType[], string>({
            query: () => ({
                url: '/search/trending',
            }),
            transformResponse: (respons: ITrendingResponseData) => respons.coins,
        })
    }), 
})

export const { useLazyTrendingCoinsQuery } = trendingCoinsApi;


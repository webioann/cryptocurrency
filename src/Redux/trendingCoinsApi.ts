import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITrendingResponseData, TrendingType } from '../Types/trendingCoins.types'

export const trendingCoinsApi = createApi({
    reducerPath: 'trendingCoinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        // data for seven trending coins
        trendingCoins: builder.query<TrendingType[],string>({
            query: () => ({
                url: '/search/trending',
                headers: {
                    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
                    'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'               
                },
            }),
            transformResponse: (respons: ITrendingResponseData) => respons.coins,
        })
    }), 
})

export const { useTrendingCoinsQuery } = trendingCoinsApi;


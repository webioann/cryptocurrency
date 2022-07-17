import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CoinsType } from '../Types/coins_types'
import { FullDataCoinType } from '../Types/full_data_coin_types'
import { TrendingDataType, TrendingType } from '../Types/trending-types'

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        fetchCoins: builder.query<CoinsType[], number>({
            query: (page: number) => `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=14&page=${page}&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1`
        }),
        getCoinFullInfo: builder.query<FullDataCoinType, string | undefined>({
            query: (id: string) => `/coins/${id}?localization=false&sparkline=true`
        }),
        trendingCoins: builder.query<TrendingType[],string>({
            query: () => '/search/trending',
            transformResponse: (respons: TrendingDataType) => respons.coins,
        })
    }),
})

export const { useFetchCoinsQuery, useGetCoinFullInfoQuery, useTrendingCoinsQuery } = coinsApi;
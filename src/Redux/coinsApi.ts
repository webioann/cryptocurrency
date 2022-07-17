import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CoinsType } from '../Types/coins_types'
import { FullDataCoinType } from '../Types/full_data_coin_types'
import { useParams } from 'react-router-dom';

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3/coins'
    }),
    endpoints: builder => ({
        fetchCoins: builder.query<CoinsType[], number>({
            query: (page: number) => `/markets?vs_currency=usd&order=market_cap_desc&per_page=14&page=${page}&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1`
        }),
        getCoinFullInfo: builder.query<FullDataCoinType | {}, string>({
            query: (id: string) => `/${id}?localization=false&sparkline=true`
        }),
    }),
})

export const { useFetchCoinsQuery, useGetCoinFullInfoQuery } = coinsApi;
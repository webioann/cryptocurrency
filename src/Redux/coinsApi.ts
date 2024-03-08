import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CoinsSearchType, CoinsSearchData } from "../Types/coinsSearch.types"
import { CoinsType, ICoinsRequestParams } from '../Types/coins.types'
import { coinDetailsType } from '../Types/coinDetails.types'


export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        // data for the start page with 14 coins
        fetchCoins: builder.query<CoinsType[], ICoinsRequestParams>({
            query: (params: ICoinsRequestParams) => ({
                url: `/coins/markets`,
                params: {
                    page: params.page,
                    vs_currency: params.currency,
                    price_change_percentage: '24h,7d',
                    sparkline: 'true',
                    per_page: 14,
                    order: 'market_cap_desc',
                },
            })
        }),
        // data for one (chosen) coin with all details
        coinDetails: builder.query<coinDetailsType, string | undefined>({
            query: (id: string ) => ({
                url: `/coins/${id}`,
            }),
        }),
        // function to  fetch  coins list when input in SearchBar holds focus
        searchCoins: builder.query<CoinsSearchType[], string>({
            query: (searchCoin: string) => ({
                url: `/search?query=${searchCoin}`,
            }),
            transformResponse: (respons: CoinsSearchData) => respons.coins,
        })
    }), 
})

export const { 
    useLazyFetchCoinsQuery,
    useLazyCoinDetailsQuery,
    useLazySearchCoinsQuery
} = coinsApi;


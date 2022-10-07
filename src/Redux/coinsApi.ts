import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CoinsSearchType, CoinsSearchData } from "../Types/coinsSearch.types"
import { CoinsType, IRequestParams } from '../Types/coins.types'
import { coinDetailsType } from '../Types/coinDetails.types'

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        // data for the start page with 14 coins
        fetchCoins: builder.query<CoinsType[], IRequestParams>({
            query: (params: IRequestParams) => ({
                url: `/coins/markets?vs_currency&order=market_cap_desc&per_page=14&page&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1`,
                headers: {
                    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
                    'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'                 
                },
                params: {
                    page: params.page,
                    vs_currency: params.currency
                }
            })
        }),
        // data for one (chosen) coin with all details
        coinDetails: builder.query<coinDetailsType, string | undefined>({
            query: (id: string ) => ({
                url: `/coins/${id}`,
                headers: {
                    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
                    'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'                 
                },
            }),
        }),
        // ?localization=false&sparkline=false

        // function to  fetch  coins list when input in SearchBar holds focus
        searchCoins: builder.query<CoinsSearchType[], string>({
            query: (searchCoin: string) => ({
                url: `/search?query=${searchCoin}`,
                headers: {
                    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
                    'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'                  
                },
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

// respons.coins.filter(coin => coin.market_cap_rank < 100),
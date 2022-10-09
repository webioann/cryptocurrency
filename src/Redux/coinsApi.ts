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
                    price_change_percentage: '24h, 7d',
                    sparkline: 'true',
                    per_page: '14',
                    order: 'market_cap_desc'
                }
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

// respons.coins.filter(coin => coin.market_cap_rank < 100),

// headers: {
    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
//     'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'                  
// },
// ?vs_currency&order=market_cap_desc&per_page=14&page&sparkline=true&price_change_percentage=24h%2C7d%2C14d%2C30d%2C1
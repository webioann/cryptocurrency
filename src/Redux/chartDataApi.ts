import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IQueryParams, IChartDataResponse, IChartData } from '../Types/chartData.types'

export const chartDataApi = createApi({
    reducerPath: 'chartDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3'
    }),
    endpoints: builder => ({
        // function to fetch data for coin charts, with eight different time periods and fours currencies
        fetchChartData: builder.query<IChartDataResponse, IQueryParams>({
            query: (params: IQueryParams) => ({
                url: `/coins/${params.coinId}/market_chart`,
                headers: {
                    // 'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    // 'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
                    'Access-Control-Allow-Origin': 'https://api.coingecko.com/api/v3'                  
                },
                params: {
                    coinId: params.coinId,
                    vs_currency: params.currency,
                    days: params.period,
                } 
            }),
        })
    }), 
})

export const { useLazyFetchChartDataQuery } = chartDataApi;

// ?vs_currency&days&interval
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CryptoNewsResponse } from '../Types/news.types'

interface INewsRequestParams {
    newsCategory: string | undefined
    count: 3 | 6 | 12
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://cryptocurrency-news2.p.rapidapi.com/v1`
    }),
    endpoints: builder => ({
        getNews: builder.query<CryptoNewsResponse, string>({
            query: () => ({
                url: `/bitcoinist`,
                // params: {
                //     q: params.newsCategory,
                //     count: params.count,
                //     freshness: 'Day',
                //     textFormat: 'Raw',
                //     safeSearch: 'Off'
                // },
                headers: {
                    'X-RapidAPI-Key': process.env.NEWS_API_KEY,
                    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
                },
            }),
        })
    }), 
})

export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi;
// params: INewsRequestParams
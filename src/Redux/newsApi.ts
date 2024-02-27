import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { INewsResponse } from '../Types/news.types'

interface INewsRequestParams {
    newsCategory: string | undefined
    count: 3 | 6 | 12
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bing-news-search1.p.rapidapi.com'
    }),
    endpoints: builder => ({
        getNews: builder.query<INewsResponse, INewsRequestParams | undefined>({
            query: (params: INewsRequestParams) => ({
                url: `/news/search`,
                params: {
                    q: params.newsCategory,
                    count: params.count,
                    freshness: 'Day',
                    textFormat: 'Raw',
                    safeSearch: 'Off'
                },
                headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Key': process.env.NEWS_API_KEY,
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                },
            }),
        })
    }), 
})

export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi;

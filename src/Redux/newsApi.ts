import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { INewsApiResponse, INewsItem, INewsApiRequestParams } from '../Types/news.types'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://news67.p.rapidapi.com/v2`
    }),
    endpoints: builder => ({
        fetchCryptoNews: builder.query<INewsItem[], INewsApiRequestParams>({
            query: (params: INewsApiRequestParams) => ({
                url: `/crypto`,
                params: {
                    token: params.token,
                    languages: params.languages,
                    batchSize: params.batchSize
                },
                headers: {
                    'X-RapidAPI-Key': process.env.NEWS_API_KEY,
                    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
                },
            }),
            transformResponse: (respons: INewsApiResponse) => respons.news
        })
    }), 
})

export const { useFetchCryptoNewsQuery, useLazyFetchCryptoNewsQuery } = newsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CryptoNewsResponse, newsProviderType } from '../Types/news.types'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://cryptocurrency-news2.p.rapidapi.com/v1/`
    }),
    endpoints: builder => ({
        getNews: builder.query<CryptoNewsResponse, newsProviderType>({
            query: (newsProvider: newsProviderType) => ({
                url: `${newsProvider}`,
                headers: {
                    'X-RapidAPI-Key': process.env.NEWS_API_KEY,
                    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
                },
            }),
        })
    }), 
})

export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi;

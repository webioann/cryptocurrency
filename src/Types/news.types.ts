// TYPES FOR NEWS API ==========
interface IResult {
    response: string
    newsCount: number
}
export interface INewsItem {
    Title: string
    Source: string
    Url: string
    PublishedOn: string
    Description: string
    Language: string
    Image: string
    SourceNationality: string
    TitleSentiment: {
        sentiment: string
        score: number
    }
    Summary: string
    Countries: string[]
    CryptoCurrencies: string[]
}
export interface INewsApiRequestParams {
    token?: string
    languages: string
    batchSize: number
}

export interface INewsApiResponse {
    result: IResult
    news: INewsItem[]
}

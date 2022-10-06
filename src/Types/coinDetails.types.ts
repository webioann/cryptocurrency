// ========= unit_coin ==============
type enType = {
    en: string
}
type imgType = {
    large: string
    small: string
    thumb: string
}
type priceType = {
    price: Array<number>
}
// // =====================
type capType = {
    usd: number
}
type ticker = {
    base: string
    is_anomaly: boolean
    market: object
    target: string
}
type url = {
    url: Array<string>
}
type links = {
    blockchain_site: Array<string>
    homepage: Array<string>
    official_forum_url: Array<string>
    subreddit_url: string
    facebook_username: string
    twitter_screen_name: string
    telegram_channel_identifier: string
}
export type marketDataType = {
    current_price: any
    sparkline_7d: priceType;
    market_cap:  any
    total_volume:  any
    high_24h:  any
    low_24h:  any
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_14d: number
    price_change_percentage_30d: number
    price_change_percentage_60d: number
    price_change_percentage_1y: number
}

export type coinDetailsType = {
    id: string
    symbol: string
    name: string
    image: imgType
    market_data: marketDataType
    market_cap_rank: number
    hashing_algorithm: string
    tickers: Array<ticker>
    liquidity_score: number
    description: enType
    links: links
}

export interface ICoinData {
    data: coinDetailsType
}
// =========== MarketStats =====================
interface dataInCurrency {
    usd: number
    eur: number
    jpy: number
    uah: number
}
export interface IMarketData {
    current_price: dataInCurrency 
    market_cap:  dataInCurrency
    total_volume:  dataInCurrency
    high_24h:  dataInCurrency
    low_24h:  dataInCurrency
    price_change_percentage_24h_in_currency: dataInCurrency
    price_change_percentage_7d_in_currency: dataInCurrency
    price_change_percentage_14d_in_currency: dataInCurrency
    price_change_percentage_30d_in_currency: dataInCurrency
    price_change_percentage_60d_in_currency: dataInCurrency
    price_change_percentage_200d_in_currency: dataInCurrency
    price_change_percentage_1y_in_currency: dataInCurrency
}

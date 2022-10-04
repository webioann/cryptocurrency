export interface IQueryParams {
    coinId: string | undefined
    currency: 'usd' | 'eur' | 'jpy' | 'uah'
    timePeriod:  1 | 7 | 14 | 30 | 90 | 180 | 365 |'max'
    interval: 'daily' | 'hourly' | 'minute'
}
interface ICurrency {
    // \u0024 = usa dolar \u20AC = euro \u00A5 = japanis yena \u20B4 = ukrainian hrivna \u20BF = bitcoin
    currentCurrency:  'usd' | 'eur' | 'jpy' | 'uah'
    currencyMark: '\u0024' | '\u20AC' | '\u00A5' | '\u20B4'
}
export interface IChartDataResponse {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}
export interface IChartData {
    chartData: IChartDataResponse
}
export interface IChatQueryParams {
    currency: ICurrency
    period: 1 | 7 | 14 | 30 | 90 | 180 | 365 |'max'
    periodicity: 'daily' | 'hourly' | 'minute'
}

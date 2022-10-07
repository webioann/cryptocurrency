// ====== coins ===========
type PriceType = {
    price: Array<number>
}

export interface CoinsType {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    ath: number;
    low_24h: number;
    sparkline_in_7d: PriceType;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    price_change_percentage_14d_in_currency: number;
    price_change_percentage_30d_in_currency: number;
    price_change_percentage_1y_in_currency: number;
}
export interface UnitCoinType {
    coin: CoinsType
}
export interface IRequestParams {
    page: number
    currency: 'usd' | 'eur' | 'jpy' | 'uah'
}
export interface ICoins {
    coins: CoinsType[]
}


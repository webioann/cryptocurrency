
export type PropsChildrenType = {
    children: JSX.Element | JSX.Element[]
}

export interface sparkLineType {
    price: Array<number>
}
export interface CoinsType {
    market_cap_rank: number;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    ath: number;
    id: string;
    low_24h: number;
    sparkline_in_7d: sparkLineType;
}
export type TrendingItem = {
    coin_id: number;
    id: string;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    score: number;
    slug: string;
    small: string;
    symbol: string;
    thumb: string;
}
export interface TrendingType {
    item: TrendingItem;
}
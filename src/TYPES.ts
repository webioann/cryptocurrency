
export type PropsChildrenType = {
    children: JSX.Element | JSX.Element[]
}
// ===== SparkLine ==========
export interface SparkLinePriceType {
    price: Array<number>
}
export interface SparkLineType {
    sparkline_in_7d: SparkLinePriceType;
}
// ====== coins ===========
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
    sparkline_in_7d: SparkLineType;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    price_change_percentage_14d_in_currency: number;
    price_change_percentage_30d_in_currency: number;
    price_change_percentage_1y_in_currency: number;
}
// ====== trending =========
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
// ========= unit_coin ==============
type descEngType = {
    eng: string
}
type img = {
    large: string;
    small: string;
    thumb: string;
}
type market_data = {
    current_price: object;
    sparkline_in_7d: SparkLineType;
    market_cap: object;
    total_volume: object;
    high_24h: object;
    low_24h: object;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_1y: number;
}
type ticker = {
    base: string;
    is_anomaly: boolean;
    market: object;
    target: string;
}
export type UnitCoinType = {
    id: string;
    symbol: string;
    name: string;
    image: img;
    market_data: market_data;
    market_cap_rank: number;
    hashing_algorithm: string;
    tickers: Array<ticker>;
    liquidity_score: number;
    description: descEngType;
}

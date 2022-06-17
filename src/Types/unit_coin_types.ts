// ========= unit_coin ==============
type descEngType = {
    eng: string
}
type img = {
    large: string;
    small: string;
    thumb: string;
}
type PriceType = {
    price: Array<number>
}

type market_data = {
    current_price: object;
    sparkline_in_7d: PriceType;
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

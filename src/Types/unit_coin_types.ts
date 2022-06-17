// ========= unit_coin ==============
type enType = {
    en: string;
}
type imgType = {
    large: string;
    small: string;
    thumb: string;
}
type priceType = {
    price: Array<number>
}
type usdType = {
    usd: number
}

type market_data = {
    current_price: usdType;
    sparkline_7d: priceType;
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
    image: imgType;
    market_data: market_data;
    market_cap_rank: number;
    hashing_algorithm: string;
    tickers: Array<ticker>;
    liquidity_score: number;
    description: enType;
}

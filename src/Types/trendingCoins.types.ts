// ====== trending =========
type TrendingItem = {
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
export interface ITrendingResponseData {
    coins: TrendingType[];
}
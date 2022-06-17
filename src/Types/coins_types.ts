// ====== coins ===========
type PriceType = {
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
    sparkline_in_7d: PriceType;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    price_change_percentage_14d_in_currency: number;
    price_change_percentage_30d_in_currency: number;
    price_change_percentage_1y_in_currency: number;
}

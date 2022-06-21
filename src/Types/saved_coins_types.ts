// ====== coins ===========
// type PriceType = {
//     price: Array<number>
// }

// type SavedCoin = {
//     id: string;
//     name: string;
//     symbol: string;
//     market_cap_rank: number;
//     image: string;
//     current_price: number;
//     price_change_percentage_24h: number;
//     total_volume: number;
//     market_cap: number;
//     ath: number;
//     low_24h: number;
//     sparkline_in_7d: PriceType;
// }
// export interface SavedCoinsType {
//     coin: SavedCoin
// }
export interface savedCoin {
    id: string;
    name: string;
    rank: number;
    symbol: string;
    image: string;
    price: number;
}

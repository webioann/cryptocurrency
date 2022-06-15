
export type PropsChildrenType = {
    children: JSX.Element | JSX.Element[]
}

export interface sparkLineType {
    price: number[]
}
export interface CoinsType {
    market_cap_rank: number;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volum: number;
    market_cap: number;
    ath: number;
    id: string;
    low_24h: number;
    sparkLine_in_7d: sparkLineType;
}

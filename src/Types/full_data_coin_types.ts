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
type capType = {
    usd: number
}

type market_data = {
    current_price: capType;
    sparkline_7d: priceType;
    market_cap: capType;
    total_volume: capType;
    high_24h: capType;
    low_24h: capType;
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
type url = {
    url: Array<string>
}
type links = {
    blockchain_site: Array<string>;
    homepage: Array<string>;
    official_forum_url: Array<string>;
    subreddit_url: string;
    facebook_username: string;
    twitter_screen_name: string;
    telegram_channel_identifier: string;
}
export type FullDataCoinType = {
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
    links: links;
}

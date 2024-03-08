interface ICryptoNews {
    url: string
    title: string
    description: string
    thumbnail: string
    createdAt: string
}
export type CryptoNewsResponse = {
    data: ICryptoNews []
}
export type newsProviderType = 
    | 'coindesk' 
    | 'cointelegraph' 
    | 'bitcoinist' 
    | 'decrypt'
    | 'bsc'
    | 'theguardian'


interface queryContext {
    _type: "QueryContext"
    originalQuery: string
    adultIntent: boolean
}
interface sortObject {
    _type: string
    name: string
    id: string
    isSelected: boolean
    url: string
}
interface thumbnail {
    _type: string
    contentUrl: string
    width: number
    height: number
}
interface imageValueObject {
    _type: string
    thumbnail: thumbnail
}
interface providerValueObject {
    _type: string
    name: string
    image: imageValueObject
}
export interface valueObject {
    _type: string
    name: string
    url: string
    image: imageValueObject
    description: string
    provider: providerValueObject[]
    datePublished: string
    category: string
}

export interface INewsResponse {
    _type: string
    readLink: string
    queryContext: queryContext
    totalEstimatedMatches: number
    sort: sortObject[]
    value: valueObject[]
}
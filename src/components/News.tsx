import React, { useEffect } from 'react'
import { useFetchCryptoNewsQuery } from '../Redux/newsApi'
import { useAppSelector } from '../Redux/store'
import momment from 'moment'
import { INewsApiRequestParams } from '../Types/news.types'
import '../CSS/news.scss'

const News: React.FC<INewsApiRequestParams> = ({ token, languages, batchSize }) => {
    const theme = useAppSelector(state => state.redux.theme_mode)
    const {data: newsList} = useFetchCryptoNewsQuery({
        token: token,
        languages: languages, 
        batchSize: batchSize
    })

    const defaultImage = "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    const logo = 'https://e2xr.io/wp-content/uploads/2022/05/bitcoinist-4.png'

    if( newsList ) {
        return (
            <section className='news-container'>
                { newsList.map((news, i)=> (
                    <a href={news.Url}  
                        target="_blank" 
                        rel='noreferrer' 
                        key={i} 
                        className={`one-news one-news-${theme}`}>
                        <header className='news-header'>
                            <h3 className='news-title'>{news.Title}</h3>
                            <div className='news-avatar'>
                                <img src={news.Image ? news.Image : defaultImage} alt='news'/>
                            </div>
                        </header>
                        <p>{news.Description}</p>
                        <div className='provider-container'>
                            <p>{momment(news.PublishedOn).startOf('ms').fromNow()}</p>
                        </div>
                    </a>
                    ))
                }
            </section>
        )
    }
    else return null
}

export default News;
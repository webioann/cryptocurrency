import React from 'react'
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
                            <div className='news-provider-logo'>
                                <img src={news.Image ? news.Image : require('../assets/bitcoin.jpg')} alt='news'/>
                            </div>
                        </header>
                        <p>{news.Description.length > 150 ? news.Description.substring(0, 150 - 1) + '...' : news.Description}</p>
                        <p>{news.Summary.length > 250 ? news.Summary.substring(0, 250 - 1) + '...' : news.Summary}</p>
                        <div className='provider-container'>
                            <p>published {momment(news.PublishedOn).startOf('ms').fromNow()}</p>
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
import React from 'react'
import { useGetNewsQuery } from '../Redux/newsApi'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'

import '../CSS/news.scss'

interface INewsProps { coinId: string }

const News: React.FC = () => {
    const theme = useAppSelector(state => state.redux.theme_mode)

    const { data: newsList } = useGetNewsQuery({ newsCategory: 'cryptocurrency', count: 6 })

    // console.log(`news ${JSON.stringify(news)}`);
    if( newsList ) {
        return (
            <section className='news-container'>
                { newsList.value.map((news, i)=> (
                    <a href={news.url}  
                        target="_blank" 
                        rel='noreferrer' 
                        key={i} 
                        className={`one-news one-news-${theme}`}>
                        <header className='news-header'>
                            <div className='news-title'>{news.name}</div>
                            <div className='news-avatar'>
                                <img src={news.image?.thumbnail?.contentUrl} alt='news'/>
                            </div>
                        </header>
                        <p>{news.description}</p>
                        
                    </a>
                    ))
                }
            </section>
        )
    }
    else return null
}

export default News;
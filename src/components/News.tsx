import React from 'react'
import { useGetNewsQuery } from '../Redux/newsApi'
import { useAppSelector } from '../Redux/store'
import momment from 'moment'
import { BiNews } from 'react-icons/bi'
import '../CSS/news.scss'

interface INewsProps { 
    category: string
    count: 3 | 6 | 12 
    providerLogo?: string
}

const News: React.FC<INewsProps> = ({ category, count, providerLogo }) => {
    const theme = useAppSelector(state => state.redux.theme_mode)
    const { data: newsList } = useGetNewsQuery({ newsCategory: category, count: count })

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
                            <h3 className='news-title'>{news.name}</h3>
                            <div className='news-avatar'>
                                <img src={news.image?.thumbnail?.contentUrl || providerLogo} alt='news'/>
                            </div>
                        </header>
                        <p>{news.description}</p>
                        <div className='provider-container'>
                            <div className='provider'>
                                <div className='provider-avatar'>
                                    { news.provider[0]?.image?.thumbnail?.contentUrl ?
                                        <img src={news.provider[0]?.image?.thumbnail?.contentUrl} alt='avatar'/> :
                                        <BiNews size='30px' color='#f85904'/> 
                                    }
                                </div>
                                <p className='provider-name'>{news.provider[0]?.name}</p>
                            </div>
                            <p>{momment(news.datePublished).startOf('ms').fromNow()}</p>
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
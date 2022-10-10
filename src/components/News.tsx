import React from 'react'
import { useGetNewsQuery } from '../Redux/newsApi'
// import { Link } from 'react-router-dom'
// import useMomentHook from '../hooks/useMomentHook'
import { useAppSelector } from '../Redux/store'
import momment from 'moment'
import '../CSS/news.scss'

// interface INewsProps { coinId: string }

const News: React.FC = () => {
    const theme = useAppSelector(state => state.redux.theme_mode)
    const demoAvatar = 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579'
    const { data: newsList } = useGetNewsQuery({ newsCategory: 'cryptocurrency', count: 6 })

    // useMoment();

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
                                <img src={news.image?.thumbnail?.contentUrl || demoAvatar} alt='news'/>
                            </div>
                        </header>
                        <p>{news.description}</p>
                        <div className='provider-container'>
                            <div className='provider'>
                                <div className='provider-avatar'>
                                    <img src={news.provider[0]?.image?.thumbnail?.contentUrl || demoAvatar} alt='provider avatar'/>
                                </div>
                                <p className='provider-name'>{news.provider[0]?.name}</p>
                            </div>
                            <p>{momment(news.datePublished).startOf('ms').fromNow()}</p>
                            {/* <p className='date-published'>an 5 hours ago </p> */}
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
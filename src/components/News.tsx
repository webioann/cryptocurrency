import React, { useEffect } from 'react'
import { useGetNewsQuery, useLazyGetNewsQuery } from '../Redux/newsApi'
import { useAppSelector } from '../Redux/store'
import momment from 'moment'
import { BiNews } from 'react-icons/bi'
import '../CSS/news.scss'

interface INewsProps { 
    category: string
    count: 3 | 6 | 12 
}

const News: React.FC<INewsProps> = ({ category, count }) => {
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [fetchNewsList, {data: newsList}] = useLazyGetNewsQuery()

    useEffect(() => {
        fetchNewsList('bitcoinist')
    }, [])
    // const { data: newsList } = useGetNewsQuery('')
    // TODO: 
    console.log(newsList)
    const defaultImage = "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    const logo = 'https://e2xr.io/wp-content/uploads/2022/05/bitcoinist-4.png'

    if( newsList ) {
        return (
            <section className='news-container'>
                { newsList.data.map((news, i)=> (
                    <a href={news.url}  
                        target="_blank" 
                        rel='noreferrer' 
                        key={i} 
                        className={`one-news one-news-${theme}`}>
                        <header className='news-header'>
                            <h3 className='news-title'>{news.title}</h3>
                            <div className='news-avatar'>
                                <img src={news.thumbnail ? news.thumbnail : defaultImage} alt='news'/>
                            </div>
                        </header>
                        <p>{news.description}</p>
                        <div className='provider-container'>
                            <div className='provider'>
                                {/* <div className='provider-avatar'>
                                    { news.thumbnail ?
                                        <img src={news.thumbnail} alt='avatar'/> :
                                        <BiNews size='30px' color='#f85904'/> 
                                    }
                                </div> */}
                                    { logo ?
                                        <img src={logo} alt='avatar'/> :
                                        <BiNews size='30px' color='#f85904'/> 
                                    }

                                {/* <p className='provider-name'>{`BITCOINIST`}</p> */}
                            </div>
                            <p>{momment(news.createdAt).startOf('ms').fromNow()}</p>
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
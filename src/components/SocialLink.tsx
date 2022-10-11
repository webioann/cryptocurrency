import React from 'react'
import { useAppSelector } from '../Redux/store'
import { coinDetailsType } from '../Types/coinDetails.types'
import { FaTelegramPlane,FaTwitter,FaFacebook } from 'react-icons/fa';
import { AiFillRedditCircle } from 'react-icons/ai';
import '../CSS/social-link.scss'

interface variantType {
    type: string;
    coin: coinDetailsType;
}
const SocialLink: React.FC<variantType> = ({ type, coin }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)

    if ( type === 'homepage' ) {
        return (
            <div className={`link ${theme}-lk`}>
                <div className='coin-icon'>
                    <img src={coin.image?.thumb} alt="coin image"></img>
                </div>
                <a href={coin.links?.homepage[0]} target="blank">
                    site
                </a>
            </div>
        )
    }
    if ( type === 'facebook' ) {
        return (
            <>
                { coin.links?.facebook_username ? (
                    <div className={`link ${theme}-lk`}>
                        <FaFacebook className='link-icon' color='#5388cd'/>
                        <a href={`https://facebook.com/${coin.links?.facebook_username}/`} target="blank">
                            facebook
                        </a>
                    </div>
                    ) : null 
                }
            </>
        )
    }
    if ( type === 'reddit' ) {
        return (
            <>
                { coin.links?.subreddit_url ? (
                    <div className={`link ${theme}-lk`}>
                        <AiFillRedditCircle className='link-icon' color='#5388cd'/>
                        <a href={coin.links?.subreddit_url} target="blank">
                            reddit
                        </a>
                    </div>
                    ) : null 
                }
            </>
        )
    }
    if ( type === 'telegram' ) {
        return (
            <>
                { coin.links?.telegram_channel_identifier ? (
                    <div className={`link ${theme}-lk`}>
                        <FaTelegramPlane className='link-icon' color='#5388cd'/>
                        <a href={`https://t.me/${coin.links?.telegram_channel_identifier}`} target="blank">
                            telegram
                        </a>
                    </div>
                    ) : null 
                }
            </>
        )
    }
    if ( type === 'twitter' ) {
        return (
            <>
                { coin.links?.twitter_screen_name ? (
                    <div className={`link ${theme}-lk`}>
                        <FaTwitter className='link-icon' color='#5388cd'/>
                        <a href={`https://twitter.com/${coin.links?.twitter_screen_name}`} target="blank">
                            twitter
                        </a>
                    </div>
                    ) : null 
                }
            </>
        )
    }
    else  return null 
}

export default SocialLink;
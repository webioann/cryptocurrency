import React,{ useState,useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import '../CSS/burger.scss'

interface burgerPropsType  { 
    active: boolean;
}

const Burger: React.FC<burgerPropsType> = ({ active }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const [top_line,setTopLine] = useState<string>('')
    const [center_line,setCenterLine] = useState<string>('')
    const [bottom_line,setBottomLine] = useState<string>('')

    useEffect(() => {
        if ( active ) {
            setTopLine('top-line'),
            setCenterLine('center-line'),
            setBottomLine('bottom-line')
        }
        else {
            setTopLine(''),
            setCenterLine(''),
            setBottomLine('')
        }
    },[active])

    return (
        <div className='burger-spiner'>
            <span className={`line ${theme} ${top_line}`}></span>
            <span className={`line ${theme} ${center_line}`}></span>
            <span className={`line ${theme} ${bottom_line}`}></span>
        </div>
    )
}

export default Burger;
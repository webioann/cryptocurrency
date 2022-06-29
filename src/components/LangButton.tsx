import React, { useState, useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { TbRectangle } from 'react-icons/tb'
import '../CSS/lang-button.scss'

const LangButton = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const dispatch = useAppDispatch()
    const [left,setLeft] = useState<string>('-2px')

    return (
        <div className={`lang ${theme}-lang`}>
            <div className='lang-box'>
                <div className='cell' onClick={() => {
                    setLeft('-2px') 
                    }}>eng</div>
                <div className='cell' onClick={() => { 
                    setLeft('28px')
                    }}>ukr</div>
                <TbRectangle style={{ left:  left }} className='rectangle'/>
            </div>

        </div>
    )
}

export default LangButton
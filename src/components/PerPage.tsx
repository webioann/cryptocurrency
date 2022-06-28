import React, { useState, useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
// import { TiArrowSortedDown } from 'react-icons/ti'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { setPerPage } from '../Redux/paginationSlice'
import '../CSS/per-page.scss'

const PerPage = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const perPage = useAppSelector(state => state.pagin.perPage)
    const dispatch = useAppDispatch()
    const [left,setLeft] = useState<string>('0px')

    return (
        <div className={`per-page ${theme}-per-page`}>
            <p className='title'>per page</p>
            <div className='num-box'>
                <div className='cell' onClick={() => {
                    setLeft('0px') 
                    dispatch(setPerPage(10))
                    }}>10</div>
                <div className='cell' onClick={() => { 
                    setLeft('30px')
                    dispatch(setPerPage(20))
                    }}>20</div>
                <MdCheckBoxOutlineBlank style={{ left:  left }} className='arrow'/>
            </div>

        </div>
    )
}

export default PerPage
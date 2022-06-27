import React, { useState, useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { TiArrowSortedDown } from 'react-icons/ti'
import { lessPerPage, morePerPage } from '../Redux/paginationSlice'
import '../CSS/per-page.scss'

const PerPage = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const perPage = useAppSelector(state => state.pagin.perPage)
    const dispatch = useAppDispatch()
    const [active,setActive] = useState<boolean>(false)

    useEffect(() => {
        
    }, [perPage])

    return (
        <div className={`per-page ${theme}-per-page`}>
            <p className='title'>per page</p>
            <div className='num-box'>
                <p className={`cell`} onClick={() => dispatch(lessPerPage())}>10</p>
                <p className={`cell`} onClick={() => dispatch(morePerPage())}>20</p>
                <TiArrowSortedDown className='arrow'/>
            </div>

        </div>
    )
}

export default PerPage
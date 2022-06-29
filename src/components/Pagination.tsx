import React, { useState, useRef, useEffect } from "react"
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { getCoinsForCurrentPage, changeCurrentPage } from '../Redux/paginationSlice'
import "../CSS/pagination.scss"

function Pagination() {

    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.redux.theme_mode)
    const currentPage = useAppSelector(state => state.pagin.currentPage)
    const perPage = useAppSelector(state => state.pagin.perPage)

    const [pageNumberArray,setpageNumberArray] = useState<number[]>([])
    const total_coins = 460;

    useEffect(() => {
        let fullArray: number[] = []
        if( perPage === 10 && currentPage === 1 ) {
            let totalPages  = Math.ceil( total_coins / perPage ) 
            for (let i = 1; i <= totalPages; i++) {
                fullArray.push(i)
            }
            setpageNumberArray(fullArray)
        }
        if( perPage === 20 && fullArray.length > 24) {
            let totalPages = 23
            for (let i = 1; i <= totalPages; i++) {
                fullArray.push(i)
            }
            dispatch(changeCurrentPage(1))
            setpageNumberArray(fullArray)
        }
    },[ perPage ])

    return (
        <div className="pagination">
            <div className="numy-row">
                {pageNumberArray.map((number,index) => (
                <span className={currentPage === number ? `numy-active-${theme}` : `numy-${theme}`}
                    key={index}
                    onClick={() => dispatch(changeCurrentPage(Number(number)))}>
                    {number}
                </span>
                ))}
            </div>  
        </div> 
    )
}

export default Pagination;

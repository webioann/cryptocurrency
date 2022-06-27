import React, { useState, useRef, useEffect } from "react"
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { getCoinsForCurrentPage, changeCurrentPage } from '../Redux/paginationSlice'
import "../CSS/pagination.scss"

function Pagination() {

    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.redux.theme_mode)
    const currentPage = useAppSelector(state => state.pagin.currentPage)
    // const all_coins = useAppSelector(state => state.redux.coins_data)

    const [totalPages,setTotalPages] = useState<number>(0)
    const [lastPage,setLastPage] = useState<number>(0)
    const [pageNumberArray,setpageNumberArray] = useState<number[]>([])

    const coins_per_page = 20;
    const total_coins = 470;

    useEffect(() => {
        let fullArray: number[] = []
        let totalPages  = Math.ceil( total_coins / coins_per_page ) 
        for (let i = 1; i <= totalPages; i++) {
            fullArray.push(i)
        }
        setLastPage(fullArray.length)
        setpageNumberArray(fullArray)
    },[ currentPage ])


    return (
        <div className="pagination">
            <div className="numy-row">
                {pageNumberArray.map((number,index) => (
                <span className={currentPage === number ? `numy-${theme} active-${theme}` : `numy-${theme}`}
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

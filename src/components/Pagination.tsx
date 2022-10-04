import React, { useState, useEffect } from "react"
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { changeCurrentPage } from '../Redux/paginationSlice'
import "../CSS/pagination.scss"

const Pagination: React.FC = () => {

    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.redux.theme_mode)
    const currentPage = useAppSelector(state => state.pagin.currentPage)
    const [pageNumberArray,setpageNumberArray] = useState<number[]>([])
    const total_coins = 450
    const per_page = 14

    useEffect(() => {
        let numArray: number[] = []
        let totalPages  = Math.ceil( total_coins / per_page ) 
        for (let i = 1; i <= totalPages; i++) {
            numArray.push(i)
        }
        setpageNumberArray(numArray)
    },[ currentPage ])

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

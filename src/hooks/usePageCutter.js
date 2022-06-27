import { useEffect,useRef } from "react"
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { getCoinsForCurrentPage } from '../Redux/paginationSlice'

const usePageCutter = () => {

    
    useEffect(() => {
        if( currentPage > 0 ) {
            dispatch(getCoinsForCurrentPage(onePageData))
            localStorage.setItem('CURRENT_PAGE_DATA',JSON.stringify(onePageData))
        }
        else if( currentPage === 'DOTS_UP' || currentPage === 'DOTS_DOWN' ) {
            let raw = localStorage.getItem('CURRENT_PAGE_DATA')
            let data = JSON.parse(raw)
            dispatch(getCoinsForCurrentPage(data))
        }
    }, [currentPage, all_coins])

    return null
}

export default usePageCutter;


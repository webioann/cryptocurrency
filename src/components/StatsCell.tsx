import React from 'react'
import { useAppSelector } from '../Redux/store'
import '../CSS/stats-cell.scss'

interface IStatsCell {
    title: string;
    data: number | string;
    pref?: string;
    syf?: string;
}

const StatsCell: React.FC<IStatsCell> = ({ title, data, pref, syf }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className='cell cap'>
            <p className={`l-cell ${theme}-l-cell`}>
                {title}
            </p>
            <p className='r-cell'>
                {data ? pref : ''} {data ? data : ''} {data ? syf : ''}
            </p>
        </div>
    )
}

export default StatsCell;
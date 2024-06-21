import React from 'react'
import { useAppSelector, useAppDispatch } from '../Redux/store'
import { setPeriod } from '../Redux/chartDataStorage'
import '../Styles/period-select.scss'

interface IDataForPeriodButton {
    period:   1 | 7 | 14 | 30 | 90 | 180 | 365 |'max'
    buttonInnerText: string
    index: number
}
const PeriodSelect = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)
    const period = useAppSelector(state => state.chart.period)
    const dispatch = useAppDispatch()

    const dataForPeriodButtons: IDataForPeriodButton[] = [
        { period: 1, buttonInnerText: '24h', index: 1 },
        { period: 7, buttonInnerText: '7d', index: 2 },
        { period: 14, buttonInnerText: '14d', index: 3 },
        { period: 30, buttonInnerText: '30d', index: 4 },
        { period: 90, buttonInnerText: '90d', index: 5 },
        { period: 180, buttonInnerText: '6m', index: 6 },
        { period: 365, buttonInnerText: '1y', index: 7 },
        { period: 'max', buttonInnerText: 'max', index: 8 },
    ]
    
    return (
        <div className='select'>
            <div className={`button-snake ${theme}-button-snake`}>
                { dataForPeriodButtons.map(btn => (
                    <span className={(period === btn.period) ? `period active` : `period`} key={btn.index}
                        onClick={() => {
                            dispatch(setPeriod(btn.period))
                            }}>
                        { btn.buttonInnerText }
                    </span>
                )) }
            </div>
        </div>
    )
}

export default PeriodSelect;
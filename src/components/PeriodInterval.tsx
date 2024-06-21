import React, { useState, useMemo } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IChartData } from '../Types/chartData.types'
import { useAppSelector } from '../Redux/store'
import '../Styles/period-interval.scss'

const PeriodInterval: React.FC<IChartData> = ({ chartData }) => {
    
    const theme = useAppSelector(state => state.redux.theme_mode)
    const [firstTimeStamp, setFirstTimeStamp] = useState('')
    const [lastTimeStamp, setLastTimeStamp] = useState('')

    const setCurrentPeriod = () => {
        let months = ['Jan','Feb','Mar','Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
        const lastIndex = chartData.prices.length -1
        // transform first time stamp date
        let firstTimeStampMS = chartData.prices[0][0]
        let firstDate = new Date(firstTimeStampMS)
        let startDay = firstDate.getDate()
        let startMonth = months[firstDate.getMonth()]
        let startYear = firstDate.getFullYear()
        let firstTimeStamp = `${startDay} ${startMonth} ${startYear}`
        setFirstTimeStamp(firstTimeStamp)
        // transform last time stamp date
        let lastTimeStampMS = chartData.prices[lastIndex][0]
        let lastDate = new Date(lastTimeStampMS)
        let endDay = lastDate.getDate()
        let endMonth = months[lastDate.getMonth()] 
        let endYear = lastDate.getFullYear()
        let lastTimeStamp = `${endDay} ${endMonth} ${endYear}`
        setLastTimeStamp(lastTimeStamp)
    }

    useMemo(() => {
        setCurrentPeriod()
    }, [chartData])

    return (
        <div className='chosen-period'>
            <div className={`date-box ${theme}-date-box`}>
                {firstTimeStamp}
            </div>
            <FaLongArrowAltRight className='icon-arrow-to'/>
            <div className={`date-box ${theme}-date-box`}>
                {lastTimeStamp}
            </div>
        </div>
    )
}

export default PeriodInterval;

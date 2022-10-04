import React from 'react'
import { useAppSelector } from '../Redux/store'
import '../CSS/tooltip.scss'

type tooltipType = {
    message: string;
}

const Tooltip: React.FC<tooltipType> = ({ message }) => {

    const theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className={`tooltip ${theme}-tt`}>
            <h3>{ message }</h3>
        </div>
    )
}

export default Tooltip;
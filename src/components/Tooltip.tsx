import React from 'react'
import '../CSS/popup-tooltip.scss'

type tooltipType = {
    message: string;
}

const Tooltip: React.FC<tooltipType> = ({ message }) => {
    return (
        <div className='tooltip'>
            <h3>{ message }</h3>
        </div>
    )
}

export default Tooltip;
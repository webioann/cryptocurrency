import React from 'react'
import '../CSS/warning.scss'

type closeWarningType = {
    closeWarning: () => void;
}

const Warning: React.FC<closeWarningType> = ({ closeWarning }) => {
    return (
        <div className='warning-box' onClick={closeWarning}>
            <h3>you are doing something wrong</h3>
            <h3>Attention, please!</h3>
        </div>
    )
}

export default Warning;
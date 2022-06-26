import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../CSS/warning.scss'

type closeWarningType = {
    closeWarning: () => void;
}

const Warning: React.FC<closeWarningType> = ({ closeWarning }) => {
    return (
        <div className='warning-box' onClick={closeWarning}>
            <div className='icon-row'>
                <IoClose className='icon'/>
            </div>
            <h3>You are doing something wrong.</h3>
            <h3>Attention, please.</h3>
        </div>
    )
}

export default Warning;
import React, { useState, useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { setCurrency } from '../Redux/chartDataStorage'
import { RiArrowDownSLine } from 'react-icons/ri'
import '../CSS/dropdown.scss'

interface ICurrencyData {
    currency: string
    mark: string
}

const DropDown = () => {
    // dropdown menu for 4 currencies changing
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.redux.theme_mode)
    const currentCurrency = useAppSelector(state => state.chart.currency.currentCurrency)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [active, setActive] = useState<string>('')

    const currenciesData: ICurrencyData[] = [
        { currency:  'usd', mark: '\u0024'},
        { currency:  'eur', mark: '\u20AC'},
        { currency:  'jpy', mark: '\u00A5'},
        { currency:  'uah', mark: '\u20B4'}
    ]

    useEffect(() => {
        isOpen ? setActive('active-dropdown') : setActive('')
    }, [isOpen])

    return (
        <div className={`dropdown ${theme}-dropdown`}>
            <p className='dropdown-header' onClick={() => setIsOpen(!isOpen)}>
                {currentCurrency.toUpperCase()}
                <RiArrowDownSLine className='arrow-spiner'/>
            </p>
            <ul className={`dropdown-list ${active} ${theme}-list`}>
                { currenciesData.map( item => (
                    <p onClick={() => {
                            dispatch(setCurrency(item.currency))
                            setIsOpen(false)
                        }}
                        key={item.mark}>
                            { item.currency.toUpperCase() }
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default DropDown;


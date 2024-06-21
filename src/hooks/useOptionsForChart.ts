import { useState, useEffect } from 'react'
import { useAppSelector } from '../Redux/store'
import type { ChartOptions } from 'chart.js'

export const useOptionsForChart = () => {
    // to create chart option object data
    const theme = useAppSelector(state => state.redux.theme_mode)
    const currencyMark = useAppSelector(state => state.chart.currency.currencyMark)
    const [chartColor, setChartColor] = useState<string>('#212529')
    
    useEffect(() => {
        (theme === 'light') ? setChartColor('#212529') : setChartColor('#e8eaed')
    }, [theme])
    
    const options: ChartOptions<'line'> = {
        elements: { point: { radius: 0 } },
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                displayColors: false,
                titleColor: 'rgba(125,165,217,1)',
                titleFont: {weight: 'bolder'} ,
                callbacks: {
                    label: (context: any) => {
                        let label = context.dataset.label || '';
                        if (label) { label += ': ' }
                        if (context.parsed.y !== null) { label = `Price: ${currencyMark} ${context.parsed.y}` }
                        return label;
                    },
                }
            },
        },
        scales: { 
            x: { 
                grid: { display: false },  
                ticks: { display: false }
            } ,
            y: { 
                grid: { 
                    color: chartColor, 
                    borderDash: [10, 10],
                    lineWidth: 0.5,
                }, 
                ticks: {  
                    color: chartColor,
                    callback: (value: number | string) => { return `${currencyMark} ${value}`} 
                }
            },
        },
        interaction: { intersect: false , mode: 'index', axis: 'x' },
    }
    return options
};



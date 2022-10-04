import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js';
import PeriodSelect from './PeriodSelect'
import PeriodInterval from './PeriodInterval'
import { useAppSelector } from '../Redux/store'
import { IChartData } from '../Types/chartData.types'
import '../CSS/line-chart.scss'

interface IChartGradientColor {
    startColor: string
    endColor: string
}

const LineChart: React.FC<IChartData> = ({ chartData }) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

    const currencyMark = useAppSelector(state => state.chart.currency.currencyMark)
    const theme = useAppSelector(state => state.redux.theme_mode)

    const [chartGradientColor, setChartGradientColor] = useState<IChartGradientColor>({
        startColor: 'rgba(125,165,217,1)',
        endColor: '#ffffff'
    })
    const [chartColor, setChartColor] = useState<string>('#212529')

    useEffect(() => {
        if(theme === 'light') {
            setChartColor('#212529')
            setChartGradientColor({
                startColor: 'rgba(125,165,217,1)',
                endColor: '#ffffff'
            })
        }
        else{
            setChartColor('#e8eaed')
            setChartGradientColor({
                startColor: '#5388CD',
                endColor: '#2e3137'
            })
        }
    }, [theme])

    const lineChartData:ChartData<'line'> = {
        labels: [...chartData.prices.map( stamp => new Date(stamp[0]).toLocaleString('en-GB', { hour12: false }))],
        datasets: [
            {
                label: '',
                data: [...chartData.prices.map( prices => Number(prices[1].toFixed(2)))],
                fill: true,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, chartGradientColor.startColor);
                    gradient.addColorStop(1, chartGradientColor.endColor);
                    return gradient;
                },
                borderColor: ['#5388CD'],
                borderWidth: 2,
            }
        ]
    }

    const options:ChartOptions<'line'> = {
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

    return (
        <div className='chart-field'> 
            <div className='chart-tools'>
                <PeriodSelect/>
                <PeriodInterval chartData={ chartData }/>
            </div>
            <div className='chart-wrapper'>
                <Line data={ lineChartData } options={ options }/>
            </div>
        </div>
    )
}

export default LineChart;

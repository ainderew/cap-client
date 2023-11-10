/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
  BarController
} from 'chart.js'
import Loading from '@/components/loading'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
  BarController
)

const GraphChart: React.FC<{
  tags: any[]
  axis: string
  clickCounts: any[]
  config: any[]
  barwidth: number
  show: boolean
  title: string
  loading: boolean
}> = ({ tags, clickCounts, config, axis, barwidth, show, title, loading }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})
  useEffect(() => {
    setChartDataset({
      labels: tags,
      datasets: clickCounts?.map((clickCount, index) => ({
        label: config && config[index] ? config[index].label : '',
        data: clickCount,
        fill: true,
        type: config && config[index] ? config[index].type : '',
        borderColor: config && config[index] ? config[index].hexColor : '',
        backgroundColor: config && config[index] ? config[index].rgbaColor : '',
        barPercentage: 1,
        barThickness: barwidth
      }))
    })

    setChartOptions({
      scales: {
        x: {
          ticks: {
            display: show
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            display: true
          },
          grid: {
            color: 'rgba(43, 153, 255, 1)',
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          position: 'top' as const
        },
        title: {
          display: true,
          text: title
        }
      },
      tension: 0.2,
      maintainAspectRatio: false,
      responsive: true,
      indexAxis: axis
    })
  }, [tags, clickCounts])

  return (
    <div className='h-full flex w-full '>
      {loading ? (<Loading />) : (<Bar className='w-full' options={chartOptions} data={chartDataset} />)}

    </div>
  )
}

export default GraphChart

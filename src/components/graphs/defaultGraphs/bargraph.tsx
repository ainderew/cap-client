import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarController
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarController
)

const BarGraph: React.FC<{
  months: string[]
  clickCounts: number[]
  axis: string
  colors: string[]
  showTicks: boolean
}> = ({ months, clickCounts, axis, colors, showTicks }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: months,
      datasets: [
        {
          data: clickCounts,
          backgroundColor: colors,
          barThickness: 30
        }
      ]
    })

    setChartOptions({
      scales: {
        x: {
          ticks: {
            display: showTicks,
            color: 'black'
          },
          grid: {
            dispaly: false,
            color: 'rgba(43, 153, 255, .5)'
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            display: showTicks,
            color: 'black'
          },
          grid: {
            dispaly: false,
            color: 'rgba(0, 0, 0, .2)'
          }
        }
      },
      layout: {},
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: showTicks,
          text: 'This Year Interactions',
          font: {
            size: 16
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'black',
          borderWidth: 1
        },
        animation: {
          duration: 1500
        },
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              value: clickCounts.reduce((a, b) => Math.max(a, b), 0),
              borderColor: 'rgba(75, 192, 192, 0.8)',
              borderWidth: 2,
              label: {
                content: 'Max Value',
                enabled: true,
                position: 'right'
              }
            }
          ]
        }
      },
      indexAxis: axis,
      maintainAspectRatio: false,
      responsive: true
    })
  }, [months, clickCounts])

  return (
    <div className={'h-full pr-2 shadow-lg'}>
      <Bar options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default BarGraph

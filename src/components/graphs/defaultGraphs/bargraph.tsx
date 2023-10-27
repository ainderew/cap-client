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
  BarController,
} from 'chart.js'
import { ScrollNumberProps } from 'antd/es/badge'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarController,
)
const colorPalette = ['#0bb4ff', '#e60049']
const BarGraph: React.FC<{
  months: string[]
  clickCounts: any[]
  axis: string
  barwidth: number
  showTicks: boolean
}> = ({ months, clickCounts, axis, showTicks, barwidth }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})
  console.log(clickCounts)
  useEffect(() => {
    setChartDataset({
      labels: months,
      datasets: clickCounts?.map((clickCount, index) => ({
        data: clickCount,
        backgroundColor: colorPalette[index], // Assuming colors is an array of colors
        barPercentage: 1,
        type: 'bar',
        barThickness: barwidth, // Set the barPercentage to 1 or adjust as needed
      })),
    })

    setChartOptions({
      scales: {
        x: {
          ticks: {
            display: showTicks,
            color: 'black',
          },
          grid: {
            dispaly: false,
            color: 'rgba(43, 153, 255, .5)',
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            display: showTicks,
            color: 'black',
          },
          grid: {
            dispaly: false,
            color: 'rgba(0, 0, 0, .2)',
          },
        },
      },
      layout: {},
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: showTicks,
          text: 'This Year Interactions',
          font: {
            size: 16,
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'black',
          borderWidth: 1,
        },
        animation: {
          duration: 1500,
        },
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              borderColor: 'rgba(75, 192, 192, 0.8)',
              borderWidth: 2,
              label: {
                content: 'Max Value',
                enabled: true,
                position: 'right',
              },
            },
          ],
        },
      },
      indexAxis: axis,
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [months, clickCounts])

  return (
    <div className={'h-full pr-2 shadow-lg'}>
      <Bar options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default BarGraph

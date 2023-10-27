import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
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
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)
const colorPalette = [
  {
    hexColor: '#0bb4ff',
    rgbaColor: 'rgba(53, 162, 235, 0.5)',
    label: 'previous',
    type: 'line',
  },
  {
    hexColor: '#e60049',
    rgbaColor: 'rgba(239, 119, 131, 0.64)',
    label: 'current',
    type: 'line',
  },
]

const LineGraph: React.FC<{
  tags: string[]
  clickCounts: any[]
  config: any[]
}> = ({ tags, clickCounts }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: tags,
      datasets: clickCounts?.map((clickCount, index) => ({
        label: colorPalette[index].label,
        data: clickCount,
        fill: true,
        type: colorPalette[index].type,
        borderColor: colorPalette[index].hexColor,
        backgroundColor: colorPalette[index].rgbaColor, // Assuming colors is an array of colors
        barPercentage: 1, // Set the barPercentage to 1 or adjust as needed
      })),
    })

    setChartOptions({
      scales: {
        x: {
          ticks: {
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: true,
          },
          grid: {
            color: 'rgba(43, 153, 255, 1)',
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'MONTHLY DATA',
        },
      },
      tension: 0.2,
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [tags, clickCounts])

  return (
    <div className='h-full w-auto '>
      <Line options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default LineGraph

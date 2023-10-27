import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
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
  BarController,
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
  BarElement,
  ArcElement,
  BarController,
)

const GraphChart: React.FC<{
  tags: string[]
  axis: string
  clickCounts: any[]
  config: any[]
  barwidth: number
  show: boolean
}> = ({ tags, clickCounts, config, axis, barwidth, show }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: tags,
      datasets: clickCounts?.map((clickCount, index) => ({
        label: config[index].label,
        data: clickCount,
        fill: true,
        type: config[index].type, // Specify the type from config
        borderColor: config[index].hexColor,
        backgroundColor: config[index].rgbaColor,
        barPercentage: 1,
        barThickness: barwidth,
      })),
    })

    setChartOptions({
      scales: {
        x: {
          ticks: {
            display: show,
          },
          grid: {
            display: show,
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
      indexAxis: axis,
    })
  }, [tags, clickCounts])

  return (
    <div className='h-full w-auto '>
      {/* Use a Bar and Line component to render mixed chart */}
      <Bar options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default GraphChart

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

const LineGraph: React.FC<{ months: string[]; clickCounts: number[] }> = ({
  months,
  clickCounts,
}) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: months,
      datasets: [
        {
          fill: true,
          label: 'Click Count', // You can customize the label here
          data: clickCounts,
          borderColor: 'rgba(43, 153, 255, 1)',
          backgroundColor: 'rgba(14, 255, 212, .5)',
        },
      ],
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
            display: false,
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
  }, [months, clickCounts])

  return (
    <div className='h-full w-auto  '>
      <Line options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default LineGraph

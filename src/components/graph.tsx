import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Graph: React.FC = () => {
  const [chartData, setChartData] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1 // Note: January is 0, so we add 1 to get the correct month.

    setChartData({
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 2, 3, 4, 5, 5, 1],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
          label: 'Dataset 2',
          data: [1, 2, 3, 4, 5, 5, 100, 3, 6, 3, 4, 6],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          fill: true
        }
      ]
    })

    setChartOptions({
      plugins: {
        legend: {
          position: 'top' as const
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      },

      maintainAspectRatio: false,
      responsive: true
    })
  }, [])
  return (
    <div className=' h-[25rem]'>
      <Line options={chartOptions} data={chartData} />
    </div>
  )
}
export default Graph

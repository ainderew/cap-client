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
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})
  /*   const [chartData, setChartData] = useState<number[]>() */

  /*   const [chartLabels, setChartLabels] = useState<string[]>() */

  // sample data
  const analyticsId = '6514301c320a1a8e10b6d90e'
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  async function fetchClicksPerMonthInYear (analyticsId: string, year: number): Promise<any> {
    const url = `http://localhost:5000/api/yearlyclicks/${analyticsId}/${year}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        throw new Error(`Error: ${response.status} - ${await response.text()}`)
      }
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }

  useEffect(() => {
    fetchClicksPerMonthInYear(analyticsId, currentYear)
      .then(monthlyData => {
        setChartDataset({
          labels: monthlyData.map((item: { month: string }) => item.month),
          datasets: [
            {
              label: currentYear,
              data: monthlyData.map((item: { clickCount: number }) => item.clickCount),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
          ]
        })
      })
      .catch(error => {
        console.error('Error:', error.message)
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
      <Line options={chartOptions} data={chartDataset} />
    </div>
  )
}
export default Graph

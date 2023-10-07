import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const colorPalette = [
  '#fd7f6f',
  '#7eb0d5',
  '#b2e061',
  '#bd7ebe',
  '#ffb55a',
  '#ffee65',
  '#beb9db',
  '#fdcce5',
  '#8bd3c7'
]

/* interface ageCount {
  teen: number
  youngAdult: number
  adult: number
  midAdult: number
  senior: number

} */

const DoughnutGraph: React.FC<{ months: string[], clickCounts: number[] }> = ({
  months,
  clickCounts
}) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: months,
      datasets: [
        {
          data: clickCounts,
          backgroundColor: colorPalette // Use the specified color palette
        }
      ]
    })

    setChartOptions({
      plugins: {
      /*   legend: {
          display: true,
          position: 'bottom'
        }, */
        title: {
          display: true,
          text: 'Monthly Age Demographic'
        }
      },
      tension: 0.2,
      maintainAspectRatio: false,
      responsive: true
    })
  }, [months, clickCounts])

  return (
    <div className='h-full w-full shadow-lg'>
      <Doughnut options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default DoughnutGraph

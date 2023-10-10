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
  '#8bd3c7',
]

const DoughnutGraph: React.FC<{
  position: string
  months: string[]
  clickCounts: number[]
}> = ({ months, clickCounts, position }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartDataset({
      labels: months,
      datasets: [
        {
          data: clickCounts,
          backgroundColor: colorPalette, // Use the specified color palette
        },
      ],
    })

    setChartOptions({
      plugins: {
        legend: {
          display: true,
          position: position,
        },
        title: {
          display: true,
          text: 'Monthly Age Demographic',
        },
      },
      tension: 0.2,
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [months, clickCounts])

  return <Doughnut options={chartOptions} data={chartDataset} />
}

export default DoughnutGraph

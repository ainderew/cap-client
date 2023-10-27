import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const colorPalette = ['#81DDC5', '#65A4F5', '#8F7ED4', '#EF7783']

const DoughnutGraph: React.FC<{
  position: string
  months: string[]
  clickCounts: number[]
}> = ({ months, clickCounts, position }) => {
  const [chartDataset, setChartDataset] = useState<any>({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    console.log(clickCounts)
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
          display: false,
          position: position,
        },
        title: {
          display: true,
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

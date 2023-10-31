import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

<<<<<<< HEAD
const colorPalette = ['#A1A1A1', '#81DDC5', '#65A4F5', '#8F7ED4', '#EF7783']

=======
/* const colorPalette = ['#8F7ED4', '#F5C269', '#EF7783', '#65A4F5', '#ffb55a'] */
const colorPalette = ['#65A4F5', '#8F7ED4', '#F5C269', '#EF7783']
>>>>>>> main
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
          backgroundColor: colorPalette,
          // Use the specified color palette
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
      cutout: 90,
      tension: 0.2,
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [months, clickCounts])

  return (
    <div className='h-full w-auto '>
      <Doughnut options={chartOptions} data={chartDataset} />
    </div>
  )
}

export default DoughnutGraph

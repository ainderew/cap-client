import React, { useEffect, useState } from 'react'
import GraphChart from '../defaultGraphs/graphChart'

interface Details {
  yearlyData: any
  isRetrieved: boolean
  monthNames: string[]
}

const config = [
  {
    hexColor: '#0EFFD4',
    rgbaColor: 'rgba(14, 255, 212, 0.4)',
    label: 'Moving Average',
    type: 'line',
  },
  {
    hexColor: '#0bb4ff',
    rgbaColor: '#0bb4ff',
    label: 'previous',
    type: 'bar',
  },
]

const YearlyGraph: React.FC<Details> = ({ ...props }) => {
  const movingAverage: number[] = []
  const windowSize = 3 // 3-month moving average
  const currentDate = new Date()

  for (let i = 0; i < props.yearlyData?.length; i++) {
    if (i < windowSize - 1) {
      // Not enough data to calculate the moving average, so set it as null or zero as appropriate.
      movingAverage.push(0) // or null
    } else {
      // Calculate the moving average for the current month and the two previous months.
      const sum = props.yearlyData
        .slice(i - windowSize + 1, i + 1)
        .reduce((acc: number, val: number) => acc + val, 0)
      const average = sum / windowSize
      movingAverage.push(average)
    }
  }

  return (
    <>
      {!props.isRetrieved ? (
        <div>
          <div className='col-span-3 hidden h-[25rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:block '>
            {/*  <BarGraph
              months={monthNames}
              clickCounts={[props.yearlyData]}
              axis={'x'}
              showTicks={true}
              barwidth={50}
            /> */}
            <GraphChart
              tags={props.monthNames.slice(0, currentDate.getMonth() + 2)}
              clickCounts={[movingAverage, props.yearlyData]}
              config={config}
              axis={'x'}
              barwidth={50}
              show={true}
              title={'Year Data'}
            />
          </div>
          <div className='col-span-3 block h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:hidden '>
            <GraphChart
              tags={props.monthNames}
              clickCounts={[movingAverage, props.yearlyData]}
              config={config}
              axis={'y'}
              barwidth={20}
              show={true}
              title={'Year Data'}
            />
          </div>
        </div>
      ) : (
        <div className='order-first col-span-5 h-[25rem] shadow-md md:col-span-3 md:h-[25rem]'></div>
      )}
    </>
  )
}

export default YearlyGraph

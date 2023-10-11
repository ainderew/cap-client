import React, { useEffect, useState } from 'react'
import BarGraph from '../defaultGraphs/bargraph'
import Loading from '@/components/loading'

interface Details {
  yearlyData: any
  isRetrieved: boolean
}
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
const YearlyGraph: React.FC<Details> = ({ ...props }) => {
  return (
    <>
      {' '}
      {!props.isRetrieved ? (
        <div>
          <div className='col-span-3 hidden h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:block '>
            <BarGraph
              months={props.yearlyData.labels}
              clickCounts={props.yearlyData.clicks}
              axis={'x'}
              colors={colorPalette}
              showTicks={true}
            />
          </div>
          <div className='col-span-3 block h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:hidden '>
            <BarGraph
              months={props.yearlyData.labels}
              clickCounts={props.yearlyData.clicks}
              axis={'y'}
              colors={colorPalette}
              showTicks={true}
            />
          </div>
        </div>
      ) : (
        <div className='order-first col-span-5 h-[25rem] shadow-md md:col-span-3 md:h-[32rem]'>
          <Loading />
        </div>
      )}
    </>
  )
}
export default YearlyGraph

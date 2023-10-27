import React, { useEffect, useState } from 'react'
import BarGraph from '../defaultGraphs/bargraph'
import Loading from '@/components/loading'

interface Details {
  yearlyData: any
  isRetrieved: boolean
}

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
              colors={['#2B99FF']}
              showTicks={true}
            />
          </div>
          <div className='col-span-3 block h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:hidden '>
            <BarGraph
              months={props.yearlyData.labels}
              clickCounts={props.yearlyData.clicks}
              axis={'y'}
              colors={['#2B99FF']}
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

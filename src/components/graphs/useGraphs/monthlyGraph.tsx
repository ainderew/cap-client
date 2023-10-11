import React, { useEffect, useState } from 'react'
import BarGraph from '../defaultGraphs/bargraph'
import Loading from '@/components/loading'
import { config } from '../../../../config'
import useFetchData from '@/hooks/useFetchData'
import LineGraph from '../defaultGraphs/linegraph'
import DoughnutGraph from '@/components/graphs/defaultGraphs/doughnutChart'
import DatePicker, { DatePickerProps } from 'antd/es/date-picker'
import { loadDefaultErrorComponents } from 'next/dist/server/load-components'

interface Details {
  businessId: any
}
const MonthlyGraph: React.FC<Details> = ({ ...props }) => {
  const currentDate = new Date()
  const [monthData, setMonthData] = useState<any>({
    labels: [],
    clicks: [],
    ageCounts: {
      teen: 0,
      youngAdult: 0,
      adult: 0,
      senior: 0,
    },
  })

  const { data: month, loading: load } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/monthlyclicks/${
      props.businessId ?? ''
    }/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`,
  )

  useEffect(() => {
    if (month === null) return

    setMonthData(month)
  }, [month])
  return (
    <>
      <p className='text-[3rem]'>Monthly Report</p>
      <div className='grid  grid-cols-1 items-center gap-4 lg:grid-cols-5'>
        {!load ? (
          <div className='order-first col-span-3 min-h-[25rem] shadow-md md:h-[32rem]'>
            <LineGraph
              months={monthData.labels}
              clickCounts={monthData.clicks}
            />
          </div>
        ) : (
          <div className='order-first  col-span-3 h-[25rem] shadow-md md:h-[32rem]'>
            <Loading />
          </div>
        )}
        {!load ? (
          <div>
            <div className='col-span-2 hidden h-[30rem] w-[25rem]   text-center lg:block'>
              <DoughnutGraph
                months={['12-18', '19-26', '26-60', '60 above']}
                clickCounts={[
                  monthData.ageCounts?.teen,
                  monthData.ageCounts?.youngAdult,
                  monthData.ageCounts?.adult,
                  monthData.ageCounts?.senior,
                ]}
                position={'bottom'}
              />
            </div>
            <div className='col-span-2 block h-[25rem] w-[full]   text-center lg:hidden'>
              <DoughnutGraph
                months={['12-18', '19-26', '26-60', '60 above']}
                clickCounts={[
                  monthData.ageCounts?.teen,
                  monthData.ageCounts?.youngAdult,
                  monthData.ageCounts?.adult,
                  monthData.ageCounts?.senior,
                ]}
                position={'right'}
              />
            </div>
          </div>
        ) : (
          <div className=' col-span-3 h-[25rem]'>
            <Loading />
          </div>
        )}
      </div>
    </>
  )
}

export default MonthlyGraph

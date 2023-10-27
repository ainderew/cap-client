import React, { useEffect, useState } from 'react'
import Loading from '@/components/loading'
import DoughnutGraph from '@/components/graphs/defaultGraphs/doughnutChart'
import GraphChart from '../defaultGraphs/graphChart'
import { Select } from 'antd'
import Image from 'next/image'
interface Details {
  monthData: any
  loading: boolean
}

const config = [
  {
    hexColor: '#0bb4ff',
    rgbaColor: 'rgba(53, 162, 235, 0.5)',
    label: 'previous',
    type: 'line',
  },
  {
    hexColor: '#e60049',
    rgbaColor: 'rgba(239, 119, 131, 0.64)',
    label: 'current',
    type: 'line',
  },
]

const monthNames = [
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
  'December',
]

const MonthlyGraph: React.FC<Details> = ({ ...props }) => {
  const currentDate = new Date()
  const [current, setCurrent] = useState<any>()
  const [previous, setprevious] = useState<any>()
  const [selectedMonth1, setSelectedMonth1] = useState<any>(
    currentDate.getMonth(),
  )
  const [selectedMonth2, setSelectedMonth2] = useState<any>(
    currentDate.getMonth() - 1,
  )

  useEffect(() => {
    setCurrent(props?.monthData?.[selectedMonth1]?.thisMonth)
    setprevious(props?.monthData?.[selectedMonth2]?.thisMonth)
  }, [props.loading, current, selectedMonth2, selectedMonth1])

  const monthsOptions = monthNames.map((month, index) => ({
    value: index.toString(),
    label: month,
  }))
  console.log(((previous?.total - current?.total) / previous?.total) * 100)

  const defaultMonthValue = currentDate.getMonth()

  return (
    <>
      <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-6'>
        <section className='col-span-6 grid grid-cols-1 lg:grid-cols-7'>
          <div className='col-span-1 flex w-full items-center justify-center gap-4 rounded-lg bg-[#2B99FF] px-2 py-8 text-white shadow-lg lg:flex-col lg:py-0'>
            <h1 className='hidden text-[1rem] font-semibold sm:block'>
              Compare Month
            </h1>
            <div className='grid gap-2  sm:flex lg:grid'>
              <div className='flex items-center gap-2 lg:flex-col '>
                <Select
                  labelInValue
                  defaultValue={{
                    value: defaultMonthValue,
                    label: monthNames[defaultMonthValue],
                  }}
                  style={{ width: 100 }}
                  onChange={(value) => setSelectedMonth1(value.value)}
                  options={monthsOptions}
                />
                <p> Total: {current?.total}</p>
              </div>
              <div className='flex items-center gap-2 lg:flex-col'>
                <Select
                  labelInValue
                  defaultValue={{
                    value: defaultMonthValue,
                    label: monthNames[selectedMonth2],
                  }}
                  style={{ width: 100 }}
                  onChange={(value) => setSelectedMonth2(value.value)}
                  options={monthsOptions}
                />
                <p> Total: {previous?.total}</p>
              </div>
            </div>

            <div className='flex items-end  gap-2 px-10 '>
              <div className='flex items-center gap-2 rounded-lg  bg-white p-6 text-black'>
                <div className='relative h-2 w-4  sm:h-10 '>
                  <Image
                    src={
                      ((previous?.total - current?.total) / previous?.total) *
                        100 >
                      0
                        ? '/upArrow.svg'
                        : '/downArrow.svg'
                    }
                    fill
                    alt='arrow'
                  />
                </div>
                <p>
                  {(
                    ((previous?.total - current?.total) / previous?.total) *
                    100
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6  min-h-[15rem] shadow-md md:h-[20rem]'>
            {!props.loading ? (
              <GraphChart
                tags={Array.from({ length: current?.daily.length }, (_, i) =>
                  (i + 1).toString(),
                )}
                clickCounts={[current?.daily, previous?.daily]}
                config={config}
                axis={'x'}
                barwidth={20}
                show={false}
              />
            ) : (
              <Loading />
            )}
          </div>
        </section>

        <section className='col-span-6 grid grid-cols-6 gap-2 text-center '>
          <div className='col-span-2'>
            {!props.loading ? (
              <div>
                <div className='h-[10rem] w-[full] md:h-[22rem]  lg:block'>
                  {current?.ageDemographic.every(
                    (value: any) => value === 0,
                  ) ? (
                    <div className='flex items-center justify-center bg-slate-300 text-center'>
                      No Data
                    </div>
                  ) : (
                    <DoughnutGraph
                      months={['12-18', '19-26', '26-60', '60 above']}
                      clickCounts={current?.ageDemographic}
                      position={'bottom'}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className=' col-span-4 h-[25rem]'>
                <Loading />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default MonthlyGraph

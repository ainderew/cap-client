import React, { useEffect, useState } from 'react'
import GraphChart from '../defaultGraphs/graphChart'
import { Select } from 'antd'
import Image from 'next/image'
import { formatNumber } from '@/utils/functions/numberFormat'
interface Details {
  monthData: any
  loading: boolean
  monthNames: string[]
}

const config = [
  {
    hexColor: '#0bb4ff',
    rgbaColor: 'rgba(53, 162, 235, 0.2)',
    label: 'previous',
    type: 'line'
  },
  {
    hexColor: '#e60049',
    rgbaColor: 'rgba(239, 119, 131, 0.2)',
    label: 'current',
    type: 'line'
  }
]

const MonthlyGraph: React.FC<Details> = ({ ...props }) => {
  const currentDate = new Date()
  const [current, setCurrent] = useState<any>()
  const [previous, setprevious] = useState<any>()
  const [selectedMonth1, setSelectedMonth1] = useState<any>(
    currentDate.getMonth()
  )
  const [selectedMonth2, setSelectedMonth2] = useState<any>(
    currentDate.getMonth() - 1
  )

  useEffect(() => {
    setCurrent(props?.monthData?.[selectedMonth1]?.thisMonth)
    setprevious(props?.monthData?.[selectedMonth2]?.thisMonth)
  }, [props.loading, current, selectedMonth2, selectedMonth1])

  const monthsOptions = props.monthNames.map((month, index) => ({
    value: index.toString(),
    label: month
  }))

  const defaultMonthValue = currentDate.getMonth()

  return (
    <>
      <div className=''>
        <section className='items center jus grid  grid-cols-1 sm:gap-2 lg:grid-cols-5 '>
          <div className='col-span-5 flex items-start gap-2  rounded-md  px-2 py-2 text-sm text-white lg:flex-col '>
            <h1 className='hidden  text-[1rem] font-semibold lg:block'>
              Compare Month
            </h1>
            <div className='flex gap-4 rounded-lg bg-[#2B99FF] px-2 py-2'>
              <div>
                <Select
                  labelInValue
                  defaultValue={{
                    value: defaultMonthValue,
                    label: props.monthNames[defaultMonthValue]
                  }}
                  style={{ width: 100 }}
                  onChange={(value) => { setSelectedMonth1(value.value) }}
                  options={monthsOptions}
                />
                <p> Total: {current?.total}</p>
              </div>
              <div>
                <Select
                  labelInValue
                  defaultValue={{
                    value: defaultMonthValue,
                    label: props.monthNames[selectedMonth2]
                  }}
                  style={{ width: 100 }}
                  onChange={(value) => { setSelectedMonth2(value.value) }}
                  options={monthsOptions}
                />
                <p> Total: {previous?.total}</p>
              </div>
              <div className='flex items-center gap-2 rounded-lg  bg-white px-2   text-black sm:px-10'>
                <div className='relative h-12 w-4  '>
                  <Image
                    src={
                      ((previous?.total - current?.total) / previous?.total) *
                        100 <
                      0 ? '/upArrow.svg' : '/downArrow.svg'
                    }
                    fill
                    alt='arrow'
                  />
                </div>
                <p>
                  {formatNumber(
                    ((current?.total - previous?.total) / previous?.total) *
                    100
                  )}
                  %
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-5 h-[15rem] border-2 shadow-md md:h-[rem]'>
          <GraphChart
              tags={Array.from({ length: current?.daily.length }, (_, i) => (i + 1).toString()
              )}
              clickCounts={[current?.daily, previous?.daily]}
              config={config}
              axis={'x'}
              barwidth={20}
              show={false}
              title={'Monthly Data'} loading={props.loading} />

          </div>
        </section>
      </div>
    </>
  )
}

export default MonthlyGraph

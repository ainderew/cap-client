import BarGraph from '@/components/bargraph'
import Clock from '@/components/clock'
import DataCard from '@/components/dataCard'
import DoughnutGraph from '@/components/doughnutChart'
import LineGraph from '@/components/linegraph'
import useStores from '@/core/stores/UseStores'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/loading'
import useFetchData from '@/hooks/useFetchData'
import { config } from '../../../config'

import DefaultLayout from '../layouts/default'
import BusinessNavBar from '@/components/businessNavbar'

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
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
const Dashboard: React.FC = () => {
  const currentDate = new Date()
  const [yearlyData, setYearlyData] = useState<any>({ labels: [], clicks: [] })

  const [currentYearly, setCurrentYearly] = useState<any>(0)
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<boolean>(true)
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
  const [selectedMonthnum, setSelectedMonthnum] = useState(
    currentDate.getMonth(),
  )
  const formattedDate = currentDate.toLocaleDateString(undefined, options)
  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id

  const { data: year } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/yearlyclicks/${
      businessId ?? ''
    }/${currentDate.getFullYear()}`,
  )
  const { data: month } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/monthlyclicks/${
      businessId ?? ''
    }/${currentDate.getFullYear()}/${selectedMonthnum + 1}`,
  )
  const { data: totalYear } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/clicks/${
      businessId ?? ''
    }/${currentDate.getFullYear()}`,
  )

  useEffect(() => {
    if (year === null || month === null || totalYear === null) return

    setYearlyData(year)
    setMonthData(month)
    console.log(totalYear)
    setCurrentYearly(totalYear)
    setIsRetrieved(true)
    setIsSelected(true)
  }, [year, selectedMonthnum, totalYear, month])

  const [selectedMonthstr, setSelectedMonthstr] = useState(
    yearlyData.labels[currentDate.getMonth() + 1],
  )
  const handleMonthChange = (event: { target: { value: string } }): void => {
    const selectedValue = parseInt(event.target.value, 10)
    setSelectedMonthnum(selectedValue)
    setSelectedMonthstr(yearlyData.labels[selectedValue])
    setIsSelected(false)
  }

  return (
    <DefaultLayout>
      <div className='px-4 lg:px-[5rem] 2xl:px-[15rem]'>
        <div className=' mt-10 grid  grid-cols-8 justify-center gap-2'>
          <section className='col-span-8'>
            <div className='grid grid-cols-1 gap-2 pt-2 lg:grid-cols-4'>
              <div
                className='col-span-4 flex h-[10rem] flex-col justify-center rounded-md bg-[#3ba0ff] text-white md:col-span-1 md:h-[30rem] md:rounded-[2rem]'
                style={{
                  backgroundImage: 'url("../images/calendarBg.svg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <div className=''>
                  <div className='px-2 text-[2rem] font-bold md:text-[5rem] md:leading-[7rem] md:tracking-[-.5rem] xl:text-6xl xl:tracking-normal'>
                    Business Data
                  </div>
                  <span className='px-2'>{formattedDate}</span>
                  <div className='px-2 md:text-[3.5rem]'>
                    <Clock />
                  </div>
                </div>
              </div>
              <div className='col-span-3'>
                {isRetrieved ? (
                  <div>
                    <div className='col-span-3 hidden h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:block '>
                      <BarGraph
                        months={yearlyData.labels}
                        clickCounts={yearlyData.clicks}
                        axis={'x'}
                        colors={colorPalette}
                        showTicks={true}
                      />
                    </div>
                    <div className='col-span-3 block h-[30rem] rounded-lg border-2 border-solid border-[#5d5d5d29] md:hidden '>
                      <BarGraph
                        months={yearlyData.labels}
                        clickCounts={yearlyData.clicks}
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
              </div>
            </div>
          </section>

          <section className='col-span-8 mt-10'>
            <span className='text-[1.4rem] font-semibold'>Current Data </span>
            <div className=' grid w-full  grid-cols-2 gap-2   md:grid-cols-4 '>
              <DataCard
                title={'Queries This Year'}
                data={currentYearly}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Queries This Month'}
                data={yearlyData.clicks[currentDate.getMonth()]}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Monthly Queries'}
                data={yearlyData.clicks[currentDate.getMonth()] / 12}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Daily Queries'}
                data={yearlyData.clicks[currentDate.getMonth()] / 365}
                isRetrieved={isRetrieved}
              />
            </div>
          </section>

          <section className='col-span-8 mt-10 '>
            <p className='text-[3rem]'>Monthly Report</p>
            <div>
              <p>Select Month: {selectedMonthstr}</p>
              <select value={selectedMonthnum} onChange={handleMonthChange}>
                {yearlyData.labels.map((label: any, index: any) => (
                  <option key={index} value={index}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className=' grid grid-cols-5 gap-4'>
              {isSelected ? (
                <div className='order-first col-span-5 min-h-[25rem] shadow-md md:h-[32rem] xl:col-span-3'>
                  <LineGraph
                    months={monthData.labels}
                    clickCounts={monthData.clicks}
                  />
                </div>
              ) : (
                <div className='order-first col-span-5 h-[25rem] shadow-md md:col-span-3 md:h-[32rem]'>
                  <Loading />
                </div>
              )}
              <div className='col-span-5 flex min-h-full w-auto items-center justify-center xl:col-span-2'>
                {isRetrieved ? (
                  <div className='grid h-10 w-10 text-center'>
                    <DoughnutGraph
                      months={['12-18', '19-26', '26-60', '60 above']}
                      clickCounts={[
                        monthData.ageCounts?.teen,
                        monthData.ageCounts?.youngAdult,
                        monthData.ageCounts?.adult,
                        monthData.ageCounts?.senior,
                      ]}
                    />
                  </div>
                ) : (
                  <div className=' col-span-3 h-[25rem]'>
                    <Loading />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Dashboard

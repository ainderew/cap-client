import BarGraph from '@/components/bargraph'
import Clock from '@/components/clock'
import DataCard from '@/components/dataCard'
import DoughnutGraph from '@/components/doughnutChart'
import LineGraph from '@/components/linegraph'
import {
  getYearlyData,
  type clickYealy,
  getMonthlyData,
  getYearData
} from '@/hooks/analytics'

import React, { useEffect, useState } from 'react'

const Dashboard: React.FC = () => {
  const colorPalette = [
    '#fd7f6f',
    '#7eb0d5',
    '#b2e061',
    '#bd7ebe',
    '#ffb55a',
    '#ffee65',
    '#beb9db',
    '#fdcce5',
    '#8bd3c7'
  ]

  const [yearly, setYearly] = useState<clickYealy[]>([])
  const [monthly, setMonthly] = useState<clickYealy[]>([])
  const [currentYearly, setCurrentYearly] = useState<number>(0)
  const [prevYearly, setPrevYearly] = useState<number>(0)
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false)

  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formattedDate = currentDate.toLocaleDateString(undefined, options)

  /*   const businessId = authStore.userProfile?.profile._id */
  const businessId = '6514301c320a1a8e10b6d90e'
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const [selectedMonthnum, setSelectedMonthnum] = useState(currentMonth)
  useEffect(() => {
    const fetchClicks = async (): Promise<any> => {
      try {
        const yearlyData = await getYearlyData(businessId, currentYear)
        const monthlyData = await getMonthlyData(
          businessId,
          currentYear,
          selectedMonthnum + 1
        )
        const CurrentYearlyData = await getYearData(businessId, currentYear)
        const prevYearlyData = await getYearData(businessId, currentYear - 1)

        setYearly(yearlyData)
        setMonthly(monthlyData)
        setCurrentYearly(CurrentYearlyData)
        setPrevYearly(prevYearlyData)
        setIsRetrieved(true)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchClicks()
  }, [])

  const monthLabels = yearly.map((item) => item.label)
  const monthlyClicks = yearly.map((item) => item.click)

  const dailyLabels = monthly.map((item) => item.label)
  const dailyClicks = monthly.map((item) => item.click)

  const [selectedMonthstr, setSelectedMonthstr] = useState(monthLabels[currentMonth + 1])

  const handleMonthChange = (event: { target: { value: string } }): void => {
    const selectedValue = parseInt(event.target.value, 10) // Parse the selected value as an integer
    setSelectedMonthnum(selectedValue)
    setSelectedMonthstr(monthLabels[selectedValue])
    console.log(selectedValue)
    console.log(monthLabels[selectedValue])
  }
  /*  console.log(dailyClicks) */

  return (
    <div className='  font-poppins'>
      <div className='px-4 lg:px-[5rem]  2xl:px-[15rem]  '>
        <div className=' mt-10 grid  grid-cols-8 justify-center gap-2'>

        <section className='col-span-8   '>
            <div className='grid  grid-cols-1  gap-2 pt-2 lg:grid-cols-4'>

              <div className='flex md:h-[30rem] h-[10rem] text-white  col-span-4 md:col-span-1   flex-col  justify-center   rounded-md md:rounded-[2rem] bg-[#3ba0ff]'
              style={{
                backgroundImage: 'url("../images/calendarBg.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className='py-[10rem]'>
                <div className='px-2 text-[2rem] md:text-[5rem] font-bold md:leading-[7rem] md:tracking-[-.5rem]'>
                  Business Data
                </div>
                <span className='px-2'>{formattedDate}</span>
                <div className='px-2 md:text-[3.5rem]'><Clock/></div>
                </div>

              </div>

              <div className='col-span-3 md:block hidden border-solid border-2 rounded-lg border-[#5d5d5d29] h-[30rem] '>
                <BarGraph
                  months={monthLabels}
                  clickCounts={monthlyClicks}
                  axis={'x'}
                  colors={colorPalette}
                  showTicks={true}
                />
              </div>
              <div className='col-span-3 md:hidden block border-solid border-2 rounded-lg border-[#5d5d5d29] h-[30rem] '>
                <BarGraph
                  months={monthLabels}
                  clickCounts={monthlyClicks}
                  axis={'y'}
                  colors={colorPalette}
                  showTicks={true}
                />
              </div>
            </div>
          </section>

          {/* labels */}
          <section className='col-span-8 mt-10'>
            <span className='text-[1.4rem] font-semibold'>Current Data </span>
            <div className=' grid w-full  grid-cols-2 gap-2   md:grid-cols-4 '>
              <DataCard
                title={'Queries This Year'}
                data={currentYearly}
                prevData={prevYearly}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Queries This Month'}
                data={monthlyClicks[currentMonth]}
                prevData={
                  monthlyClicks[currentMonth === 1 ? 11 : currentMonth - 1]
                }
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Monthly Queries'}
                data={110}
                prevData={1000}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Daily Queries'}
                data={20}
                prevData={0}
                isRetrieved={isRetrieved}
              />
            </div>
          </section>

        <section className='col-span-8 mt-10 '>
          <p className='text-[3rem]'>Monthly Report</p>
          <div>
          <p>Select Month: {selectedMonthstr}</p>
      <select value={selectedMonthnum} onChange={handleMonthChange}>
      {monthLabels.map((label, index) => (
          <option key={index} value={index}>
            {label}
          </option>
      ))}
        {/* map monthLabels  */}
      </select>

    </div>
          <div className=' grid grid-cols-5 gap-4'>
          <div className='h-[25rem] shadow-md col-span-5 md:col-span-3 md:h-[32rem] order-first'>
            <LineGraph months={dailyLabels} clickCounts={dailyClicks} />
        </div>
          <div className=' min-h-full col-span-5 md:col-span-2 '>

            <div className='grid text-center h-[25rem]'>

              <DoughnutGraph
                months={['12-18', '19-26', '26-46', '46 above']}
                clickCounts={[33, 4, 55, 4, 6]}
              />
            </div>
          </div>
          </div>

        </section>
        </div>
      </div>
    </div>
  )
}
export default Dashboard

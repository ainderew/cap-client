import BarGraph from '@/components/bargraph'
import Clock from '@/components/clock'
import DataCard from '@/components/dataCard'
import DoughnutGraph from '@/components/doughnutChart'
import LineGraph from '@/components/linegraph'
import Image from 'next/image'
import { useStores } from '@/core/stores/UseStores'
import {
  getYearlyData,
  getMonthlyData,
  getYearData
} from '@/pages/api/analytics'

import React, { useEffect, useState } from 'react'

const Dashboard: React.FC = () => {
  const [yearlyData, setYearlyData] = useState<number[]>([])
  const [yearlyLabel, setYearlyLabel] = useState<string[]>([])
  const [monthlyData, setMonthlyData] = useState<number[]>([])
  const [monthlyLabel, setMonthlyLabel] = useState<string[]>([])

  const [currentYearly, setCurrentYearly] = useState<number>(0)
  const [prevYearly, setPrevYearly] = useState<number>(0)
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<boolean>(false)
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
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = currentDate.toLocaleDateString(undefined, options)
  const { authStore } = useStores()
  const businessId = authStore.userProfile?.profile._id
  console.log(businessId)
  /*   const businessId = '6514301c320a1a8e10b6d90e' */
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const [selectedMonthnum, setSelectedMonthnum] = useState(currentMonth)

  useEffect(() => {
    const fetchClicks = async (): Promise<any> => {
      try {
        if (businessId !== null && businessId !== undefined) {
          const yearlyData = await getYearlyData(businessId, currentYear)
          const monthlyData = await getMonthlyData(
            businessId,
            currentYear,
            selectedMonthnum + 1
          )
          const CurrentYearlyData = await getYearData(businessId, currentYear)
          const prevYearlyData = await getYearData(businessId, currentYear - 1)

          setYearlyData(yearlyData.map((item: { click: any }) => item.click))
          setYearlyLabel(yearlyData.map((item: { label: any }) => item.label))
          setMonthlyData(monthlyData.map((item: { click: any }) => item.click))
          setMonthlyLabel(monthlyData.map((item: { label: any }) => item.label))
          setCurrentYearly(CurrentYearlyData)
          setPrevYearly(prevYearlyData)
          setIsRetrieved(true)
          setIsSelected(true)
        }
      } catch (error) {
        console.log(error)
      }
    }

    void fetchClicks()
  }, [selectedMonthnum])

  const [selectedMonthstr, setSelectedMonthstr] = useState(yearlyLabel[currentMonth + 1])
  const handleMonthChange = (event: { target: { value: string } }): void => {
    const selectedValue = parseInt(event.target.value, 10)
    setSelectedMonthnum(selectedValue)
    setSelectedMonthstr(yearlyLabel[selectedValue])
    setIsSelected(false)
  }

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

             { isRetrieved ? (<div className='col-span-3'> <div className='col-span-3 md:block hidden border-solid border-2 rounded-lg border-[#5d5d5d29] h-[30rem] '>
              <BarGraph
                months={yearlyLabel}
                clickCounts={yearlyData}
                axis={'x'}
                colors={colorPalette}
                showTicks={true}
              />
            </div>
            <div className='col-span-3 md:hidden block border-solid border-2 rounded-lg border-[#5d5d5d29] h-[30rem] '>
              <BarGraph
                months={yearlyLabel}
                clickCounts={yearlyData}
                axis={'y'}
                colors={colorPalette}
                showTicks={true}
              />
            </div>
            </div>
             ) : (
              <div className=' col-span-3 min-h-[30rem]'>
              <div className="flex h-full w-full flex-col items-center justify-center gap-4">
               <div className="relative h-[20%] w-[20%]">
                 <Image className="float" src={'/logo.svg'} fill alt="loading" />
               </div>
               <span className="text-xl text-[#D0D0D0]">Getting things ready</span>
             </div>
             </div>
             )}

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
                data={yearlyData[currentMonth]}
                prevData={
                  yearlyData[currentMonth === 1 ? 11 : currentMonth - 1]
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
      {yearlyLabel.map((label, index) => (
          <option key={index} value={index}>
            {label}
          </option>
      ))}

      </select>

    </div>
          <div className=' grid grid-cols-5 gap-4'>

        {isSelected ? (<div className='min-h-[25rem] shadow-md col-span-5 md:col-span-3 md:h-[32rem] order-first'>
            <LineGraph months={monthlyLabel} clickCounts={monthlyData} />
        </div>) : (<div className='h-[25rem] shadow-md col-span-5 md:col-span-3 md:h-[32rem] order-first'>
                 <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <div className="relative h-[20%] w-[20%]">
                    <Image className="float" src={'/logo.svg'} fill alt="loading" />
                  </div>
                  <span className="text-xl text-[#D0D0D0]">Getting things ready</span>
                </div>
                </div>
        )}
          <div className=' min-h-full col-span-5 md:col-span-2 '>
          {isRetrieved ? (<div className='grid text-center h-[25rem]'>
              <DoughnutGraph
                months={['12-18', '19-26', '26-46', '46 above']}
                clickCounts={[33, 4, 55, 4, 6]}
              />
            </div>) : (<div className=' col-span-3 h-[25rem]'>
                 <div className="">
                  <div className="relative min-h-[20%] w-[20%]">
                    <Image className="float" src={'/logo.svg'} fill alt="loading" />
                  </div>
                  <span className="text-xl text-[#D0D0D0]">Getting things ready</span>
                </div>
                </div>
          )}

          </div>
          </div>

        </section>
        </div>
      </div>
    </div>
  )
}
export default Dashboard

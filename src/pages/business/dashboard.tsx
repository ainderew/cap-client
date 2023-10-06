import BarGraph from '@/components/bargraph'
import Clock from '@/components/clock'
import DataCard from '@/components/dataCard'
import DoughnutGraph from '@/components/doughnutChart'
import LineGraph from '@/components/linegraph'
import { useStores } from '@/core/stores/UseStores'
import {
  getYearlyData,
  getMonthlyData,
  getYearData,
  type ClicksForm
} from '@/pages/api/analytics'

import React, { useEffect, useState } from 'react'
import Loading from '@/components/loading'

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
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
  '#8bd3c7'
]
const Dashboard: React.FC = () => {
  const currentDate = new Date()
  const [yearlyData, setYearlyData] = useState<number[]>([])
  const [yearlyLabel, setYearlyLabel] = useState<string[]>([])
  const [currentYearly, setCurrentYearly] = useState<number>(0)
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [monthData, setMonthData] = useState<ClicksForm>({
    labels: [],
    clicks: [],
    ageCounts: {
      teen: 0,
      youngAdult: 0,
      adult: 0,
      senior: 0
    }

  })

  const formattedDate = currentDate.toLocaleDateString(undefined, options)
  const { authStore } = useStores()
  const businessId = authStore.userProfile?.profile._id

  const [selectedMonthnum, setSelectedMonthnum] = useState(currentDate.getMonth())

  useEffect(() => {
    const fetchClicks = async (): Promise<any> => {
      try {
        console.log(businessId)
        if (businessId !== null && businessId !== undefined) {
          const yearlyData = await getYearlyData(businessId, currentDate.getFullYear())
          const monthlyData = await getMonthlyData(
            businessId,
            currentDate.getFullYear(),
            selectedMonthnum + 1
          )
          const CurrentYearlyData = await getYearData(businessId, currentDate.getFullYear())

          setYearlyData(yearlyData.clicks)
          setYearlyLabel(yearlyData.labels)
          setMonthData(monthlyData)
          setCurrentYearly(CurrentYearlyData)
          console.log(businessId)
          console.log(monthData.labels)
          setIsRetrieved(true)
          setIsSelected(true)
        }
      } catch (error) {
        console.log(error)
      }
    }

    void fetchClicks()
  }, [selectedMonthnum])

  const [selectedMonthstr, setSelectedMonthstr] = useState(yearlyLabel[currentDate.getMonth() + 1])
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

        <section className='col-span-8'>
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
              <div className='col-span-3'>
              {isRetrieved ? (
             <div>
            <div className='col-span-3 md:block hidden border-solid border-2 rounded-lg border-[#5d5d5d29] h-[30rem] '>
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
                <div className='h-[25rem] shadow-md col-span-5 md:col-span-3 md:h-[32rem] order-first'>
            <Loading/>
                </div>
              )}
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
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Queries This Month'}
                data={yearlyData[currentDate.getMonth()]}

                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Monthly Queries'}
                data={110}
                isRetrieved={isRetrieved}
              />
              <DataCard
                title={'Average Daily Queries'}
                data={20}
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
            <LineGraph months={monthData.labels} clickCounts={monthData.clicks} />
        </div>) : (<div className='h-[25rem] shadow-md col-span-5 md:col-span-3 md:h-[32rem] order-first'>
            <Loading/>
                </div>
        )}
          <div className=' min-h-full col-span-5 md:col-span-2 '>
          {isRetrieved ? (<div className='grid text-center h-[25rem]'>
              <DoughnutGraph
                months={['12-18', '19-26', '26-60', '60 above']}
                clickCounts={[monthData.ageCounts?.teen, monthData.ageCounts?.youngAdult, monthData.ageCounts?.adult, monthData.ageCounts?.senior]}
              />
            </div>) : (<div className=' col-span-3 h-[25rem]'>
                <Loading/>
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

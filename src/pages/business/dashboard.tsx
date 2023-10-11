import Clock from '@/components/clock'
import useStores from '@/core/stores/UseStores'
import React, { useEffect, useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import { config } from '../../../config'
import DefaultLayout from '../layouts/default'
import YearlyGraph from '@/components/graphs/useGraphs/yearlyGraph'
import CurrentData from '@/components/graphs/useGraphs/cuereentData'
import MonthlyGraph from '@/components/graphs/useGraphs/monthlyGraph'

const Dashboard: React.FC = () => {
  const currentDate = new Date()
  const [yearlyData, setYearlyData] = useState<any>({ labels: [], clicks: [] })
  const [currentYearly, setCurrentYearly] = useState<any>(0)

  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id

  const { data: year, loading: isRetrieved } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/yearlyclicks/${
      businessId ?? ''
    }/${currentDate.getFullYear()}`,
  )

  const { data: totalYear } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/clicks/${
      businessId ?? ''
    }/${currentDate.getFullYear()}`,
  )

  useEffect(() => {
    if (year === null || totalYear === null) return

    setYearlyData(year)
    setCurrentYearly(totalYear)
  }, [year, totalYear])

  return (
    <DefaultLayout>
      <div className='px-4 lg:px-[5rem] 2xl:px-[15rem]'>
        <div className=' mt-10 grid  grid-cols-8 justify-center gap-2'>
          <section className='col-span-8 grid grid-cols-1 gap-2 pt-2 lg:grid-cols-4'>
            <div
              className='col-span-4 flex h-[10rem] flex-col justify-center rounded-md bg-[#3ba0ff] text-white md:col-span-1 md:h-[30rem] md:rounded-[2rem]'
              style={{
                backgroundImage: 'url("../images/calendarBg.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <Clock />
            </div>
            <div className='col-span-3'>
              <YearlyGraph
                isRetrieved={isRetrieved}
                yearlyData={{ ...yearlyData }}
              />
            </div>
          </section>
          <section className='col-span-8 mt-10'>
            <span className='text-[1.4rem] font-semibold'>Current Data </span>
            <CurrentData
              clicks={[
                currentYearly,
                yearlyData.clicks[currentDate.getMonth()],
                yearlyData.clicks[currentDate.getMonth()] / 12,
                yearlyData.clicks[currentDate.getMonth()] / 365,
              ]}
              isRetrieved={isRetrieved}
            />
          </section>
          <section className='col-span-8 mb-10 mt-10 '>
            <MonthlyGraph businessId={businessId} />
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Dashboard

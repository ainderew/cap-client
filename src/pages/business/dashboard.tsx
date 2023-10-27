import Clock from '@/components/clock'
import useStores from '@/core/stores/UseStores'
import React, { useEffect, useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import { config } from '../../../config'
import DefaultLayout from '../layouts/default'
import YearlyGraph from '@/components/graphs/useGraphs/yearlyGraph'
import CurrentData from '@/components/graphs/useGraphs/cuereentData'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import MonthlyGraph from '@/components/graphs/useGraphs/monthlyGraph'
import Summary from '@/components/graphs/useGraphs/summary'

const Dashboard: React.FC = () => {
  const currentDate = new Date()
  const [clicksdata, setClicksdata] = useState<any>()

  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id
  /* 
  const [getYearlyClicks, data] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/api/yearlyclicks/${
      businessId ? businessId : ''
    }/${currentDate.getFullYear()}`,
  )
 */
  const [getCicks, data] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/api/clicks/${
      businessId ? businessId : ''
    }/${currentDate.getFullYear()}`,
  )
  // getYearlyClicks()

  useEffect(() => {
    if (!businessId) return
    const run = async () => {
      //const yearlyClicks = await getYearlyClicks()
      const currentClicks = await getCicks()

      //  setYearlyData(yearlyClicks)
      setClicksdata(currentClicks)
    }

    run()
  }, [businessId])

  // useEffect(() => {
  //   if (year === null || totalYear === null) return
  //console.log(clicksdata?.clicks[9]?.thisMonth?.daily)
  //   setYearlyData(year)
  //   setCurrentYearly(totalYear)
  // }, [year, totalYear])
  console.log('mark')
  return (
    <DefaultLayout>
      <div className='px-4 lg:px-[5rem] 2xl:px-[13rem]'>
        <div className=' mt-10 grid  grid-cols-8 justify-center gap-2'>
          <section className='col-span-8 grid grid-cols-1 gap-2 pt-2 lg:grid-cols-4'>
            <div
              className='col-span-4 flex h-[10rem] flex-col justify-center rounded-md border-2 bg-[#ffffff] text-white shadow-lg md:col-span-1 md:rounded-[2rem] lg:h-[25rem]'
              style={{
                backgroundImage: 'url("../images/calendarBg.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              {/*   <Summary yearlyData={undefined} isRetrieved={false} /> */}
              <Clock />
            </div>
            <div className='col-span-3'>
              <YearlyGraph
                isRetrieved={data.loading}
                yearlyData={clicksdata?.monthlyCounts}
              />
            </div>
          </section>

          <section className='col-span-8 mt-4'>
            <span className='text-[1.4rem] font-semibold'>Current Data </span>
            <CurrentData
              clicks={[
                clicksdata?.thisyearClicks,
                clicksdata?.monthlyCounts[currentDate.getMonth()],
                clicksdata?.monthlyCounts[currentDate.getMonth()] /
                  currentDate.getMonth(),
                clicksdata?.monthlyCounts[currentDate.getMonth()] /
                  currentDate.getDay(),
              ]}
              isRetrieved={data.loading}
            />
          </section>

          <section className='col-span-8 mb-10 mt-10 '>
            <span className=' text-[1.4rem] font-semibold'>Monthly Report</span>
            <MonthlyGraph
              monthData={clicksdata?.clicks}
              loading={data.loading}
            />
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Dashboard

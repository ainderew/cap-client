import Clock from '@/components/clock'
import useStores from '@/core/stores/UseStores'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import DefaultLayout from '../layouts/default'
import YearlyGraph from '@/components/graphs/useGraphs/yearlyGraph'
import CurrentData from '@/components/graphs/useGraphs/cuereentData'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import MonthlyGraph from '@/components/graphs/useGraphs/monthlyGraph'
import AgeData from '@/components/graphs/useGraphs/ageData'
import TrendGraph from '@/components/graphs/useGraphs/trendGraph'

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
const Dashboard: React.FC = () => {
  const currentDate = new Date()
  const [clicksdata, setClicksdata] = useState<any>()

  const { authStore } = useStores()
  const businessId = authStore.userProfile?._id

  const [getCicks, data] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/api/clicks/${
      businessId ? businessId : ''
    }/${currentDate.getFullYear()}`,
  )

  useEffect(() => {
    if (!businessId) return
    const run = async () => {
      const currentClicks = await getCicks()
      setClicksdata(currentClicks)
    }

    run()
  }, [businessId])

  return (
    <DefaultLayout>
      <div className='px-4 lg:px-[5rem] 2xl:px-[10rem]'>
        <div className=' mt-10 grid  grid-cols-8 justify-center gap-2'>
          <section className='col-span-8 grid grid-cols-1 gap-2 pt-2 lg:grid-cols-4'>
            <div
              className='col-span-4 flex h-[10rem] flex-col justify-center overflow-hidden rounded-md border-2 bg-[#005cb3df]  text-white shadow-lg md:col-span-1 md:rounded-[2rem] lg:h-[25rem]'
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
                monthNames={monthNames}
              />
            </div>
          </section>

          <section className='col-span-8 mt-4'>
            <span className='text-[1.4rem] font-semibold'>Current Data </span>
            <CurrentData
              clicks={[
                clicksdata?.thisyearClicks,
                clicksdata?.monthlyCounts[currentDate.getMonth()],
                (clicksdata?.monthlyCounts[currentDate.getMonth()] /
                  (clicksdata?.thisyearClicks / (currentDate.getMonth() + 1))) *
                  100,
                (clicksdata?.monthlyCounts[currentDate.getMonth()] /
                  currentDate.getDate()) *
                  100,
              ]}
              isRetrieved={data.loading}
            />
          </section>
          <section className='col-span-8 min-h-full  '>
            <span className=' text-[1.4rem] font-semibold'>Trend Report</span>

            <TrendGraph />
          </section>
          <section className='col-span-8 mb-10  '>
            <span className=' text-[1.4rem] font-semibold'>Monthly Report</span>
            <MonthlyGraph
              monthData={clicksdata?.clicks}
              loading={data.loading}
              monthNames={monthNames}
            />
          </section>
          {/*   <section className='col-span-8 min-h-full  '>
            <TrendGraph monthNames={monthNames} />
          </section> */}
          <section className='col-span-8 min-h-full  '>
            <span className=' text-[1.4rem] font-semibold'>Demographics</span>

            <AgeData monthData={clicksdata?.clicks} loading={data.loading} />
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Dashboard

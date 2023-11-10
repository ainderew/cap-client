/* eslint-disable @typescript-eslint/explicit-function-return-type */
import useLazyFetchData from '@/hooks/useLazyFetchData'
import React, { useEffect, useState } from 'react'
import { config } from '../../../../config'
import GraphChart from '../defaultGraphs/graphChart'
import {
  ConfigIndustry
} from '@/components/businessRegister/menulists'
import Loading from '@/components/loading'
import { formatNumber } from '@/utils/functions/numberFormat'

const color = ['#0bb4ff', '#F9D9B7', '#F0A7A0', '#E777A7', '#A2D7C6']
const TrendGraph: React.FC = () => {
  const currentDate = new Date()

  const [industryData, setIndustryData] = useState<any>()

  const [getData, data] = useLazyFetchData(
    `${
      config.BACKEND_ENDPOINT
    }/api/business/categories/${currentDate.getFullYear()}`
  )

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getData()
      setIndustryData(datas?.slice(0, 5))
    }
    void fetchData()
  }, [])
  return (
    <div className='grid grid-cols-1 items-center justify-center rounded-sm sm:gap-4 lg:grid-cols-5'>
      <div className='col-span-1 flex flex-col'>
        <div className='text-[1.2rem]'>Top Industry</div>
        <div className=' flex flex-col justify-center rounded-lg  border-2 bg-white  px-4  text-sm shadow-lg lg:min-h-[18rem]'>
          {industryData?.slice(0, 5).map((item: any, index: any) => (
            <div className='grid grid-cols-[80%_20%] py-2' key={index}>
              <div className='flex'>
                <p className='h-[.1rem] bg-black'></p>
                {item.industry}
              </div>
              <p>{formatNumber(item.counts)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-2 h-[12rem] border-2 bg-white shadow-md md:h-[20rem] '>
        {!data.loading ? (
          <GraphChart
            tags={Array.from({ length: 12 }, (_, index) => index + 1)}
            axis={'x'}
            clickCounts={industryData?.map((item: any) => item.monthly)}
            config={ConfigIndustry(
              industryData?.map((item: any) => item.industry),
              color,
              'line'
            )}
            barwidth={0}
            show={false}
            title={'Top Five Engagement'} loading={data.loading} />
        ) : (
          <Loading />
        )}
      </div>
      <div className='col-span-2 h-[12rem] border-2 bg-white shadow-md md:h-[20rem] '>
        {!data.loading ? (
          <GraphChart
            tags={Array.from({ length: 4 }, (_, index) => index + 1)}
            axis={'x'}
            clickCounts={[industryData?.map((item: any) => item.counts)]}
            config={ConfigIndustry(
              industryData?.map((item: any) => item.industry),
              color,
              'bar'
            )}
            barwidth={50}
            show={false}
            title={'Total Engagement'} loading={data.loading} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default TrendGraph

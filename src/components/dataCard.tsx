import React from 'react'
/* import BarGraph from './bargraph' */
import { Skeleton } from 'antd'
import Image from 'next/image'
import { formatNumber } from '@/utils/functions/numberFormat'
interface Details {
  title: string
  data: number
  img: string
  isRetrieved: boolean // Correct the prop name to isRetrieved
}

const DataCard: React.FC<Details> = ({ ...prop }) => {
  const data = parseFloat(prop.data?.toFixed(2))

  return (
    <div className='grid min-h-[5rem] cursor-default overflow-visible rounded-lg border-2 border-solid border-[#5d5d5d10] bg-[#2B99FF] p-2 px-2 text-[#ffffff] drop-shadow-sm xl:px-4'>
      {prop.isRetrieved ? (
        <Skeleton active />
      ) : (
        <div>
          <div className='flex items-end justify-between pr-2 lg:pr-10'>
            <div className='flex items-center gap-4'>
              <div className='relative h-8 w-10  sm:h-10 '>
                <Image src={`/${prop.img}.svg`} fill alt='chatxpert' />
              </div>
              <p className='text-[2.5rem] font-semibold sm:text-[2.5rem] xl:tracking-[.4rem]'>
                {formatNumber(data)}
              </p>
            </div>
          </div>
          <p className='text-[0.6rem] sm:text-[0.8rem]'>{prop.title}</p>
        </div>
      )}
    </div>
  )
}

export default DataCard

import React from 'react'
/* import BarGraph from './bargraph' */
import { Skeleton } from 'antd'
import Image from 'next/image'
interface Details {
  title: string
  data: number
  icon: string
  isRetrieved: boolean // Correct the prop name to isRetrieved
}

const DataCard: React.FC<Details> = ({ ...prop }) => {
  const data = parseFloat(prop.data?.toFixed(2))

  return (
    <div className='grid min-h-[8rem] cursor-default overflow-visible rounded-lg border-2 border-solid border-[#5d5d5d10] bg-[#2B99FF] p-2 px-2 text-[#ffffff] drop-shadow-sm xl:px-4'>
      {!prop.isRetrieved ? (
        <div>
          <div className='flex items-end justify-between pr-2 lg:pr-10'>
            <div className='flex items-center gap-4'>
              <div className='relative h-10  w-10 '>
                <Image src={`/${prop.icon}.svg`} fill alt='chatxpert' />
              </div>
              <p className='text-[3rem] font-semibold'>
                {Number.isNaN(data)
                  ? 0
                  : data > 1000
                  ? data >= 1000000
                    ? (data / 1000000).toFixed(1) + 'M'
                    : (data / 1000).toFixed(1) + 'k'
                  : data}
              </p>
            </div>
          </div>
          <p className='text-[0.8rem]'>{prop.title}</p>
        </div>
      ) : (
        <Skeleton active />
      )}
    </div>
  )
}

export default DataCard

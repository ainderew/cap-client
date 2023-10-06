import React from 'react'
/* import BarGraph from './bargraph' */
import { Skeleton } from 'antd'

interface Details {
  title: string
  data: number

  isRetrieved: boolean // Correct the prop name to isRetrieved
}

const DataCard: React.FC<Details> = ({ ...prop }) => {
  const data = parseFloat(prop.data?.toFixed(2))

  return (
    <div className='grid cursor-default min-h-[8rem] text-[#ffffff] rounded-lg border-2 bg-[#2B99FF] border-solid overflow-visible border-[#5d5d5d10] p-2 px-2 drop-shadow-sm xl:px-4'>
      {prop.isRetrieved ? (
        <div>
        <div className='flex justify-between items-end pr-2 lg:pr-10'>
          <p className='text-[3rem] font-semibold'>
            { data > 1000 ? data >= 1000000 ? (data / 1000000).toFixed(1) + 'M' : (data / 1000).toFixed(1) + 'k' : data}
          </p>

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

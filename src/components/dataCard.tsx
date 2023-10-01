import React from 'react'
import BarGraph from './bargraph'
import { Skeleton } from 'antd'

interface Details {
  title: string
  data: number
  prevData: number
  isRetrieved: boolean // Correct the prop name to isRetrieved
}

const DataCard: React.FC<Details> = ({ ...prop }) => {
/*   console.log(prop.data) */

  return (
    <div className='grid cursor-default min-h-[8rem] text-[#ffffff] rounded-lg border-2 bg-[#2B99FF] border-solid overflow-visible border-[#5d5d5d10] p-2 px-2 drop-shadow-sm xl:px-4'>
      {prop.isRetrieved ? (
        <div>
        <div className='flex justify-between items-end pr-2 lg:pr-10'>
          <p className='text-[3rem] font-semibold'>
            {prop.data > 1000 ? prop.data >= 1000000 ? (prop.data / 1000000).toFixed(1) + 'M' : (prop.data / 1000).toFixed(1) + 'k' : prop.data}
          </p>
          <div className='w-14 h-20'>
          <BarGraph
            months={['now', 'previous']}
            clickCounts={[prop.data, prop.prevData]}
            axis={'x'}
            colors={['#0EFFD4', '#FF1CA4']}
            showTicks={false}
          />
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

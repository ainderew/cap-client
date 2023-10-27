import React, { useEffect, useState } from 'react'
import DataCard from '@/components/dataCard'

interface Details {
  clicks: any
  isRetrieved: boolean
}
const CurrentData: React.FC<Details> = ({ ...props }) => {
  return (
    <>
      <div className=' grid w-full grid-cols-2 gap-2 sm:gap-8 md:grid-cols-4 '>
        <DataCard
          title={'Engagements This Year'}
          data={props.clicks[0]}
          isRetrieved={props.isRetrieved}
          img={'year'}
        />
        <DataCard
          title={'Engagements This Month'}
          data={props.clicks[1]}
          isRetrieved={props.isRetrieved}
          img={'month'}
        />
        <DataCard
          title={'Average Monthly Engagements'}
          data={props.clicks[2]}
          isRetrieved={props.isRetrieved}
          img={'aveMonth'}
        />
        <DataCard
          title={'Average Daily Engagements'}
          data={props.clicks[3]}
          isRetrieved={props.isRetrieved}
          img={'daily'}
        />
      </div>
    </>
  )
}
export default CurrentData

import React, { useEffect, useState } from 'react'
import DataCard from '@/components/dataCard'

interface Details {
  clicks: any
  isRetrieved: boolean
}
const CurrentData: React.FC<Details> = ({ ...props }) => {
  return (
    <>
      <div className=' grid w-full  grid-cols-2 gap-2   md:grid-cols-4 '>
        <DataCard
          title={'Engagements This Year'}
          data={props.clicks[0]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Engagements This Month'}
          data={props.clicks[1]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Average Monthly Engagements'}
          data={props.clicks[2]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Average Daily Engagements'}
          data={props.clicks[3]}
          isRetrieved={props.isRetrieved}
        />
      </div>
    </>
  )
}
export default CurrentData

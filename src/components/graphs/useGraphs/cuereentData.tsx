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
          title={'Queries This Year'}
          data={props.clicks[0]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Queries This Month'}
          data={props.clicks[1]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Average Monthly Queries'}
          data={props.clicks[2]}
          isRetrieved={props.isRetrieved}
        />
        <DataCard
          title={'Average Daily Queries'}
          data={props.clicks[3]}
          isRetrieved={props.isRetrieved}
        />
      </div>
    </>
  )
}
export default CurrentData

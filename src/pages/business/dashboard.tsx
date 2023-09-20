import Metrics from '@/components/metrics'
import MostSearchedTerms from '@/components/mostsearched'
import NavBar from '@/components/navbar'
import React from 'react'

const BusinessDashboard: React.FC = () => {
  return (
    <div className='flex h-[100dvh] flex-col'>
      <NavBar />
      <div className='grid  h-full grid-cols-3'>
        <div className='col-span-2 flex flex-col p-5'>
          <div>Chart</div>
          <MostSearchedTerms />
        </div>
        <div className='m-5 flex h-fit justify-center'>
          <Metrics />
        </div>
      </div>
    </div>
  )
}

export default BusinessDashboard

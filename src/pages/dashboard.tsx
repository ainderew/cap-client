import BusinessNavBar from '@/components/businessNavbar'
import DataCard from '@/components/dataCard'
import Graph from '@/components/graph'

import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className='h-full'>
      <BusinessNavBar />
      <div className='flex items-center justify-center py-10'>
        <div className=' w-[90%] md:w-[70%] '>
          <div className=' min-h-[10rem] border-4 border-solid border-[#0303031f] drop-shadow-lg'>
            <Graph />
          </div>
          <div className='py-10 pt-8 '>
            <span className='py-10  text-[1rem] font-semibold'>Current Data</span>
            <div className=' grid  grid-cols-1 items-center justify-center gap-2 px-6 pt-2 sm:grid-cols-2 sm:px-4 md:gap-10 lg:grid-cols-3'>
              <DataCard title={'Average Yearly Queries'} data={110} />
              <DataCard title={'Average Monthly Queries'} data={110} />
              <DataCard title={'Average Daily Queries'} data={20} />
              <DataCard title={'Total Yearly Queries'} data={30} />
              <DataCard title={'Total Monthly Queries'} data={40} />
              <DataCard title={'Total Daily Queries'} data={550} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard

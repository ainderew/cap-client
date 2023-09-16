import React from 'react'

interface details {
  title: string
  data: number
}

const DataCard: React.FC<details> = ({ ...prop }) => {
  return (
    <div className='grid min-h-[7rem] border-2  border-solid border-[#0000002e] bg-[#fff] p-2 px-2 drop-shadow-md md:px-8'>
      <p className='text-[3rem] '>{prop.data}</p>
      <p className='font-semibold text-[0.75]'>{prop.title}</p>
    </div>
  )
}
export default DataCard

import React from 'react'

interface EachfilesProps {
  type: string
  filename: string
  category: string
  date: string
  status: string
  report: string
}

const Eachfiles: React.FC<EachfilesProps> = ({ ...prop }) => {
  const type1 = ' rounded-lg bg-[#5FFF6F] px-5 py-2 text-[100%] text-[#ffff]'
  const type2 = ' rounded-lg bg-[#CC5FFF] px-5 py-2 text-[100%] text-[#ffff]'
  const checkType = prop.type === 'Product Pricing'
  return (
    <div className='py-[.4rem] '>
      <div className='relative top-[1rem] z-10 px-10 '>
        <span className={checkType ? type1 : type2}>{prop.type}</span>
      </div>
      <div className='z-[-10]  rounded-lg border-2 border-solid py-3 drop-shadow-md'>
        <div className='grid  grid-cols-4 gap-5 py-7'>
          <div className='overflow-hidden px-5 text-[1.3rem]'>{prop.filename}</div>
          <div className='justify-self-center '>{prop.category}</div>
          <div className='justify-self-end text-[1rem]'>{prop.date}</div>
          <div className='justify-self-end px-5 text-[1rem]'>{prop.status}</div>
        </div>
        <div className='bg-[#F4F4F4] p-2 px-40 text-[#736666]'>{prop.report}</div>
        <br />
      </div>
    </div>
  )
}

export default Eachfiles

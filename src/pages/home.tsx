import NavBar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

const General: React.FC = () => {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <div className='flex h-[calc(40vh-2.75rem)] items-center justify-center border-2'>
        <div className='flex items-center gap-4'>
          <Image src={'/logo.svg'} width={50} height={50} alt='Logo' />
          <h2 className='text-3xl font-thin'>
            <span className='font-bold'>ChatXpert </span>
            AI Support Center
          </h2>
        </div>
      </div>
      <div className='flex h-[calc(100vh-40vh)] w-full flex-col items-center justify-center gap-10 border-t-[0.5px] bg-[#FCFCFC]'>
        <input type='text' className='h-12 w-1/2 rounded-3xl border-2 p-4' />
        <div className='flex w-1/3 flex-col items-center gap-4 '>
          <span className='text-gray-400'>COMMON QUESTIONS</span>

          <div className='w-full bg-[#EBEBEB] px-4 py-6'>
            Options for returning my orders to Lorem ipsum store
          </div>
          <div className='w-full bg-[#EBEBEB] px-4 py-6'>
            Options for returning my orders to Lorem ipsum store
          </div>
          <div className='w-full bg-[#EBEBEB] px-4 py-6'>
            Options for returning my orders to Lorem ipsum store
          </div>
          <div className='w-full bg-[#EBEBEB] px-4 py-6'>
            Options for returning my orders to Lorem ipsum store
          </div>
        </div>
      </div>
    </div>
  )
}

export default General

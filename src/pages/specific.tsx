import Image from 'next/image'
import React from 'react'

const General: React.FC = () => {
  return (
    <div className='bg-opacity-45 flex h-screen flex-col bg-[#46464673] font-poppins'>
      {/* LEFT */}
      <div className='flex h-screen flex-row p-4'>
        <div className='m-4 w-2/3 overflow-hidden rounded-md border border-0 drop-shadow-lg'>
          <div className='h-40 w-full overflow-hidden '>
            <Image src={'/lorem.png'} width={1000} height={1000} alt='Lorem' />
          </div>
          <div className='just-center flex h-[calc(100vh-14rem)] w-full flex-col bg-[#EDEDED] '>
            <div className='h-1/7 flex w-full text-xl'>
              <h1 className='ml-10 mt-5 text-2xl font-semibold'>Lorem Ipsum</h1>
              <svg
                fill='#F4B345'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='ml-2 mt-5 inline-block w-6'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                ></path>
              </svg>
              <svg
                fill='#F4B345'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='ml-1 mt-5 inline-block w-6'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                ></path>
              </svg>
              <svg
                fill='#F4B345'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='ml-1 mt-5 inline-block w-6'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                ></path>
              </svg>
              <svg
                fill='#F4B345'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='ml-1 mt-5 inline-block w-6'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                ></path>
              </svg>
              <svg
                fill='none'
                stroke='#F4B345'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='ml-1 mt-5 inline-block w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                ></path>
              </svg>
            </div>
            <div className='border-1 ml-10 mt-8 flex h-3/4 w-11/12 rounded-lg border border-gray-300 bg-[#E3E3E3] p-6 shadow-inner'>
              {/* CONVO
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mt-2 inline-block h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div className="ml-4 flex h-12 w-52 max-w-lg justify-center rounded-xl border border-0 bg-[#2B99FF] text-sm text-white">
                <span className="mt-3">hello</span>
              </div> */}
            </div>
            {/* INPUT BOX */}
            <div className='relative flex h-1/4 w-full justify-center'>
              <input
                type='text'
                className='static mt-8 h-10 w-11/12 rounded-3xl bg-[#EDEDED] pl-3 outline outline-2 outline-[#E3E3E3]'
              />
              <button>
                <svg
                  fill='gray'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='absolute right-14 top-10 w-6'
                >
                  <path d='M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='m-4 w-1/3 border-0 bg-[#D9D9D9] pl-4 pt-8 text-sm drop-shadow-lg'>
          <span>Location</span>
          <br></br>
          <span>Ipsum Lorem 2123, Consen</span>
        </div>
      </div>
    </div>
  )
}

export default General

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
const DefaultChatNavbar: React.FC = () => {
  const router = useRouter()
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }
  return (
    <div>
      <div className='color-white flex h-28 w-full items-center justify-between px-6 sm:px-10 lg:px-28'>
        <div className='logo-container flex h-full items-center gap-2'>
          <div className='relative h-full  w-8 md:flex'>
            <Image src={'/logo.svg'} fill alt='chatxpert' />
          </div>
          <span className=' text-[1.2rem] font-bold '>ChatXpert</span>
        </div>
        <div className='flex gap-2'>
          <button
            className='hover:text-blac[#2B99FF] rounded-[2rem]  px-[.5em] py-2 font-bold text-[#000] sm:px-10'
            onClick={() => {
              handleRedirect('/dashboard')
            }}
          >
            SIGN IN
          </button>
          <button
            className='rounded-[2rem] bg-[#2B99FF] px-[1rem] py-2 font-bold text-[#ffff] hover:text-black sm:px-10'
            onClick={() => {
              handleRedirect('/register/business')
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default DefaultChatNavbar

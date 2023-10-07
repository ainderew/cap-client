import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
const CustomerNavbar: React.FC = () => {
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
        </div>
        <div>
          <button
            className='rounded-[2rem] bg-[#2B99FF] px-10 py-2 font-bold text-[#ffff] hover:text-black'
            onClick={() => {
              handleRedirect('/dashboard')
            }}
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerNavbar

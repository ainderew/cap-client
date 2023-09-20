import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

const NavBar: React.FC = () => {
  const router = useRouter()
  const handleRedirect = (route: string): void => {
    router.push(route).catch((err) => {
      throw err
    })
  }

  return (
    <div className='color-white hidden h-24 w-full lg:flex'>
      <div className='w-full h-full mx-48 flex items-center justify-between border-b-2'>
        <div className='logo-container flex h-full items-center gap-2'>
          <div className='relative h-full w-7'>
            <Image src={'/logo.svg'} fill alt='chatxpert' />
          </div>
          <span className='font-semibold'>ChatXpert</span>
        </div>
        {/* <ul className="flex flex-1">
        <li className="">Test</li>
        <li className="">Test</li>
        <li className="">Test</li>
        <li className="">Test</li>
      </ul> */}

        <div className='flex gap-4'>
          <button
            onClick={() => {
              handleRedirect('/register/customer')
            }}
            className=''
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              handleRedirect('/login')
            }}
            className=''
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

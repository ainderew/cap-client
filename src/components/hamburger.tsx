import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { useRouter } from 'next/router'

const Hamburger: React.FC = () => {
  const currentRoute = usePathname()
  const router = useRouter()
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }

  return (
    <div>
      <div className='flex items-end rounded-[1.5rem] border-2 border-solid border-[#77777722] bg-white px-4 py-4 shadow-lg'>
        <div className='flex h-[3.8rem] w-[3.8rem] justify-center  rounded-full border-2 border-solid border-[#2B99FF] bg-[#76a6d3] text-[2rem] text-[#fff]  '>
          a
        </div>
        <p className='p-2'>John Doe</p>
      </div>
      <div className='grid w-full cursor-pointer  items-start justify-start gap-8  py-6 text-start'>
        <div className='grid  gap-8 md:hidden'>
          <div>
            <div
              className='flex hover:text-[#2B99FF] md:hidden'
              onClick={() => {
                handleRedirect('/register/customer')
              }}
            >
              <div className='relative h-[1.8rem] w-[1.8rem] px-6'>
                <Image src={'/dashboardIcon.svg'} fill alt='dashboard' />
              </div>
              <button
                className={currentRoute === '/dashboard' ? 'underline underline-offset-4 ' : ''}
              >
                Dashboard
              </button>
            </div>
          </div>
          <div
            className='flex hover:text-[#2B99FF] md:hidden'
            onClick={() => {
              handleRedirect('/register/customer')
            }}
          >
            <div className='relative h-[1.8rem] w-[1.8rem] px-6'>
              <Image src={'/resourcesIcon.svg'} fill alt='resources' />
            </div>
            <button className={currentRoute === '/files' ? 'underline underline-offset-4 ' : ''}>
              Data Management
            </button>
          </div>
        </div>
        <div
          className='flex hover:text-[#2B99FF]'
          onClick={() => {
            handleRedirect('/register/customer')
          }}
        >
          <div className='relative  h-[1.8rem] w-[1.8rem] px-6'>
            <Image src={'/logOutIcon.svg'} fill alt='logout' />
          </div>
          Log out
        </div>
      </div>
    </div>
  )
}

export default Hamburger

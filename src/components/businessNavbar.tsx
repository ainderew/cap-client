import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const BusinessNavBar: React.FC = () => {
  const router = useRouter()
  const [clickProfile, setClickProfile] = useState<boolean>(false)
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }
  const profile = (): void => {
    setClickProfile(!clickProfile)
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

        <div className='hidden flex-1 gap-10 px-10 text-[.9rem] font-semibold md:flex'>
          <button
            onClick={() => {
              handleRedirect('/register/customer')
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => {
              handleRedirect('/register/customer')
            }}
          >
            Options
          </button>
          <button
            onClick={() => {
              handleRedirect('/register/customer')
            }}
          >
            Resources
          </button>
        </div>

        <div className='flex gap-4 p-2'>
          <button onClick={() => {}}>
            <div className='relative h-full w-7'>
              <Image src={'/help.svg'} fill alt='help' />
            </div>
          </button>
          <button onClick={() => {}}>
            <div className='relative h-full w-7'>
              <Image src={'/notification.svg'} fill alt='notification' />
            </div>
          </button>
          <div>
            <button onClick={profile}>
              <div className='border-3 flex h-[3rem] w-[3rem]  justify-center overflow-hidden '>
                <div className='relative  flex h-full w-10 items-center  md:hidden'>
                  <Image
                    src={clickProfile ? '/burgerActive.svg' : ' /burger.svg'}
                    fill
                    alt='burger'
                  />
                </div>
                <div className='hidden h-[3rem] w-[3rem]  rounded-full border-2 border-solid border-[#2B99FF] bg-[#76a6d3] text-[2rem] text-[#fff]  md:block'>
                  a
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {clickProfile ? (
        <div className='absolute right-2 top-[6rem] z-10 min-w-[270px]  rounded-lg  bg-white p-4 text-[1rem] shadow-md drop-shadow-lg md:right-12'>
          <div className='flex items-end rounded-[1.5rem] border-2 border-solid border-[#77777722] bg-white px-4 py-4 shadow-lg'>
            <div className='flex h-[3.8rem] w-[3.8rem] justify-center  rounded-full border-2 border-solid border-[#2B99FF] bg-[#76a6d3] text-[2rem] text-[#fff]  '>
              a
            </div>
            <p className='p-2'>John Doe</p>
          </div>
          <div className='grid w-full cursor-pointer items-start justify-start gap-8  py-6 text-start'>
            <div className='grid  gap-8 md:hidden'>
              <p
                className='flex md:hidden '
                onClick={() => {
                  handleRedirect('/register/customer')
                }}
              >
                <div className='relative h-[1.8rem] w-[1.8rem] px-6'>
                  <Image src={'/dashboardIcon.svg'} fill alt='dashboard' />
                </div>
                Dashboard
              </p>
              <p
                className='flex md:hidden'
                onClick={() => {
                  handleRedirect('/register/customer')
                }}
              >
                <div className='relative h-[1.8rem] w-[1.8rem] px-6'>
                  <Image src={'/optionsIcon.svg'} fill alt='options' />
                </div>
                Options
              </p>
              <p
                className='flex md:hidden'
                onClick={() => {
                  handleRedirect('/register/customer')
                }}
              >
                <div className='relative h-[1.8rem] w-[1.8rem] px-6'>
                  <Image src={'/resourcesIcon.svg'} fill alt='resources' />
                </div>
                Resources
              </p>
            </div>
            <p
              className='flex'
              onClick={() => {
                handleRedirect('/register/customer')
              }}
            >
              <div className='relative  h-[1.8rem] w-[1.8rem] px-6'>
                <Image src={'/logOutIcon.svg'} fill alt='logout' />
              </div>
              Log out
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BusinessNavBar

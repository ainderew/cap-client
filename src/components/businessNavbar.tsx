import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Hamburger from './hamburger'
import NotificationBar from './notification'

const data = [
  {
    title: 'DATA UPDATE',
    date: '10/2/2023',
    message: 'Your data is not up to date it needs to be updated'
  },
  {
    title: 'DATA UPDATE',
    date: '10/2/2023',
    message: 'Your data is not up to date it needs to be updated'
  },
  {
    title: 'DATA UPDATE',
    date: '10/2/2023',
    message: 'Your data is not up to date it needs to be updated'
  }
]

const BusinessNavBar: React.FC = () => {
  const router = useRouter()
  const [clickProfile, setClickProfile] = useState<boolean>(false)
  const [clickNotification, setClickNotification] = useState<boolean>(false)
  const [newNotification, setNewNotification] = useState<boolean>(false)
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }
  const profileOnClick = (): void => {
    setClickProfile(!clickProfile)
    setClickNotification(false)
  }
  const notificationOnClick = (): void => {
    setClickNotification(!clickNotification)
    setClickProfile(false)
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
          <button onClick={notificationOnClick}>
            <div className='relative h-full w-7'>
              <Image
                src={newNotification ? 'newNotification.svg' : '/notification.svg'}
                fill
                alt='notification'
              />
            </div>
          </button>
          <div>
            <button onClick={profileOnClick}>
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
          <Hamburger />
        </div>
      ) : null}
      {clickNotification ? (
        <div className='absolute right-2 top-[6rem] z-10  min-w-[80vw] max-w-[500px] rounded-lg bg-white   text-[1rem] shadow-md drop-shadow-lg sm:min-w-[500px] md:right-12'>
          <NotificationBar {...data} />
        </div>
      ) : null}
    </div>
  )
}

export default BusinessNavBar

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dropdown, type MenuProps } from 'antd'
const DefaultChatNavbar: React.FC = () => {
  const router = useRouter()
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={() => {
          handleRedirect('/register/business')
        }}>
          Business
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a onClick={() => {
          handleRedirect('/register/customer')
        }}>
          Customer
        </a>
      )
    }

  ]
  return (
      <div className='color-white flex h-28 w-full items-center justify-between px-6 sm:px-10 lg:px-28'>
        <div className='logo-container flex h-full items-center gap-2 cursor-pointer' onClick={() => {
          handleRedirect('/')
        }}>
          <div className='relative h-full  w-8 md:flex'>
            <Image src={'/logo.svg'} fill alt='chatxpert' />
          </div>
          <span className=' text-[1.2rem] font-bold '>ChatXpert</span>
        </div>
        <div className='flex gap-2'>
          <button
            className='hover:text-blac[#2B99FF] rounded-[2rem]  px-[.5em] py-2 font-bold text-[#000] sm:px-10'
            onClick={() => {
              handleRedirect('/login')
            }}
          >
            SIGN IN
          </button>
          <div>

            <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <button
              className='rounded-[2rem] bg-[#2B99FF] px-10 py-2 font-bold text-[#ffff] drop-shadow-lg hover:text-black'

            >
              SIGN UP
            </button>
            </Dropdown>
            </div>
        </div>
      </div>
  )
}

export default DefaultChatNavbar

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  GoogleOutlined,
  LinkedinFilled,
  ReloadOutlined
} from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

function PreviewHeadBar (): React.ReactElement {
  return (
    <>
      <div className='flex items-center gap-2 px-4'>
        <div className='green h-3 w-3 rounded-[50%] bg-red-400'></div>
        <div className='green h-3 w-3 rounded-[50%] bg-orange-400'></div>
        <div className='green h-3 w-3 rounded-[50%] bg-green-400'></div>
      </div>
      <div className='flex w-full gap-4 bg-[#3c3c3c] px-4 py-1'>
        <div className='flex items-center gap-4'>
          <ArrowLeftOutlined style={{ color: 'white' }} />
          <ArrowRightOutlined style={{ color: 'white' }} />
          <ReloadOutlined style={{ color: 'white' }} />
        </div>

        <div className='flex w-full items-center rounded-md border-[.5px] bg-[rgba(255,255,255,0.1)] px-2'>
          <span className='text-[.55rem] font-extralight text-white'>
            www.Bramk.com
          </span>
        </div>

        <div className='flex gap-2'>
          <div className='hidden md:flex h-full w-28 items-center gap-2 rounded-sm bg-white bg-opacity-20 px-2'>
            <div className='relative flex h-3 w-3'>
              <Image src={'/logo.svg'} alt='logo' fill />
            </div>
            <span className='text-[.55rem] font-thin text-white'>
              BRAMK | Business
            </span>
          </div>

          <div className='hidden md:flex h-full w-28 items-center gap-2 rounded-sm bg-white bg-opacity-5 px-2'>
            <LinkedinFilled style={{ color: '#0173B0' }} />
            <span className='text-[.55rem] font-thin text-white'>
              Feed | Linkedin
            </span>
          </div>

          <div className='hidden md:flex h-full w-28 items-center gap-2 rounded-sm bg-white bg-opacity-5 px-2'>
            <GoogleOutlined />
            <span className='text-[.55rem] font-thin text-white'>
              Inbox (20) - invoi
            </span>
          </div>

          <div className='grid h-full w-7 place-content-center rounded-sm bg-white bg-opacity-5 text-white'>
            +
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewHeadBar

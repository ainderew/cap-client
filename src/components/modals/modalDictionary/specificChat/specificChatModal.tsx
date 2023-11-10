/* eslint-disable @typescript-eslint/restrict-template-expressions */
import MinimizedWidget from '@/components/chatWidget/minimizedWidget'
import React from 'react'
import SpecificChatHeader from './specificChatHeader'
import {
  BuildFilled,
  MailFilled,
  PhoneFilled,
  PushpinFilled,
  ShopFilled
} from '@ant-design/icons'
import SpecificChatCategories from './specificChatCategoriesSection'
import useSpecificChatModal from './hooks/useSpecificChatModal'
import Image from 'next/image'

function SpecificChat (): React.ReactElement {
  const { currentBusiness } = useSpecificChatModal()
  const { photo, industry, location, name, url, size } =
    currentBusiness ?? {}

  return (
    <div className='flex-shrink-1 grid h-full w-full grid-cols-4 grid-rows-6 gap-8 overflow-hidden rounded-lg bg-transparent p-8 text-gray-500'>
      <div className='col-span-1 row-span-4 overflow-hidden rounded-md  bg-white text-gray-500 shadow-lg'>
        <SpecificChatHeader image={<BuildFilled />} label='Business data' />
        <div className='flex flex-col gap-4 p-4'>
          <span className='flex gap-4'>
            <ShopFilled /> {name}
          </span>
          <span className='flex gap-4'>
            <PhoneFilled /> (+63) 123-456
          </span>
          <span className='flex gap-4'>
            <MailFilled /> {url}
          </span>
          <span className='flex gap-4'>
            <PushpinFilled /> {location?.specifics}
          </span>

          <iframe
            width='100%'
            height='300'
            id='gmap_canvas'
            src={`https://maps.google.com/maps?q=${location?.cityOrMunicipality}%20${location?.province}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
      </div>
      <SpecificChatCategories />

      <div className='col-span-2 row-span-6 overflow-hidden rounded-md bg-white shadow-lg'>
        <SpecificChatHeader image={<BuildFilled />} label='Business data' />

        <div className='relative h-72 w-full'>
          <Image src={photo ?? ''} fill alt='business banner' />
        </div>
        <div className='flex flex-col gap-2 p-8'>
          <span className="">Name: {name}</span>
          <span className="">Industry: {industry}</span>
          <span className="">Business Size: {size}</span>
        </div>
      </div>

      <MinimizedWidget />
    </div>
  )
}

export default SpecificChat

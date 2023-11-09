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

function SpecificChat (): React.ReactElement {
  return (
    <div className='flex-shrink-1 grid h-full w-full grid-cols-4 grid-rows-6 gap-8 overflow-hidden rounded-lg bg-transparent p-8 text-gray-500'>
      <div className='col-span-1 row-span-4 overflow-hidden rounded-md  bg-white text-gray-500 shadow-lg'>
        <SpecificChatHeader image={<BuildFilled />} label='Business data' />
        <div className='flex flex-col gap-4 p-4'>
          <span className='flex gap-4'>
            <ShopFilled /> Techpal
          </span>
          <span className='flex gap-4'>
            <PhoneFilled /> (+63) 123-456
          </span>
          <span className='flex gap-4'>
            <MailFilled /> info@techpal.com
          </span>
          <span className='flex gap-4'>
            <PushpinFilled /> 805 Nasipit Talamban Road
          </span>

          <iframe
            width='100%'
            height='300'
            style={{ border: 0 }}
            loading='lazy'
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAlhQ6JFJmLxL2q0w4NbqspH2ved7KRBRo
    &q=Space+Needle,Seattle+WA'
          ></iframe>
        </div>
      </div>
      <SpecificChatCategories />

      <div className='col-span-2 row-span-6 overflow-hidden rounded-md bg-white shadow-lg'>
        <SpecificChatHeader image={<BuildFilled />} label='Business data' />
      </div>

      <MinimizedWidget />
    </div>
  )
}

export default SpecificChat

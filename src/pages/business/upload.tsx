import Accordion from '@/components/accordion'
import DataSections from '@/components/datasections'
import NavBar from '@/components/navbar'
import UploadSlot from '@/components/uploadslot'
import React from 'react'

const Upload: React.FC = () => {
  const test = (): void => {
    console.log('test')
  }

  return (
    <div className='grid grid-cols-[75%_25%]'>
      <div className='h-screen border border-neutral-400'>
        <NavBar />
        <div className='grid grid-cols-3'>
          <DataSections
            name='Business Data'
            photolink='test'
            desc='Summary of your business'
            clicked={test}
          />
          <DataSections
            name='Customer Support Data'
            photolink='test'
            desc='Tell us how to deal with customers'
            clicked={test}
          />
          <DataSections
            name='Product Availability Data'
            photolink='test'
            desc='Summary of products you sell'
            clicked={test}
          />
        </div>
        <div></div>
      </div>
      <div className='mt-20 flex flex-col'>
        <Accordion name='Product Data'>
          <UploadSlot />
        </Accordion>
        <Accordion name='Customer Service Data'>
          <UploadSlot />
        </Accordion>
      </div>
    </div>
  )
}

export default Upload

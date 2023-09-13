import React, { useRef } from 'react'
import Image from 'next/image'

const UploadSection: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null)

  const fileClick = (): void => {
    if (fileRef.current != null) {
      fileRef.current.click()
    }
  }
  return (
    <div className='mt-8 flex flex-col items-center bg-neutral-200 px-20 py-12 text-center'>
      <p className='my-2 text-3xl font-semibold'>Upload Business Data</p>
      <p className='text-md my-2 text-neutral-500'>
        Effortlessly upload and manage your business data with our user-friendly data management
        platform.
      </p>
      <div>
        <button
          onClick={() => {
            fileClick()
          }}
          className=' my-2 flex items-center self-center rounded-lg bg-sky-500 px-5 py-2 text-lg font-bold text-white'
        >
          <p>Select .txt file</p>
          <Image src='/documenticon.svg' width={32} height={32} alt='' className='mx-2' />
        </button>
      </div>
      <input ref={fileRef} type='file' className='hidden' />
    </div>
  )
}

export default UploadSection

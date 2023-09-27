import React, { useState } from 'react'
import { UploadButton } from '@/utils/uploadthing'
import '@uploadthing/react/styles.css'

const UploadSection: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleError = (error: string): void => {
    setErrorMessage(error)
    setHasError(true)
    setTimeout(() => {
      setHasError(false)
    }, 5000)
  }

  return (
    <div className='mt-8 flex flex-col items-center bg-neutral-200 px-20 py-12 text-center'>
      <p className='my-2 text-3xl font-semibold'>Upload Business Data</p>

      <div className='flex flex-col items-center'>
        <p className='text-md my-2 text-neutral-500'>
          Effortlessly upload and manage your business data with our user-friendly data management
          platform.
        </p>
        <div>
          <div className=''>
            <UploadButton
              endpoint='text'
              content={{
                button ({ ready }) {
                  if (ready) return <div className='font-semibold'>Upload .txt file</div>
                  return 'Loading ...'
                },
                allowedContent ({ ready }) {
                  if (!ready) return ''
                  return 'Only .txt files allowed, file size up to 4MB'
                }
              }}
              onClientUploadComplete={res => {
                console.log('Upload Complete')
              }}
              onUploadError={(error: Error) => {
                handleError(error.message)
              }}
            />
          </div>
        </div>
        <div className={`text-sm text-red-500 ${hasError ? 'block' : 'hidden'}`}>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}

export default UploadSection

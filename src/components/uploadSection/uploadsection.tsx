import React from 'react'
import useHandleUpload from './hooks/useHandleUpload'
import UploadButtonWrapper from './uploadButton'
import { Spin } from 'antd'

const UploadSection: React.FC = () => {
  const { isLoadingUpload, handleLoadingWhileUploading } = useHandleUpload()

  return (
    <div className='mt-8 flex flex-col gap-4 items-center bg-neutral-200 p-12 text-center'>
      <h3 className='my-2 text-3xl font-semibold'>Upload Business Data</h3>

      {isLoadingUpload ? <Spin /> : <UploadButtonWrapper handleLoadingWhileUploading={handleLoadingWhileUploading} />}

        <p className='text-md my-2 text-neutral-500'>
          Effortlessly upload and manage your business data with our
          user-friendly data management platform.
        </p>
    </div>
  )
}

export default UploadSection

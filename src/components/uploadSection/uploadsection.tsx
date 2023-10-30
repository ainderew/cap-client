import React from 'react'
import UploadButtonWrapper from './uploadButton'
import useStores from '@/core/stores/UseStores'
import { Spin } from 'antd'
import { observer } from 'mobx-react'
import ButtonOpen from './modal/buttonOpen'

const UploadSection: React.FC = () => {
  const { uiStore: { isUploadingFile } } = useStores()
  return (
    <div className='mt-8 flex flex-col gap-4 items-center bg-neutral-200 p-12 text-center'>
      <h3 className='my-2 text-3xl font-semibold'>Upload Business Data</h3>

      {isUploadingFile ? 
        <div>
          <Spin /> 
        </div>
      : 
        <div className='flex flex-col'> 
            <ButtonOpen/>
            <p className='m-3'>or</p>
            <UploadButtonWrapper />
        </div>
      }

        <p className='text-md my-2 text-neutral-500'>
          Effortlessly upload and manage your business data with our
          user-friendly data management platform.
        </p>
    </div>
  )
}

export default observer(UploadSection)

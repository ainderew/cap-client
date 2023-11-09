import React from 'react'
import useStores from '@/core/stores/UseStores'
import { Spin } from 'antd'
import { observer } from 'mobx-react'
import ButtonOpen from './modal/buttonOpen'
import UploadFile from './fileupload/uploadfile'

const UploadSection: React.FC = () => {
  const { uiStore: { isUploadingFile } } = useStores()
  return (
    <div className='mt-8 flex flex-col gap-4 items-center bg-neutral-200 p-5 sm:p-12 text-center'>
      <h3 className='my-2 text-xl md:text-3xl font-semibold'>Upload Business Data</h3>

      {isUploadingFile ? <div>
          <Spin />
        </div> : <div className='flex flex-col'>
            <ButtonOpen/>
            <p className='m-3'>or</p>
            <UploadFile/>
        </div>
      }

        <p className='text-sm md:text-base my-2 text-neutral-500'>
          Effortlessly upload and manage your business data with our
          user-friendly data management platform.
        </p>
    </div>
  )
}

export default observer(UploadSection)

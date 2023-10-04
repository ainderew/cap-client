import FileGroup from '@/components/filegroup'
import NavBar from '@/components/navbar'
import UploadSection from '@/components/uploadSection/uploadsection'
import { FileProvider } from '@/core/upload/context'
import React from 'react'

const DataManagement: React.FC = () => {
  return (
    <FileProvider>
      <div className=' flex flex-col items-center'>
        <NavBar />
        <div className='w-8/12'>
          <UploadSection />
          <FileGroup />
        </div>
      </div>
    </FileProvider>
  )
}

export default DataManagement

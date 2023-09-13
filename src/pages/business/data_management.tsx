import FileGroup from '@/components/filegroup'
import NavBar from '@/components/navbar'
import UploadSection from '@/components/uploadsection'
import React from 'react'

const DataManagement: React.FC = () => {
  return (
    <div className=' flex flex-col items-center'>
      <NavBar />
      <div className='w-8/12'>
        <UploadSection />
        <FileGroup />
      </div>
    </div>
  )
}

export default DataManagement

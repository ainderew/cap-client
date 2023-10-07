import FileGroup from '@/components/filegroup'
import NavBar from '@/components/navbar'
import UploadSection from '@/components/uploadSection/uploadsection'
import { FileProvider } from '@/core/upload/context'
import { useRouter } from 'next/router'
import React from 'react'

const DataManagement: React.FC = () => {
  const router = useRouter()

  const currentPath = router.asPath
  console.log(currentPath)
  return (
    <FileProvider>
      <div className='w-full h-screen flex flex-col items-center'>
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

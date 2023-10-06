import FileGroup from '@/components/filegroup'
import UploadSection from '@/components/uploadsection'
import { FileProvider } from '@/core/upload/context'
import { useRouter } from 'next/router'
import React from 'react'

const DataManagement: React.FC = () => {
  const router = useRouter()

  const currentPath = router.asPath
  console.log(currentPath)
  return (
    <FileProvider>
      <div className=' flex flex-col items-center'>
        <div className='md:-8/12 w-[90%] '>
          <UploadSection />
          <FileGroup />
        </div>
      </div>
    </FileProvider>
  )
}

export default DataManagement

import React, { useState } from 'react'
import { useStores } from '@/core/stores/UseStores'
import { UploadButton } from '@/utils/uploadthing'
/* import '@uploadthing/react/styles.css' */
import { useFileContext } from '@/core/upload/context'

interface File {
  _id: string
  originalname: string
  status: boolean
  dateuploaded: string
  datelastused: string
}

const UploadSection: React.FC = () => {
  const { files, setFiles } = useFileContext()
  const { authStore } = useStores()
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const handleError = (error: string): void => {
    setErrorMessage(error)
    setHasError(true)
    setTimeout(() => {
      setHasError(false)
    }, 5000)
  }

  const updateStatus = (): void => {
    const updatedFiles = files.map((file) => ({
      ...file,
      status: false
    }))
    setFiles(updatedFiles)
  }

  const businessid = authStore.userProfile?.profile._id
  const data = {
    businessId: businessid,
    originalname: '',
    blobname: '',
    path: ''
  }

  const sendFileData = (): void => {
    fetch('http://localhost:5000/api/file/fileupload', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async res => await (res.json() as Promise<File>))
      .then(data => {
        updateStatus()
        setFiles(prev => [data, ...prev])
      })
      .catch(err => {
        throw err
      })
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
          <div className='bg-blue-500'>
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
              onClientUploadComplete={(res) => {
                console.log(res)
                if (res != null) {
                  const { key, url, name } = res[0]
                  data.blobname = key
                  data.originalname = name
                  data.path = url
                  sendFileData()
                }
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

import React, { useRef, useState } from 'react'
import Image from 'next/image'

const UploadSection: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileIsStored, setFileIsStored] = useState<boolean>(false)
  const [fileWrongFormat, setFileWrongFormat] = useState<boolean>(false)

  const fileClick = (): void => {
    if (fileRef.current != null) {
      fileRef.current.click()
    }
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]

    if (file != null) {
      if (file.name.endsWith('.txt') || file.type === 'text/plain') {
        setSelectedFile(file)
        setFileIsStored(true)
      } else {
        setFileWrongFormat(true)
        setTimeout(() => {
          setFileWrongFormat(false)
        }, 5000)
      }
    }
  }

  const uploadFile = (): void => {
    if (selectedFile != null) {
      const formData = new FormData()
      formData.append('filename', selectedFile.name)
      formData.append('file', selectedFile)

      fetch('', {
        method: 'POST',
        body: formData
      })
        .then(response => {})
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div className='mt-8 flex flex-col items-center bg-neutral-200 px-20 py-12 text-center'>
      <p className='my-2 text-3xl font-semibold'>Upload Business Data</p>
      {fileIsStored ? (
        <div className='flex flex-col items-center'>
          <p className='my-2 text-xl font-semibold text-neutral-500'>
            {selectedFile != null ? selectedFile.name : ''}
          </p>
          <button
            onClick={uploadFile}
            className='my-2 flex items-center self-center rounded-lg bg-sky-500 px-5 py-2 text-lg font-bold text-white'
          >
            <p>Upload File</p>
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
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
          <div className={`text-sm text-red-500 ${fileWrongFormat ? 'block' : 'hidden'}`}>
            *The file you chose has the wrong format. Choose a text file.
          </div>
        </div>
      )}
      <input ref={fileRef} onChange={fileChange} type='file' className='hidden' />
    </div>
  )
}

export default UploadSection

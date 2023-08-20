import React, { useRef, useState } from 'react'

const UploadSlot: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null)
  //   const [isUploading, setIsUploading] = useState<boolean>(false)
  const [hasData, setHasData] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('test')

  const handleClick = (): void => {
    if (fileRef.current != null) {
      fileRef.current.click()
    }
  }

  const handleChange = (e: any): void => {
    setHasData(true)
  }

  const handleUpload = (e: any): void => {
    setFileName('uploaded')
  }

  return (
    <div className='w-full justify-center p-2 pb-5 text-center'>
      {!hasData ? (
        <div>
          <div className='m-2'>Import .json file</div>
          <button className='rounded-full bg-sky-500 px-8 py-1 text-white' onClick={handleClick}>
            Open File
          </button>
        </div>
      ) : (
        <div>
          <div className='m-2'>{fileName}</div>
          <button className='rounded-full bg-sky-500 px-8 py-1 text-white' onClick={handleUpload}>
            Upload
          </button>
        </div>
      )}
      <input ref={fileRef} onChange={handleChange} className='hidden' type='file' />
    </div>
  )
}

export default UploadSlot

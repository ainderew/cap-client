import { Button } from 'antd'
import React from 'react'
import useHandleUpload from '../hooks/useHandleUpload'
import useStores from '@/core/stores/UseStores'
import { type UploadFileResponse } from 'uploadthing/client'
import { uploadFiles } from '@/utils/uploadthing'

interface UploadButtonProps {
  file: File[]
  isDisabled: boolean
  label: string
  primary: boolean
}

const UploadButton: React.FC<UploadButtonProps> = ({ file, isDisabled, label, primary }) => {
  const { sendFileData } = useHandleUpload()
  const { uiStore: { setIsUploadingFile } } = useStores()

  const fileUploadStart = async (): Promise<void> => {
    setIsUploadingFile(true)

    try {
      const res = await uploadFiles({
        files: file,
        endpoint: 'text'
      })
      if (res !== null) {
        const data: UploadFileResponse = res[0]
        await sendFileData(data)
      }
      setIsUploadingFile(false)
    } catch (error) {
      setIsUploadingFile(false)
    }
  }
  return (
        <>
            <Button onClick={fileUploadStart} disabled={isDisabled}
            className={`${primary ? 'bg-blue-500 text-white' : ''}`}>
                {label}
            </Button>
        </>
  )
}

export default UploadButton

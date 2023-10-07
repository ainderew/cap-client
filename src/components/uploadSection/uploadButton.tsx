import React from 'react'
import { UploadButton } from '@/utils/uploadthing'
import { Button, message } from 'antd'
import useStores from '@/core/stores/UseStores'
import useHandleUpload from './hooks/useHandleUpload'
import { type UploadFileResponse } from 'uploadthing/client'

export default function UploadButtonWrapper (): React.ReactElement {
  const { sendFileData } = useHandleUpload()
  const { uiStore: { setIsUploadingFile } } = useStores()

  function handleError (error: string): void {
    void message.error(error)
  }

  return <UploadButton
  className='z-10'
    endpoint='text'
    content={{
      button ({ ready }) {
        if (ready) return <Button className='-z-10 hover:bg-white w-full h-full bg-blue-400 text-white'>Upload .txt file</Button>
        return <>loading</>
      },

      allowedContent () {
        return 'Only .txt files allowed, file size up to 4MB'
      }
    }}

    onUploadBegin={() => { setIsUploadingFile(true) }}

    onClientUploadComplete={(res) => {
      if (res != null) {
        const data: UploadFileResponse = res[0]
        void sendFileData(data)
      }
    }}
    onUploadError={(error: Error) => {
      handleError(error.message)
    }}
  />
}

import React from 'react'
import { UploadButton } from '@/utils/uploadthing'
import { Button, message } from 'antd'

interface propsUploadButtonWrapper {
  handleLoadingWhileUploading: (value: boolean) => void
}

export default function UploadButtonWrapper ({ handleLoadingWhileUploading }: propsUploadButtonWrapper): React.ReactElement {
  function handleError (error: string): void {
    void message.error(error)
  }

  return <UploadButton
  className='z-10'
    endpoint='text'
    content={{
      button () {
        return <Button className='-z-10 hover:bg-white w-full h-full bg-blue-400 text-white'>Upload .txt file</Button>
      },

      allowedContent () {
        return 'Only .txt files allowed, file size up to 4MB'
      }
    }}

    onUploadBegin={() => { handleLoadingWhileUploading(true) }}

    onClientUploadComplete={(res) => {
      if (res != null) {
        handleLoadingWhileUploading(false)
      }
    }}
    onUploadError={(error: Error) => {
      handleError(error.message)
    }}
  />
}

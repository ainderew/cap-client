import { useState } from 'react'

interface useHandleUploadTypes {
  isLoadingUpload: boolean
  handleLoadingWhileUploading: (value: boolean) => void
}

function useHandleUpload (): useHandleUploadTypes {
  const [isLoadingUpload, setIsLoadingUpload] = useState<boolean>(false)

  function handleLoadingWhileUploading (value: boolean): void {
    setIsLoadingUpload(value)
  }

  return {
    isLoadingUpload,
    handleLoadingWhileUploading
  }
}

export default useHandleUpload

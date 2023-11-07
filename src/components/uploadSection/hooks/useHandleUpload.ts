import useStores from '@/core/stores/UseStores'
import usePostData from '@/hooks/usePostData'
import { config } from '../../../../config'
import { type Filter } from '@/utils/types/base'
import { type UploadFileResponse } from 'uploadthing/client'
import { useEffect } from 'react'

interface useHandleUploadTypes {
  sendFileData: (value: UploadFileResponse) => Promise<void>
}

function useHandleUpload (): useHandleUploadTypes {
  const { handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/file/fileupload`)
  const { authStore: { userProfile }, uiStore: { setIsUploadingFile } } = useStores()

  const businessid = userProfile?._id
  const filter: Filter = {
    businessId: businessid,
    originalname: '',
    blobname: '',
    path: ''
  }


  async function sendFileData (res: any): Promise<void> {
    const { key, url, name } = res
    filter.blobname = key
    filter.originalname = name
    filter.path = url

    await handlePostRequest(filter)
    setIsUploadingFile(false)
  }

  return {
    sendFileData
  }
}

export default useHandleUpload

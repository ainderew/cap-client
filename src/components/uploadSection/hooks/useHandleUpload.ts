import useStores from '@/core/stores/UseStores'
import usePostData from '@/hooks/usePostData'
import { config } from '../../../../config'
import { type Filter } from '@/utils/types/base'
import { type UploadFileResponse } from 'uploadthing/client'

interface useHandleUploadTypes {
  sendFileData: (value: UploadFileResponse) => Promise<void>
}

function useHandleUpload (): useHandleUploadTypes {
  const { handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/file/fileupload`)
  const { authStore: { userProfile }, uiStore: { setIsUploadingFile } } = useStores()

  const businessid = userProfile?._id
  const data: Filter = {
    businessId: businessid,
    originalname: '',
    blobname: '',
    path: ''
  }

  async function sendFileData (res: any): Promise<void> {
    const { key, url, name } = res
    data.blobname = key
    data.originalname = name
    data.path = url

    await handlePostRequest(data)
    setIsUploadingFile(false)
  }

  return {
    sendFileData
  }
}

export default useHandleUpload

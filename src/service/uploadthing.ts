import { useStores } from '@/core/stores/UseStores'
import usePostData from '@/hooks/useFetchData'
import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'
import { config } from '../../config'

const f = createUploadthing()
const { authStore } = useStores()

const businessid = authStore.userProfile?.profile._id
const data = {
  businessId: businessid,
  originalname: '',
  blobname: '',
  path: ''
}

const sendFileData = (): void => {
  usePostData(`${config.BACKEND_ENDPOINT}/api/file/fileupload`, data)
}

export const ourFileRouter = {
  text: f({ 'text/plain': { maxFileSize: '4MB' } }).onUploadComplete(async ({ metadata, file }) => {
    data.originalname = file.name
    data.blobname = file.key
    data.path = file.url

    sendFileData()
  })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

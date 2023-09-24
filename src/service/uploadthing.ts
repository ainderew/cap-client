import { useStores } from '@/core/stores/UseStores'
import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'

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
  fetch('http://localhost:5000/api/file/fileupload', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      throw err
    })
}

export const ourFileRouter = {
  text: f({ 'text/plain': { maxFileSize: '4MB' } }).onUploadComplete(async ({ metadata, file }) => {
    console.log('This is the metadata:', metadata)
    console.log('This is the file:', file)
    data.originalname = file.name
    data.blobname = file.key
    data.path = file.url

    sendFileData()
  })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

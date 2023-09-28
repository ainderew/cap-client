
import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'

const f = createUploadthing()

export const ourFileRouter = {
  text: f({ 'text/plain': { maxFileSize: '4MB' } }).onUploadComplete(async ({ metadata, file }) => {
    console.log('Upload Successful')
  })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

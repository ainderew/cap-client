import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'

const f = createUploadthing()

export const ourFileRouter = {
  text: f({ 'text/plain': { maxFileSize: '16MB' } }).onUploadComplete(async ({ metadata, file }) => {
  })
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

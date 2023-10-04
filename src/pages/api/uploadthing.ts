import { createNextPageApiHandler } from 'uploadthing/next-legacy'
import dotenv from 'dotenv'
import { ourFileRouter } from '@/service/uploadthing'
dotenv.config()
const handler = createNextPageApiHandler({
  router: ourFileRouter,
  config: {
    uploadthingId: process.env.UPLOADTHING_APP_ID,
    uploadthingSecret: process.env.UPLOADTHING_SECRET
  }
})

export default handler

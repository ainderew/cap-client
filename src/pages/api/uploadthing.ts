import { createNextPageApiHandler } from 'uploadthing/next-legacy'
import { ourFileRouter } from '@/service/uploadthing'
import { config } from '../../../config'

const handler = createNextPageApiHandler({
  router: ourFileRouter,
  config: {
    uploadthingId: config.UPLOADTHING_APP_ID,
    uploadthingSecret: config.UPLOADTHING_SECRET
  }
})

export default handler

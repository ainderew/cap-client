import { generateComponents } from '@uploadthing/react'

import type { OurFileRouter } from '@/service/uploadthing'

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<OurFileRouter>()

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

interface configTypes {
  UPLOADTHING_SECRET: string
  UPLOADTHING_APP_ID: string
  BACKEND_ENDPOINT: string
}

export const config: configTypes = {
  UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET ?? '',
  UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID ?? '',
  BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT ?? 'http://localhost:8987'
}

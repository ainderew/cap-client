/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import dotenv from 'dotenv'
dotenv.config()

interface configTypes {
  UPLOADTHING_SECRET: string
  UPLOADTHING_APP_ID: string
  BACKEND_ENDPOINT: string
}

export const config: configTypes = {
  UPLOADTHING_SECRET: process.env.NEXT_PUBLIC_UPLOADTHING_SECRET ?? '',
  UPLOADTHING_APP_ID: process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID ?? '',
  /*   BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT ?? 'http://localhost:8989' */
  BACKEND_ENDPOINT: 'http://localhost:5000'
}

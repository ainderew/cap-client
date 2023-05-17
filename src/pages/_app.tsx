import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const App: any = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter()
  // useEffect(() => {
  //   router.replace('/home').catch((err) => {
  //     throw err
  //   })
  // }, [])
  return <Component {...pageProps} />
}

export default App

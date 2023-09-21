import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'

import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import { useRouter } from 'next/router'

const config: ThemeConfig = {
  // algorithm: theme.darkAlgorithm
  // Add theme here on free time - %%obsidian remind
}

const ALLOWED_URL = ['/', '/login']

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const currentUrl = router.asPath

    const allow = ALLOWED_URL.find(link => link === currentUrl)
    if (allow !== undefined) return // add check if user is logged in then disable redirect
    router.replace('/login').catch((err) => {
      throw err
    })
  }, [])
  return (
    <ConfigProvider theme={config}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default App

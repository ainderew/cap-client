import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'

import type { ThemeConfig } from 'antd'
import { ConfigProvider, theme } from 'antd'
import { useRouter } from 'next/router'
import DefaultLayout from './layouts/default'

const config: ThemeConfig = {
  // algorithm: theme.darkAlgorithm
}

/* const ALLOWED_URL = ['/', '/login'] */

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

/*   useEffect(() => {
    const currentUrl = router.asPath

    const allow = ALLOWED_URL.find(link => link === currentUrl)
    if (allow !== undefined) return // add check if user is logged in then disable redirect
    router.replace('/login').catch(err => {
      throw err
    })
  }, []) */
  return (
    <ConfigProvider theme={config}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ConfigProvider>
  )
}

export default App

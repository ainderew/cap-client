import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'

import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import { useRouter } from 'next/router'
import DefaultLayout from './layouts/default'
import { useStores } from '@/core/stores/UseStores'

const config: ThemeConfig = {
  // algorithm: theme.darkAlgorithm
  // Add theme here on free time - %%obsidian remind
}
// this should be changed cause this might be wrong hahahahahaha
const ALLOWED_URL = ['/', '/login', '/register/customer', '/business/dashboard', '/register/business']
const CUSTOMER_ALLOWED_URL = ['/', '/home']
const BUSINESS_ALLOWED_URL = ['/', '/business/dashboard', '/business/data-management']

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const { authStore } = useStores()

  const userType = authStore.userProfile?.profile.type

  useEffect(() => {
    const currentUrl = router.asPath

    if (userType === false) {
      const allow = CUSTOMER_ALLOWED_URL.find(link => link === currentUrl)
      if (allow !== undefined) {
        router.replace('/home').catch(err => {
          throw err
        })
      }
    } else if (userType === true) {
      const allow = BUSINESS_ALLOWED_URL.find(link => link === currentUrl)
      if (allow !== undefined) {
        router.replace('/business/dashboard').catch(err => {
          throw err
        })
      }
    } else {
      const allow = ALLOWED_URL.find(link => link === currentUrl)
      if (allow !== undefined) return
      router.replace('/login').catch(err => {
        throw err
      })
    }
  }, [])
  return (
    <ConfigProvider theme={config}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ConfigProvider>
  )
}

export default App

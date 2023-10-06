import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import { useRouter } from 'next/router'
import DefaultLayout from './layouts/default'
import { useStores } from '@/core/stores/UseStores'

const config: ThemeConfig = {
  // Add your theme configuration here
}

const ALLOWED_URL = ['/', '/login', '/register/customer', '/register/business', '/business/data-management']
const CUSTOMER_ALLOWED_URL = ['/', '/home']
const BUSINESS_ALLOWED_URL = ['/business/dashboard', '/business/data-management']

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { authStore } = useStores()
  const userType = authStore.userProfile?.profile.type

  useEffect(() => {
    const currentUrl = router.asPath

    if (userType === false) {
      /*  const allow = CUSTOMER_ALLOWED_URL.find(link => link === currentUrl) */
      const allow = CUSTOMER_ALLOWED_URL.includes(currentUrl)
      if (!allow) {
        router.replace('/home').catch(err => {
          throw err
        })
      }
    } else if (userType === true) {
      const allow = BUSINESS_ALLOWED_URL.includes(currentUrl) /* (link => link === currentUrl) */
      console.log('mark', allow)
      if (!allow) {
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
  }, [userType, router.asPath])

  return (
    <ConfigProvider theme={config}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ConfigProvider>
  )
}

export default App

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
<<<<<<< HEAD

/* const ALLOWED_URL = ['/', '/login'] */
=======
// this should be changed cause this might be wrong hahahahahaha
const ALLOWED_URL = ['/', '/login', '/register/customer', '/register/business', '/business/data-management']
const CUSTOMER_ALLOWED_URL = ['/', '/home']
const BUSINESS_ALLOWED_URL = ['/', '/business/dashboard', '/business/data-management']
>>>>>>> galvez

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

<<<<<<< HEAD
/*   useEffect(() => {
    const currentUrl = router.asPath

    const allow = ALLOWED_URL.find(link => link === currentUrl)
    if (allow !== undefined) return // add check if user is logged in then disable redirect
    router.replace('/login').catch(err => {
      throw err
    })
  }, []) */
=======
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
      if (allow !== undefined) return // add check if user is logged in then disable redirect
      router.replace('/login').catch(err => {
        throw err
      })
    }
  }, [])
>>>>>>> galvez
  return (
    <ConfigProvider theme={config}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ConfigProvider>
  )
}

export default App

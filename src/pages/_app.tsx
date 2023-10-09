import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from './layouts/default'
import useStores from '@/core/stores/UseStores'
import { config } from '../../config'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import { message as antdMessage } from 'antd'
import { AccountType } from '@/utils/enums'

const ALLOWED_URL = ['/', '/login', '/register/customer', '/register/business']
const CUSTOMER_ALLOWED_URL = ['/', '/home', 'register/customer']
const BUSINESS_ALLOWED_URL = [
  '/',
  '/business/dashboard',
  '/business/data-management',
]

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { authStore } = useStores()
  const userType = authStore.userProfile?.type
  const [queryProfile] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/getProfile`,
  )

  function handleProtectedRoutes(): void {
    const currentUrl = router.asPath
    if (userType === AccountType.customer) {
      /*  const allow = CUSTOMER_ALLOWED_URL.find(link => link === currentUrl) */
      const allow = CUSTOMER_ALLOWED_URL.includes(currentUrl)
      if (!allow) {
        router.replace('/home').catch((err) => {
          throw err
        })
      }
    } else if (userType === AccountType.business) {
      const allow =
        BUSINESS_ALLOWED_URL.includes(
          currentUrl,
        ) /* (link => link === currentUrl) */
      if (!allow) {
        router.replace('/business/dashboard').catch((err) => {
          throw err
        })
      }
    } else {
      const allow = ALLOWED_URL.find((link) => link === currentUrl)
      if (allow !== undefined) return

      router.replace('/login').catch((err) => {
        throw err
      })
    }
  }

  async function getProfile(): Promise<void> {
    const res = await queryProfile()
    console.log(res)
    const { profile, message } = res
    if (profile !== null && profile !== undefined) {
      authStore.setProfile(profile)
    } else {
      void antdMessage.error(message)
      handleProtectedRoutes()
    }
  }

  useEffect(() => {
    void getProfile()
  }, [])

  return <Component {...pageProps} />
}

export default App

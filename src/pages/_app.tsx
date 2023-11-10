import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useStores from '@/core/stores/UseStores'
import { config } from '../../config'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import { message } from 'antd'
import { AccountType, keys } from '@/utils/enums'
import ModalContainer from '@/components/modals/modalContainer'
import { observer } from 'mobx-react'
import { type userProfile } from '@/utils/types/auth'

const ALLOWED_URL = [
  '',
  '/',
  '/login',
  '/register/customer',
  '/register/business',
  '/home'
]
const CUSTOMER_ALLOWED_URL = ['/', '/home', 'register/customer']
const BUSINESS_ALLOWED_URL = [
  '/',
  '/business/dashboard',
  '/business/data-management'
]

const App: any = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const {
    authStore,
    uiStore: { showModal }
  } = useStores()

  const userType = authStore.userProfile?.type
  const [queryProfile] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/getProfile`
  )

  async function getProfile (): Promise<boolean> {
    let storedProfile: userProfile

    const data: string | null = sessionStorage.getItem(keys.PROFILE)

    if (data !== null) {
      storedProfile = JSON.parse(data)

      authStore.setProfile(storedProfile)
      return true
    }

    const res = await queryProfile()
    if (res === undefined) {
      void message.error('Something went wrong')
      return false
    }

    const { profile } = res
    if (profile !== null && profile !== undefined) {
      authStore.setProfile(profile)
      return true
    }

    return false
  }

  async function handleProtectedRoutes (): Promise<void> {
    const profile: null | boolean = await getProfile()

    if (profile) return

    const currentUrl = router.asPath
    if (userType === AccountType.customer) {
      const allow = CUSTOMER_ALLOWED_URL.includes(currentUrl)
      if (!allow) {
        router.replace('/home').catch((err) => {
          throw err
        })
      }
    } else if (userType === AccountType.business) {
      const allow =
        BUSINESS_ALLOWED_URL.includes(
          currentUrl
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

  useEffect(() => {
    void handleProtectedRoutes()
  }, [])

  return (
    <>
      <Component {...pageProps} />
      {showModal ? <ModalContainer /> : null}
    </>
  )
}

export default observer(App)

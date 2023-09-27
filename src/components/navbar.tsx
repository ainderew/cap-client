import React from 'react'

import BusinessNavBar from './businessNavbar'

import { useStores } from '@/core/stores/UseStores'
import { useRouter } from 'next/router'
import DefaultChatNavbar from './defaultChatNavbar'
import CustomerNavbar from './customerNavbar'
import LandingNavbar from './landingNavbar'

const NavBar: React.FC = () => {
  const router = useRouter()

  const currentPath = router.asPath
  const { authStore } = useStores()
  const Type = authStore.userProfile?.profile.type
  let body = <DefaultChatNavbar />
  if (Type !== null && Type !== undefined) {
    if (Type) {
      body = <CustomerNavbar />
    } else if (!Type) {
      body = <BusinessNavBar />
    } else if (currentPath === '/') {
      body = <LandingNavbar />
    } else {
      body = <DefaultChatNavbar />
    }
  } else {
    body = <LandingNavbar />
  }
  return <div>{body}</div>
}

export default NavBar

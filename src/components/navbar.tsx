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
  const userType = authStore.userProfile?.profile.type
  console.log(userType)
  let body = <DefaultChatNavbar />
  if (userType !== null && userType !== undefined) {
    if (!userType) {
      body = <CustomerNavbar />
    } else if (userType) {
      body = <BusinessNavBar />
      console.log('test', currentPath)
    }
  } else {
    body = <DefaultChatNavbar/>
  }
  return <div className=' top-0'>{body}</div>
}

export default NavBar

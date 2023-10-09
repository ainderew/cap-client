import React from 'react'

import BusinessNavBar from './businessNavbar'

import useStores from '@/core/stores/UseStores'
import DefaultChatNavbar from './defaultChatNavbar'
import CustomerNavbar from './customerNavbar'

const NavBar: React.FC = () => {
  const { authStore } = useStores()
  const userType = authStore.userProfile?.type

  let body = <DefaultChatNavbar />
  if (userType !== null && userType !== undefined) {
    if (!userType) {
      body = <CustomerNavbar />
    } else if (userType) {
      body = <BusinessNavBar />
    }
  } else {
    body = <DefaultChatNavbar/>
  }
  return <div className=' top-0'>{body}</div>
}

export default NavBar

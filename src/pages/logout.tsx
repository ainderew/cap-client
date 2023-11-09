import React, { useEffect } from 'react'
import useStores from '@/core/stores/UseStores'
import { useRouter } from 'next/router'

function Logout (): React.ReactElement {
  const { authStore } = useStores()
  const router = useRouter()

  useEffect(() => {
    authStore.logoutUser()
    void router.replace('/')
  }, [])
  return <>Loging out</>
}

export default Logout

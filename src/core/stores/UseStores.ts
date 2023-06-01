import { useContext } from 'react'
import Context from './Context'
import type AuthStore from './AuthStore'

interface storeTypes {
  authStore: AuthStore
}

export const useStores = (): storeTypes => useContext(Context)

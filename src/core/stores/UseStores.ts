import { useContext } from 'react'
import Context from './Context'
import type AuthStore from './AuthStore'
import type UiStore from './UiStore'

interface storeTypes {
  authStore: AuthStore
  uiStore: UiStore
}

const useStores = (): storeTypes => useContext(Context)

export default useStores

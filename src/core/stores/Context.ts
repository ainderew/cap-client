import { createContext } from 'react'
import AuthStore from './AuthStore'
import UiStore from './UiStore'

export default createContext({
  authStore: new AuthStore(),
  uiStore: new UiStore()
})

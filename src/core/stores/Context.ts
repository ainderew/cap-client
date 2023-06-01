import { createContext } from 'react'
import AuthStore from './AuthStore'

export default createContext({
  authStore: new AuthStore()
})

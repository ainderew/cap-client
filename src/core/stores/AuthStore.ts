
import { action, observable, makeObservable } from 'mobx'
import { type loginResponse, type userProfile } from '@/utils/types/auth.js'
import { keys } from '@/utils/enums'

export default class AuthStore {
  userProfile: userProfile | null = null
  authToken: string | null = null

  constructor () {
    makeObservable(this, {
      userProfile: observable,
      authToken: observable,
      loginUser: action,
      logoutUser: action,
      setProfile: action
    })
  }

  loginUser = (profile: loginResponse): void => {
    this.userProfile = profile.profile

    sessionStorage.setItem(keys.AUTH_TOKEN_KEY, profile.authToken)
  }

  logoutUser = (): void => {
    sessionStorage.removeItem(keys.AUTH_TOKEN_KEY)
  }

  setProfile = (profile: userProfile): void => {
    this.userProfile = profile
  }
}

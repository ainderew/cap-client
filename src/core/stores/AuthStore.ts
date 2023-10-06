
import { action, observable, makeObservable } from 'mobx'

interface userProfile {
  profile: {
    _id: string
    email: string
    type: boolean
  }
  authToken: string
}

export default class AuthStore {
  userProfile: userProfile | null = null

  constructor () {
    makeObservable(this, {
      userProfile: observable,
      loginUser: action
    })
  }

  loginUser = (profile: any): void => {
    this.userProfile = profile
  }
}

/* import { action, observable, makeObservable } from 'mobx'

interface userProfile {
  profile: {
    _id: string
    email: string
    type: boolean
  }
  authToken: string
}

export default class AuthStore {
  userProfile: userProfile | null = null

  constructor () {
    makeObservable(this, {
      userProfile: observable,
      loginUser: action,
      logoutUser: action
    })

    if (process.browser) {
      this.initializeUserProfile()
    }
  }

  initializeUserProfile = (): void => {
    const savedUserProfile = sessionStorage.getItem('userProfile')
    if (savedUserProfile !== null) {
      this.userProfile = JSON.parse(savedUserProfile)
    }
  }

  loginUser = (profile: userProfile): void => {
    this.userProfile = profile

    // Save to sessionStorage (only in a browser context)
    if (process.browser) {
      sessionStorage.setItem('userProfile', JSON.stringify(profile))
    }
  }

  logoutUser = (): void => {
    this.userProfile = null

    // Remove from sessionStorage (only in a browser context)
    if (process.browser) {
      sessionStorage.removeItem('userProfile')
    }
  }
}
 */

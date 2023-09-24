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

  constructor() {
    makeObservable(this, {
      userProfile: observable,
      loginUser: action
    })
  }

  loginUser = (profile: any): void => {
    this.userProfile = profile
  }
}

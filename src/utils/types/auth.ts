
export interface userProfile {
  _id: string
  email: string
  type: boolean
}

export interface loginResponse {
  profile: {
    _id: string
    email: string
    type: boolean
  }
  authToken: string
}

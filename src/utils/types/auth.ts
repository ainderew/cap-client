import { type AccountType } from '../enums'

export interface userProfile {
  _id: string
  email: string
  type: AccountType
}

export interface loginResponse {
  profile: {
    _id: string
    email: string
    type: AccountType
  }
  authToken: string
}

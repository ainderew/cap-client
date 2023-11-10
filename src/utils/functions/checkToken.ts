import { keys } from '../enums'

type checkTokenReturnType = null | string

function checkToken (): checkTokenReturnType {
  return sessionStorage.getItem(keys.AUTH_TOKEN_KEY)
}

export default checkToken

type checkTokenReturnType = null | string

function checkToken (): checkTokenReturnType {
  return sessionStorage.getItem('authToken')
}

export default checkToken

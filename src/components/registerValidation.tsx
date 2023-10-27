import { message } from 'antd'

function ValidateUserForm(user: any, vpassword: any): boolean {
  if (Object.values(user).some((value) => !value)) {
    void message.error('Empty fields')
    console.log(user)
    return false
  } else if (vpassword !== user.password) {
    void message.error('Password does not match')
    return false
  }
  return true
}

export default ValidateUserForm

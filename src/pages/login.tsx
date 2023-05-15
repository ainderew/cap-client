import React, { useState } from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function submitForm (): void {
    const bodyObj = {
      email,
      password
    }

    fetch('http://localhost:8989/login', {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    })
      .then(async (res) => {
        const test = res.json()
        return await test
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        throw err
      })
  }
  return (
    <div className="font-poppins flex min-h-[100vh] items-center justify-center">
      <div>
        <div className="text-center text-[5rem] font-[600] tracking-[.5rem]">
          LOGIN
        </div>
        <div className="text-center font-[500]">
          Manage customer support with the help of AI
        </div>
        <div className="my-[2.5rem] font-[400]">
          <div className="py-[.7rem]">Email</div>
          <input
            value={email}
            type="text"
            className="w-[25rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></input>
        </div>
        <div className="my-[2.5rem] font-[400]">
          <div className="py-[.7rem]">Password</div>
          <input
            value={password}
            type="password"
            className="w-[25rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input>
        </div>
        <div>
          <div className="text-[.85rem] text-[#2B99FF]">Forget Password?</div>
        </div>
        <div className="my-[2rem] text-center font-[600]">
          <button
            onClick={submitForm}
            className="w-[10rem] rounded-[.3rem] bg-[#D9D9D9] px-[2rem] py-[.5rem]"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

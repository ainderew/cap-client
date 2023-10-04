import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { config } from '../../../config'

interface Business {
  email: string
  password: string
  type: string
  name: string
  size: number
  industry: string
}

const BusinessSignup: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [vpassword, setVPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [size, setSize] = useState<number>(0)
  const [industry, setIndustry] = useState<string>('')

  const submitForm = (): void => {
    const bodyObj: Business = {
      email,
      password,
      type: 'business',
      name,
      size,
      industry
    }

    fetch(`${config.BACKEND_ENDPOINT}/api/register/business`, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    })
      .then(async res => {
        const test = res.json()
        return await test
      })
      .then(data => {
        router.push('/business/dashboard').catch(err => {
          throw err
        })
      })
      .catch(err => {
        throw err
      })
  }
  return (
    <div>
      <div className='flex h-[100vh] font-poppins'>
        <div className='grid w-full grid-cols-[50%_50%] overflow-x-hidden'>
          <div className='m-[5rem] flex items-center justify-center'>
            <div>
              <div className='mb-[1.5rem]'>
                <div className='text-[3.5rem] font-[700] tracking-[.5rem]'>WELCOME</div>
                <div className='text-[2.25rem] font-[600] tracking-[.45rem]'>Sign up with us</div>
                <div className='font-[600] tracking-[.1rem]'>
                  Manage customer support with the help of AI
                </div>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Email</div>
                <input
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Password</div>
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Verify Password</div>
                <input
                  value={vpassword}
                  onChange={e => {
                    setVPassword(e.target.value)
                  }}
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Business Name</div>
                <input
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='grid grid-cols-[42%_42%]'>
                <div className='my-[.5rem] font-[400]'>
                  <div className='py-[.5rem]'>Business Size</div>
                  <input
                    value={size >= 0 ? size : 0}
                    onChange={e => {
                      setSize(parseInt(e.target.value))
                    }}
                    type='number'
                    inputMode='numeric'
                    className='w-[9rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  ></input>
                </div>
                <div className='my-[.5rem] font-[400]'>
                  <div className='py-[.5rem]'>Industry</div>
                  <input
                    value={industry}
                    onChange={e => {
                      setIndustry(e.target.value)
                    }}
                    type='text'
                    className='w-[9rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  ></input>
                </div>
              </div>

              <div className='mt-[3rem] font-[600]'>
                <button
                  onClick={submitForm}
                  className='w-[10rem] rounded-[.3rem] bg-[#D9D9D9] px-[1.5rem] py-[.3rem] text-[.8rem] font-[600]'
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className=''>{/* <Image src={''} width={} height={} alt='' /> */}</div>
            <div className=''>{/* <Image src={''} width={} height={} alt='' /> */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSignup

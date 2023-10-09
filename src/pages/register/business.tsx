import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import usePostData from '@/hooks/usePostData'
import { type Filter } from '@/utils/types/base'
import { Spin } from 'antd'

// interface Business {
//   email: string
//   password: string
//   type: string
//   name: string
//   size: number
//   industry: string
// }

const BusinessRegisterUI: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [vpassword, setVPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [size, setSize] = useState<number>(0)
  const [industry, setIndustry] = useState<string>('')
  const { data, loading, handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/register/business`)

  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }
  const submitForm = (): void => {
    const bodyObj: Filter = {
      email,
      password,
      type: 'business',
      name,
      size,
      industry
    }

    void handlePostRequest(bodyObj)
  }

  useEffect(() => {
    if (data === null) return
    if (data !== null) void router.push('/login')
  }, [data])
  return (
    <div>
      <div className='flex min-h-full font-poppins'>
        <div className='grid w-full overflow-x-hidden'>
          <div className=' flex items-center justify-center ]'>
            <div>
              <div className='mb-[1.5rem]'>
                <div className='text-[3.5rem] font-[700] tracking-[.5rem]'>WELCOME</div>
                <div className='text-[1] font-[600]'>Enter your account details</div>
            {/*     <div className='text-[2.25rem] font-[600] tracking-[.45rem]'>Sign up with us</div> */}

              </div>
              <section className='font-[400] flex flex-col gap-2'>
              <div >
                <p>Email</p>
                <input
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div >
              <p>Password</p>
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div >
                <p>Verify Password</p>
                <input
                  value={vpassword}
                  onChange={e => {
                    setVPassword(e.target.value)
                  }}
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div >
                <p>Business Name</p>
                <input
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                ></input>
              </div>
              <div className='grid grid-cols-[42%_42%] gap-[2rem]'>
                <div >
                  <p>Business Size</p>
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
                <div>
                  <p>Industry</p>
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
                    <div className='text-[.7rem] text-[#878787]'>
                      <p>Register as <a className='font-semibold text-[#2B99FF] hover:text-black cursor-pointer' onClick={() => {
                        handleRedirect('/register/customer')
                      }}>Customer</a> instead</p>
                    </div>
              <div className='mt-[1rem] font-[600]'>
                <button
                  onClick={submitForm}
                  className='w-[20rem] text-white rounded-[.3rem] bg-[#2B99FF] px-[1.5rem] py-[.3rem] text-[.8rem] font-[600]'
                >
                  {loading ? <Spin /> : 'Proceed'}
                </button>
              </div>
              </section>
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

export default BusinessRegisterUI

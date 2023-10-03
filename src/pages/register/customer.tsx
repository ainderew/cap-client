import { DatePicker, type DatePickerProps } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface Customer {
  email: string
  password: string
  type: string
  username: string
  birthdate: Date
  age: number
}

const CustomerRegisterUI: React.FC = () => {
  const router = useRouter()
  const currentDate = new Date()
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [birthdate, setBirthdate] = useState<Date>(new Date())
  const [vpassword, setVPassword] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const handleRedirect = (route: string): void => {
    router.push(route).catch(err => {
      throw err
    })
  }

  const onChange: DatePickerProps['onChange'] = (data, dateString) => {
    if (dateString !== null && dateString !== '') {
      console.log(dateString)
      const inputDateStr = dateString
      const dob = new Date(inputDateStr)
      dob.setHours(0)
      dob.setMinutes(0)
      dob.setSeconds(0)
      dob.setMilliseconds(0)
      console.log(dob.toISOString())

      const now = currentDate
      let yearsDiff = now.getFullYear() - dob.getFullYear()
      const monthsDiff = now.getMonth() - dob.getMonth()
      const daysDiff = now.getDate() - dob.getDate()

      if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        yearsDiff--
      }
      setAge(yearsDiff)
      console.log(age)
      setBirthdate(dob)
      console.log(dob)
    } else {
      console.log('Test')
    }
  }

  const submitForm = (): void => {
    const bodyObj: Customer = {
      email,
      password,
      type: 'customer',
      username,
      birthdate,
      age

    }

    fetch('http://localhost:5000/api/register/customer', {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    })
      .then(async res => {
        const test = res.json()
        console.log(test)
        return await test
      })
      .then(data => {
        console.log(data)
        router.push('/home').catch(err => {
          throw err
        })
      })
      .catch(err => {
        throw err
      })
  }

  return (
    <div>
      <div className='flex min-h-screen px-32'>
        <div className='grid w-full grid-cols-[50%_50%] '>
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
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Username</div>
                <input
                  type='text'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  value={username}
                  onChange={e => {
                    setUsername(e.target.value)
                  }}
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Password</div>
                <input
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Verify Password</div>
                <input
                  type='password'
                  className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
                  value={vpassword}
                  onChange={e => {
                    setVPassword(e.target.value)
                  }}
                ></input>
              </div>
              <div className='my-[.5rem] font-[400]'>
                <div className='py-[.5rem]'>Date of Birth</div>
                <DatePicker onChange={onChange} className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'/>
              </div>

              <div className='text-[.9rem] text-[#878787]'>
                      <p>Register as <a className='font-semibold text-[#2B99FF] hover:text-black cursor-pointer' onClick={() => {
                        handleRedirect('/register/business')
                      }}>Business</a> instead</p>
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
          <div className='flex items-center justify-center'>
            <div className='z-99 relative h-[50%] w-[60%]'>
              <Image src='/images/bsignupimage.svg' fill alt='human registering' />
            </div>
            <div className='absolute bottom-0 right-0'>
              <div className='relative h-[400px] w-[400px]'></div>
              <Image src={'/ball.svg'} fill alt='ball' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerRegisterUI

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import usePostData from '@/hooks/usePostData'
import { type Filter } from '@/utils/types/base'
import { Spin, message } from 'antd'
import { industrylist, sizelist } from './menulists'
import BusinessDropdown from './dropdown'
import BusinessIndustrySearch from './searchdropdown'
import { measureMemory } from 'vm'
import ValidateUserForm from '../registerValidation'

export interface BusinessInterface {
  email: string
  password: string
  type: string
  name: string
  size: (typeof sizelist)[number]
  industry: (typeof industrylist)[number]
}

const BusinessRegisterForm: React.FC = () => {
  const router = useRouter()
  const [business, setBusiness] = useState<BusinessInterface>({
    email: '',
    password: '',
    type: 'business',
    name: '',
    size: '',
    industry: '',
  })
  const [vpassword, setVpassword] = useState<string>('')
  const { data, loading, handlePostRequest } = usePostData(
    `${config.BACKEND_ENDPOINT}/api/register/business`,
  )
  const handleRedirect = (route: string): void => {
    router.push(route).catch((err) => {
      throw err
    })
  }


  useEffect(() => {
    if (data === null) return

    //make this as separate tsx

    if (!ValidateUserForm(business, vpassword)) return

    if (!industrylist.includes(business.industry)) {
      void message.error('Please select a valid Industry')
      return
    }

    const submitForm = (): void => {
            const bodyObj: Filter = {
                ...business
            }
            void handlePostRequest(bodyObj)
    }
    
    if (data !== null) void router.push('/login')
  }, [data])

  return (
    <section className='flex flex-col gap-2 font-[400]'>
      <div>
        <p>Email</p>
        <input
          value={business.email}
          onChange={(e) => {
            setBusiness({ ...business, email: e.target.value })
          }}
          type='text'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Password</p>
        <input
          value={business.password}
          onChange={(e) => {
            setBusiness({ ...business, password: e.target.value })
          }}
          type='password'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Verify Password</p>
        <input
          value={vpassword}
          onChange={(e) => {
            setVpassword(e.target.value)
          }}
          type='password'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Business Name</p>
        <input
          value={business.name}
          onChange={(e) => {
            setBusiness({ ...business, name: e.target.value })
          }}
          type='text'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      {/*   <div className='grid grid-cols-2 gap-3'>
                <div >
                  <p>Business Size</p>
                  <BusinessDropdown list={sizelist} defaultMessage='Select one . . .' business={business} setBusiness={setBusiness} />
                </div>
                <div>
                  <p>Industry</p>
                  <BusinessIndustrySearch list={industrylist} defaultMessage='Select one . . .' business={business} setBusiness={setBusiness} />
                </div>
              </div> */}
      <div>
        <p>Business Size</p>
        <BusinessDropdown
          list={sizelist}
          defaultMessage='Select one . . .'
          business={business}
          setBusiness={setBusiness}
        />
      </div>
      <div>
        <p>Industry</p>
        <BusinessIndustrySearch
          list={industrylist}
          defaultMessage='Select one . . .'
          business={business}
          setBusiness={setBusiness}
        />
      </div>
      <div className='text-[.7rem] text-[#878787]'>
        <p>
          Register as{' '}
          <a
            className='cursor-pointer font-semibold text-[#2B99FF] hover:text-black'
            onClick={() => {
              handleRedirect('/register/customer')
            }}
          >
            Customer
          </a>{' '}
          instead
        </p>
      </div>
      <div className='mt-[1rem] font-[600]'>
        <button
          onClick={submitForm}
          className='w-[20rem] rounded-[.3rem] bg-[#2B99FF] px-[1.5rem] py-[.3rem] text-[.8rem] font-[600] text-white'
        >
          {loading ? <Spin /> : 'Proceed'}
        </button>
      </div>
    </section>
  )
}

export default BusinessRegisterForm
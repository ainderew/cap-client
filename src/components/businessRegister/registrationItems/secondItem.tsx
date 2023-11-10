import { LinkOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

interface props {
  handleLocationChange: any
  sizelist: any
  business: any
  setBusiness: any
  industrylist: any
}

export default function SecondItem ({
  setBusiness,
  business
}: props): React.ReactElement {
  return (
    <>
      <span className='bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-xl font-semibold text-transparent'>
        Business Information
      </span>
      <div className='flex flex-col gap-2'>
        <p>Business contact email</p>
        <Input
          value={business.businessEmail}
          onChange={(e) => {
            setBusiness({ ...business, businessEmail: e.target.value })
          }}
          type='text'
          className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
          prefix={<MailOutlined />}
        />
      </div>

      <div className='flex flex-col gap-2'>
      <p>Business contact number</p>
        <Input
          value={business.phoneNumber}
          onChange={(e) => {
            setBusiness({ ...business, phoneNumber: e.target.value })
          }}
          type='text'
          className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
          prefix={<PhoneOutlined />}
        />
      </div>

      <div>
        <p>Website</p>
        <Input
          value={business.website}
          onChange={(e) => {
            setBusiness({ ...business, website: e.target.value })
          }}
          type='text'
          className='w-full'
          prefix={<LinkOutlined />}
        />
      </div>
    </>
  )
}

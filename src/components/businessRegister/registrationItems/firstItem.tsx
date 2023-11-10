import LocationSelector from '@/components/location/locationselector'
import React from 'react'
import BusinessIndustrySearch from '../searchdropdown'
import BusinessDropdown from '../dropdown'
import { Input } from 'antd'
import { EditOutlined, HistoryOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
// change later
interface props {
  business: any
  setBusiness: any
  vpassword: any
  setVpassword: any
  sizelist: any
  industrylist: any
  handleLocationChange: any
}

export default function FirstItem ({
  business,
  setBusiness,
  vpassword,
  setVpassword,
  sizelist,
  industrylist,
  handleLocationChange
}: props): React.ReactElement {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <span className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary'>Registration</span>
      <div className='grid h-full w-full grid-cols-2 gap-12 py-8'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <p>Email</p>
            <Input
              value={business.email}
              onChange={(e) => {
                setBusiness({ ...business, email: e.target.value })
              }}
              type='text'
              className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
              prefix={<MailOutlined />}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Password</p>
            <Input
              value={business.password}
              onChange={(e) => {
                setBusiness({ ...business, password: e.target.value })
              }}
              type='password'
              className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
              prefix={<LockOutlined />}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Verify Password</p>
            <Input
              value={vpassword}
              onChange={(e) => {
                setVpassword(e.target.value)
              }}
              type='password'
              className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
              prefix={<HistoryOutlined />}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Business Name</p>
            <Input
              value={business.name}
              onChange={(e) => {
                setBusiness({ ...business, name: e.target.value })
              }}
              type='text'
              className='w-full !border-b-2 p-[.2rem] px-[.7rem]'
              prefix={<EditOutlined />}
            />
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <p>Business Size</p>
            <BusinessDropdown
              list={sizelist}
              defaultMessage='Select one . . .'
              business={business}
              setBusiness={setBusiness}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Industry</p>
            <BusinessIndustrySearch
              list={industrylist}
              defaultMessage='Select one . . .'
              business={business}
              setBusiness={setBusiness}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p>Business Location</p>
            <LocationSelector
              onLocationChange={handleLocationChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

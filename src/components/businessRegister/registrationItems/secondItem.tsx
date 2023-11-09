import React from 'react'
import LocationSelector from '@/components/location/locationselector'
import BusinessDropdown from '../dropdown'
import BusinessIndustrySearch from '../searchdropdown'

interface props {
  handleLocationChange: any
  sizelist: any
  business: any
  setBusiness: any
  industrylist: any
}

export default function SecondItem ({ handleLocationChange, setBusiness, business, sizelist, industrylist }: props): React.ReactElement {
  return (
      <>
        <div className='w-[20rem]'>
          <p>Business Size</p>
          <BusinessDropdown
            list={sizelist}
            defaultMessage='Select one . . .'
            business={business}
            setBusiness={setBusiness}
          />
        </div>
        <div className='w-[20rem]'>
          <p>Industry</p>
          <BusinessIndustrySearch
            list={industrylist}
            defaultMessage='Select one . . .'
            business={business}
            setBusiness={setBusiness}
          />
        </div>
        <div className='w-[20rem]'>
          <p>Business Location</p>
          <LocationSelector onLocationChange={handleLocationChange} />
        </div>
        <div>
        <p>Website</p>
        <input
          value={business.website}
          onChange={(e) => {
            setBusiness({ ...business, website: e.target.value })
          }}
          type='text'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      </>
  )
}

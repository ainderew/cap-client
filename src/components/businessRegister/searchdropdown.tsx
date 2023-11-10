/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AutoComplete } from 'antd'
import React from 'react'
import { type BusinessInterface } from './form'

interface BSearchInterface {
  list: string[]
  defaultMessage: string
  business: BusinessInterface
  setBusiness: React.Dispatch<React.SetStateAction<BusinessInterface>>
}

const BusinessIndustrySearch: React.FC<BSearchInterface> = ({
  list,
  defaultMessage,
  business,
  setBusiness
}) => {
  const options = list.map((option) => ({
    value: option
  }))
  return (
    <AutoComplete
      className='w-full border-b-2 cursor-pointer '
      style={{ width: '100%' }}
      options={options}
      placeholder={defaultMessage}
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().includes(inputValue.toUpperCase())
      }
      value={business.industry}
      onChange={(value) => {
        setBusiness({ ...business, industry: value })
      }}
    />
  )
}

export default BusinessIndustrySearch

import { AutoComplete } from 'antd'
import React from 'react'
import { BusinessInterface } from './form'


interface BSearchInterface{
    list: string[]
    defaultMessage : string
    business: BusinessInterface
    setBusiness: React.Dispatch<React.SetStateAction<BusinessInterface>>
}


const BusinessIndustrySearch:React.FC<BSearchInterface> = ({list, defaultMessage, business, setBusiness}) => {
    const options = 
    list.map((option)=>({
        value: option 
    }))
return (
    <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder={defaultMessage}
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    value={business.industry}
    onChange={value => {
        setBusiness({...business , industry : value})
      }}
  />
  )
}

export default BusinessIndustrySearch

import React from 'react'
import useStores from '@/core/stores/UseStores'
import BusinessOptions from './businessOptions'
import CustomerOptions from './customerOptions'
import DefaultOptions from './defaultOptions'

const options = {
  business: <BusinessOptions />,
  customer: <CustomerOptions />,
  default: <DefaultOptions />
}

function NavOptions (): React.ReactElement {
  const {authStore:{userProfile}} = useStores()
  
  return (
    <div className="flex flex-1 items-center justify-end gap-10 px-10">
      {options[userProfile ? userProfile?.type : "default"]}
    </div>
  )
}

export default NavOptions

import React from 'react'
import useStores from '@/core/stores/UseStores'
import BusinessOptions from './businessOptions'
import CustomerOptions from './customerOptions'

const options = {
  business: <BusinessOptions />,
  customer: <CustomerOptions />,
  default: <></>
}

function NavOptions (): React.ReactElement {
  const {authStore:{userProfile}} = useStores()
  
  return (
    <div className="flex flex-1 items-center justify-end gap-4 px-10">
      {options[userProfile ? userProfile?.type : "default"]}
    </div>
  )
}

export default NavOptions

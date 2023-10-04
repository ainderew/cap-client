import React, { type ReactElement } from 'react'
import NavBar from '@/components/navbar'

interface props {
  children?: ReactElement | null
}

function DefaultLayout ({ children }: props): React.ReactElement {
  return (
    <div className='h-screen w-full'>
      <NavBar />
      {children}
    </div>
  )
}

export default DefaultLayout

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import BusinessNavBar from './businessNavbar'

const NavBar: React.FC = () => {
  return (
    <div>
      <BusinessNavBar />
    </div>
  )
}

export default NavBar

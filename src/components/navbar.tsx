import React from 'react'

import BusinessNavBar from './businessNavbar'
import LandingNavbar from './landingNavbar'
import CustomerNavbar from './customerNavbar'

const NavBar: React.FC = () => {
  const body = <CustomerNavbar />

  return <div>{body}</div>
}

export default NavBar

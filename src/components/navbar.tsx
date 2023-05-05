import React, { useState } from 'react'

const NavBar: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='color-white flex h-11 w-full items-center bg-blue-300 px-28'>
      <ul className='flex flex-1'>
        <li className=''>Test</li>
        <li className=''>Test</li>
        <li className=''>Test</li>
        <li className=''>Test</li>
      </ul>
      <div className='relative'>
        <button
          onMouseEnter={() => {
            setHovered(true)
          }}
          onMouseLeave={() => {
            setHovered(false)
          }}
          className=''
        >
          Sign Up
        </button>
        {hovered ? (
          <div className='absolute right-5 w-[300px] bg-white p-4 shadow-md'>
            <ul className='flex flex-col'>
              <li className=''>test</li>
              <li className=''>test</li>
              <li className=''>test</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavBar

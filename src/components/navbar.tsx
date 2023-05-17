import Image from 'next/image'
import React from 'react'

const NavBar: React.FC = () => {
  return (
    <div className="color-white flex h-16 w-full items-center justify-between px-28">
      <div className="logo-container flex h-full items-center gap-2">
        <div className="relative h-full w-7">
          <Image src={'/logo.svg'} fill alt="chatxpert" />
        </div>
        <span className="font-semibold">ChatXpert</span>
      </div>
      {/* <ul className="flex flex-1">
        <li className="">Test</li>
        <li className="">Test</li>
        <li className="">Test</li>
        <li className="">Test</li>
      </ul> */}

      <div className="flex gap-4">
        <button className="">Sign Up</button>
        <button className="">Login</button>
      </div>
      {/* {hovered ? (
          <div className="absolute right-5 w-[300px] bg-white p-4 shadow-md">
            <ul className="flex flex-col">
              <li className="">test</li>
              <li className="">test</li>
              <li className="">test</li>
            </ul>
          </div>
        ) : null} */}
    </div>
  )
}

export default NavBar

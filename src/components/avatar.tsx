import Image from 'next/image'
import React from 'react'

interface props {
  image?: string
}
const Avatar: React.FC<props> = ({ image }) => {
  return (
    <div className="relative flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-[#F4F4F4] shadow-md shadow-gray-400">
      <Image
        src={image === undefined ? '/logo.svg' : image}
        alt="logo"
        width={0}
        height={0}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default Avatar

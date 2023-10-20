import Image from 'next/image'
import React from 'react'

interface props {
  image?: string
}
const Avatar: React.FC<props> = ({ image }) => {
  return (
    <div className="relative flex h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-[#F4F4F4] shadow-md shadow-gray-400 xl:h-10 xl:w-10">
      <Image
        src={image === undefined ? '/mascot.svg' : image}
        alt="logo"
        fill
        
        // width={0}
        // height={0}
        style={{objectFit:'cover' }}
      />
    </div>
  )
}

export default Avatar

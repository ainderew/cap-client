import React from 'react'
import Image from 'next/image'

const Loading: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
     <div className="relative h-[20%] w-[20%]">
       <Image className="float" src={'/mascot.svg'} fill alt="loading" />
     </div>
     <span className="text-xl text-[#D0D0D0]">Getting things ready</span>
   </div>
  )
}
export default Loading

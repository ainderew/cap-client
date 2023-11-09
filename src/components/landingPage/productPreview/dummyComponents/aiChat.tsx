import Image from 'next/image'
import React from 'react'

interface DummyChatProps {
  content: string
}

function PreviewAiChat ({ content }: DummyChatProps): React.ReactElement {
  return (
    <div className='rounded-xl text-xs xl:text-base bg-primary text-white flex gap-2 self-start items-center justify-end px-4 py-2'>
      <div className='h-6 w-6 rounded-full bg-white relative'>
        <Image src={'/mascot.svg'} fill alt="Bramk bot" />
      </div>
      {content}
    </div>
  )
}

export default PreviewAiChat

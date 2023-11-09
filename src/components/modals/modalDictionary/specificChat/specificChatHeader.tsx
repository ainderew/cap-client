import Image from 'next/image'
import React from 'react'

interface SpecificChatHeaderProps {
  image: string | React.ReactElement
  label: string
}

function SpecificChatHeader ({ image, label }: SpecificChatHeaderProps): React.ReactElement {
  return (
    <div className='flex gap-4 bg-gray-200 p-4'>
      {typeof image === 'string' ? (
        <Image src={image} alt={label} fill />
      ) : (
        image
      )}
      <span className="text-lg font-medium">{label.toUpperCase()}</span>
    </div>
  )
}

export default SpecificChatHeader

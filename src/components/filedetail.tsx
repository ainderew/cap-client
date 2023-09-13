import Image from 'next/image'
import React from 'react'

interface FileDetailProps {
  name: string
  lastmodified: string
  createdby: string
  status: boolean
}

const FileDetail: React.FC<FileDetailProps> = ({ name, lastmodified, createdby, status }) => {
  return (
    <div className='my-4 rounded-xl px-10 py-1 outline outline-1 outline-neutral-300'>
      <ul className='grid grid-cols-[8%_28%_28%_28%_8%]'>
        <li className='flex items-center'>
          {status ? (
            <div className='h-3 w-3 rounded-full bg-[#00ff00]'></div>
          ) : (
            <div className='h-3 w-3 rounded-full bg-[#ff0000]'></div>
          )}
        </li>
        <li>{name}</li>
        <li>{lastmodified}</li>
        <li>{createdby}</li>
        <li>
          <div>
            <Image src='/downloadicon.svg' alt='' width={20} height={20} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FileDetail

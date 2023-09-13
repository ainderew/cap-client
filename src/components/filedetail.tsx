import Image from 'next/image'
import React from 'react'
import Tooltip from './tooltip'

interface FileDetailProps {
  name: string
  lastmodified: string
  createdby: string
  status: boolean
}

const FileDetail: React.FC<FileDetailProps> = ({ name, lastmodified, createdby, status }) => {
  return (
    <div className='my-4 rounded-xl px-10 py-1  outline outline-1 outline-neutral-300'>
      <ul className='grid grid-cols-[5%_25%_25%_25%_20%]'>
        <li className='flex items-center'>
          {status ? (
            <div className='h-3 w-3 rounded-full bg-[#00ff00]'></div>
          ) : (
            <div className='h-3 w-3 rounded-full bg-[#ff0000]'></div>
          )}
        </li>
        <li className='mx-2'>{name}</li>
        <li className='mx-2'>{lastmodified}</li>
        <li className='mx-2'>{createdby}</li>
        <li className='mx-2 flex gap-4'>
          <button
            className={`${
              status ? 'cursor-not-allowed bg-neutral-500' : 'bg-sky-500'
            } rounded-full px-3 text-white`}
          >
            Activate
          </button>
          <div className='flex'>
            <Tooltip label='Download'>
              <Image src='/downloadicon.svg' alt='' width={20} height={20} />
            </Tooltip>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FileDetail

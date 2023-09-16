import React from 'react'
import Image from 'next/image'
import Tooltip from './tooltip'

interface FileInfoProps {
  name: string
  dateuploaded: string
  createdby: string
  status: boolean
  lastused: string
}

const FileInfo: React.FC<FileInfoProps> = ({ name, dateuploaded, createdby, status, lastused }) => {
  return (
    <div className='relative my-4 rounded-xl outline outline-1 outline-neutral-300'>
      <div className='px-10 pt-8'>
        <div
          className={`absolute -top-2 left-5 rounded-md px-5 text-white ${
            status ? 'bg-green-500' : 'bg-neutral-500'
          }`}
        >
          {status ? 'ACTIVE' : 'DISABLED'}
        </div>
        <ul className='grid grid-cols-[45%_20%_20%_10%_5%]'>
          <li className='text-xl'>{name}</li>
          <li>{dateuploaded}</li>
          <li>{createdby}</li>
          <li>
            <section className='flex items-center justify-center gap-2'>
              <Tooltip label='Download'>
                <Image src='/downloadicon.svg' width={24} height={24} alt='' />
              </Tooltip>
            </section>
          </li>
          <li>
            {status ? (
              ''
            ) : (
              <section className='flex items-center justify-center gap-2'>
                <Tooltip label='Activate'>
                  <Image src='/activate.svg' width={24} height={24} alt='' />
                </Tooltip>
              </section>
            )}
          </li>
        </ul>
      </div>
      <section className='mt-2 bg-neutral-200 py-2 pl-10 text-sm text-neutral-500'>
        {status ? 'Currently in use' : lastused}
      </section>
    </div>
  )
}

export default FileInfo

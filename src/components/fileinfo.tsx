import React from 'react'
import Image from 'next/image'
import Tooltip from './tooltip'
import { useFileContext } from '@/core/upload/context'

interface FileInfoProps {
  id: string
  businessid: string
  name: string
  dateuploaded: string
  status: boolean
  lastused: string
}

const FileInfo: React.FC<FileInfoProps> = ({
  id,
  businessid,
  name,
  dateuploaded,
  status,
  lastused
}) => {
  const { setIsLoading } = useFileContext()

  const handleTrigger = (): void => {
    fetch(`http://localhost:5000/api/file/trigger/${id}`, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessId: businessid })
    })
      .then(async res => await (res.json())
      )
      .then(data => {
        setIsLoading(true)
      })
      .catch(err => {
        throw err
      })
    setIsLoading(false)
  }

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
        <ul className='grid grid-cols-[60%_25%_10%_5%]'>
          <li className='text-xl'>{name}</li>
          <li>{dateuploaded}</li>
          <li>
            <section className='flex items-center justify-center gap-2'>
              <Tooltip label='Download'>
                <a
                  href={`http://localhost:5000/api/file/download/${id}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image src='/downloadicon.svg' width={24} height={24} alt='' />
                </a>
              </Tooltip>
            </section>
          </li>
          <li>
            {status ? (
              ''
            ) : (
              <section className='flex items-center justify-center gap-2'>
                <Tooltip label='Activate'>
                  <Image
                    src='/activate.svg'
                    width={24}
                    height={24}
                    alt=''
                    onClick={handleTrigger}
                  />
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

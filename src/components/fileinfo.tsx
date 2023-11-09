import React from 'react'
import Image from 'next/image'
import Tooltip from './tooltip'
import { config } from '../../config'
import usePostData from '@/hooks/usePostData'
import useStores from '@/core/stores/UseStores'
import { CloudDownloadOutlined } from '@ant-design/icons'

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
  const { uiStore: { setIsActivatingFile } } = useStores()
  const data = { businessId: businessid }
  const { handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/file/trigger/${id}`)
  const fileName = name.substring(0, name.lastIndexOf('.'))

  const handleTrigger = async (): Promise<void> => {
    setIsActivatingFile(true)
    await handlePostRequest(data)
    setIsActivatingFile(false)
  }

  return (
    <div className='relative my-4 rounded-xl outline outline-1 outline-neutral-300'>
      <div className='px-10 pt-8'>
        <div
          className={`absolute -top-2 left-5 rounded-md px-5 text-white ${status ? 'bg-blue-500' : 'bg-neutral-500'
            }`}
        >
          {status ? 'ACTIVE' : 'DISABLED'}
        </div>
        <ul className='flex flex-col gap-2 sm:gap-0 sm:grid sm:grid-cols-[60%_25%_15%] '>
          <li className='text-lg font-semibold sm:text-xl '>{fileName}</li>
          <li className='text-sm sm:text-base text-neutral-500 sm:text-black'><span className='sm:hidden'>Uploaded on </span>{dateuploaded}</li>
          <li className='flex sm:justify-center gap-3'>
          <div >
            <section className='flex items-center justify-center gap-2'>
              <Tooltip label='Download'>
                <a
                  href={`${config.BACKEND_ENDPOINT}/api/file/download/${id}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <CloudDownloadOutlined style={{ color: '#3b82f6', fontSize: '24px' }}/>
                </a>
              </Tooltip>
            </section>
          </div>
          <div>
            {status ? (
              <Image
              src='/activate.svg'
              width={24}
              height={24}
              alt=''
              className='opacity-0'
            />
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
          </div>
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

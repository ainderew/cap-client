import Image from 'next/image'
import React from 'react'

interface DataSectionsProps {
  name: string
  desc: string
  photolink: string
  clicked: () => void
}

const DataSections: React.FC<DataSectionsProps> = ({ name, desc, photolink, clicked }) => {
  return (
    <div className='m-10 flex flex-col rounded-lg border border-neutral-500 p-5'>
      <Image src={''} alt='' width={70} height={70} className='bg-neutral-500' />
      <div className='font-semibold'>{name}</div>
      <div className='text-neutral-700'>{desc}</div>
      <div className='flex w-full justify-center p-4'>
        <button onClick={clicked} className='rounded-full bg-sky-500 px-10 py-2 text-white '>
          Configure
        </button>
      </div>
    </div>
  )
}

export default DataSections

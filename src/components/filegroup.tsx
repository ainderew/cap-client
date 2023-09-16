import React from 'react'
import FileInfo from './fileinfo'

const someData = [
  {
    name: 'test.txt',
    dateuploaded: 'August 23, 2023',
    createdby: 'Brett Josef C. Galvez',
    status: true,
    lastused: 'Current'
  },
  {
    name: 'another.txt',
    dateuploaded: 'August 10, 2023',
    createdby: 'Brett Josef C. Galvez',
    status: false,
    lastused: 'August 23, 2023'
  }
]

const FileGroup: React.FC = () => {
  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[45%_20%_20%_15%] rounded-md bg-sky-500 px-10 py-1 font-semibold text-white'>
          <li className='flex items-center'>File Name</li>
          <li className='flex items-center'>Date Uploaded</li>
          <li className='flex items-center'>Created By</li>
          <li className='flex items-center justify-center text-center'>Action</li>
        </ul>
        <div>
          {someData?.map((val, key) => (
            <FileInfo
              key={key}
              name={val.name}
              dateuploaded={val.dateuploaded}
              createdby={val.createdby}
              status={val.status}
              lastused={val.lastused}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default FileGroup

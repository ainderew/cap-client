import React from 'react'
// import FileDetail from './filedetail'
import FileInfo from './fileinfo'

const FileGroup: React.FC = () => {
  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[45%_20%_20%_15%] rounded-md bg-sky-500 px-10 py-1 font-semibold text-white'>
          <li>File Name</li>
          <li>Last Modified</li>
          <li>Created By</li>
          <li className='text-center'>Action</li>
        </ul>
        {/* <div>
          <FileDetail name='test.docs' lastmodified='test' createdby='test' status={true} />
          <FileDetail name='test' lastmodified='test' createdby='test' status={false} />
        </div> */}
        <div>
          <FileInfo
            name='test.txt'
            lastmodified='August 23, 2023'
            createdby='Brett Josef C. Galvez'
            status={true}
            lastused='Current'
          />
          <FileInfo
            name='Filetest.txt'
            lastmodified='August 24, 2023'
            createdby='Brett Josef C. Galvez'
            status={false}
            lastused='August 30, 2023'
          />
        </div>
      </section>
    </div>
  )
}

export default FileGroup

import React from 'react'
import FileDetail from './filedetail'

const FileGroup: React.FC = () => {
  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[5%_25%_25%_25%_15%_5%] px-10 '>
          <li></li>
          <li>Name</li>
          <li>Last Modified</li>
          <li>Created By</li>
          <li className='col-span-2 text-center'>Action</li>
        </ul>
        <div>
          <FileDetail name='test.docs' lastmodified='test' createdby='test' status={true} />
          <FileDetail name='test' lastmodified='test' createdby='test' status={false} />
        </div>
      </section>
    </div>
  )
}

export default FileGroup

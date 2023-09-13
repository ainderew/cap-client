import React from 'react'
import FileDetail from './filedetail'

const FileGroup: React.FC = () => {
  return (
    <div>
      <p className=''>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[8%_28%_28%_28%_8%] px-5'>
          <li>Status</li>
          <li>Name</li>
          <li>Last Modified</li>
          <li>Created By</li>
        </ul>
        <div>
          <FileDetail name='test' lastmodified='test' createdby='test' status={true} />
          <FileDetail name='test' lastmodified='test' createdby='test' status={false} />
        </div>
      </section>
    </div>
  )
}

export default FileGroup

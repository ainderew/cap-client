import React, { useEffect, useState } from 'react'
import FileInfo from './fileinfo'
import { formatDate } from '@/utils/dateformat'
import { useStores } from '@/core/stores/UseStores'

interface File {
  _id: string
  originalname: string
  status: boolean
  dateuploaded: string
  datelastused: string
}

const FileGroup: React.FC = () => {
  const { authStore } = useStores()
  const [files, setFiles] = useState<File[]>([])

  const businessId = authStore.userProfile?.profile._id
  useEffect(() => {
    if (businessId !== null && businessId !== undefined) {
      fetch(`http://localhost:5000/api/file/getallfiles/${businessId}`, {
        method: 'GET'
      })
        .then(async res => await (res.json() as Promise<File[]>))
        .then(data => {
          setFiles(data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [businessId])

  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='my-2 grid grid-cols-[60%_25%_15%] rounded-md bg-sky-500 px-10 py-1 font-semibold text-white'>
          <li className='flex items-center'>File Name</li>
          <li className='flex items-center'>Date Uploaded</li>
          <li className='flex items-center justify-center text-center'>Action</li>
        </ul>
        <div>
          {files
            .slice()
            .sort((a, b) => {
              if (a.status === b.status) {
                return a.datelastused.localeCompare(b.datelastused)
              }
              return a.status ? -1 : 1
            })
            .map((val, key) => (
              <div key={key}>
                {businessId !== null && businessId !== undefined ? (
                  <FileInfo
                    key={key}
                    id={val._id}
                    businessid={businessId}
                    name={val.originalname}
                    dateuploaded={formatDate(val.dateuploaded)}
                    status={val.status}
                    lastused={formatDate(val.datelastused)}
                  />
                ) : null}
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default FileGroup

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import FileInfo from './fileinfo'
import { formatDate } from '@/utils/functions/dateformat'
import useStores from '@/core/stores/UseStores'
import { config } from '../../config'
// import useFetchData from '@/hooks/useFetchData'
import { Empty, Spin } from 'antd'
import { observer } from 'mobx-react'
import useLazyFetchData from '@/hooks/useLazyFetchData'

const FileGroup: React.FC = () => {
  const {
    authStore,
    uiStore: { isUploadingFile, isActivatingFile }
  } = useStores()
  const [files, setFiles] = useState<any[]>([])
  const businessId = authStore.userProfile?._id

  const [getData, data] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/api/file/getallfiles/${businessId ?? ''}`
  )

  useEffect(() => {
    if (businessId === null || businessId === undefined || isUploadingFile || isActivatingFile) return
    const fetchData = async (): Promise<void> => {
      const datas = await getData()
      setFiles(datas || [])
    }
    void fetchData()
  }, [businessId, isUploadingFile, isActivatingFile])

  if (data.loading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Spin />
      </div>
    )
  }

  if (files === null) {
    return (
      <div className=''>
        <Empty />
      </div>
    )
  }

  return (
    <div className='mt-5'>
      <p className='font-semibold'>Recent Changes</p>
      <section>
        <ul className='hidden my-2 sm:grid grid-cols-[60%_25%_15%] rounded-md bg-blue-400 px-10 py-1 font-medium text-white'>
          <li className='flex items-center'>File Name</li>
          <li className='flex items-center'>Date Uploaded</li>
          <li className='flex items-center justify-center text-center'>
            Action
          </li>
        </ul>
        <div>
          {data.loading ? (
            <Spin />
          ) : (
            files
              ?.slice()
              .sort((a: any, b: any) => {
                if (a.status === b.status) {
                  const dateA = new Date(a.datelastused)
                  const dateB = new Date(b.datelastused)
                  return dateB.getTime() - dateA.getTime()
                }
                return a.status ? -1 : 1
              })
              .map((val: any, key: any) => (
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
              ))
          )}
        </div>
      </section>
    </div>
  )
}

export default observer(FileGroup)

import React, { useEffect, useState } from 'react'
import NotificationCard from './notificationCard'
import useFetchData from '@/hooks/useFetchData'
import { config } from '../../config'
import useStores from '@/core/stores/UseStores'
import { Spin } from 'antd'

const NotificationBar: React.FC = () => {
  const { authStore } = useStores()
  const [notifications, setNotifications] = useState<any>([])
  const businessId = authStore.userProfile?._id

  const { data, loading } = useFetchData(
    `${config.BACKEND_ENDPOINT}/api/notification/getnotifications/${businessId ?? ''}`
  )
  
  useEffect(()=>{
    if (data === null) return

    setNotifications(data)
  },[data])

  return (
    <div className=' max-h-[40rem]  border-[#77777722] bg-[#efefef] '>
      <div className='border-b-4 bg-[#ffffff]  py-2 text-[1.2rem] '>
        <span className='flex items-center justify-center font-semibold '>Notification</span>
      </div>
      {loading ? <Spin/>:(
        <div className='grid grid-cols-1  gap-2 px-2'>
        ({notifications.length === 0 ? (
          <div className='flex justify-center py-4'>No Notifications</div>
        ) : (
          <div>
            {notifications.map((data:any, index:any) => (
              <div key={index} className='py-[.5rem]'>
                <NotificationCard title={"Monthly Reminder: Data Update"} date={data.dateNotified} message={data.notification} />
              </div>
            ))}
          </div>
        )})
      </div>
      )}
    </div>
  )
}
export default NotificationBar

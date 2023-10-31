import React, { useEffect, useState } from 'react'
import NotificationCard from './notificationCard'
import useFetchData from '@/hooks/useFetchData'
import { config } from '../../config'
import useStores from '@/core/stores/UseStores'
import { Spin } from 'antd'
import useLazyFetchData from '@/hooks/useLazyFetchData'

const NotificationBar: React.FC = () => {
  const { authStore } = useStores()
  const [notifications, setNotifications] = useState<any>([])
  const businessId = authStore.userProfile?._id
  const [getNotifications, data] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/api/notification/getnotifications/${
      businessId ? businessId : ''
    }`,
  )

  // useEffect(() => {
  //   if (data === null) return;
  //   console.log(data);
  //   setNotifications(data);
  // }, [data]);

  useEffect(() => {
    if (!businessId) return
    ;async () => {
      const resNotifs = await getNotifications()
      setNotifications(resNotifs.data)
    }
    console.log(data.loading)
    console.log(notifications)
  }, [businessId])

  return (
    <div className=' w-[25rem] border-[#77777722]  '>
      <span className='sticky top-0 z-10 flex items-center justify-start   bg-[#ffffff] px-2 py-2 text-[1.3rem]  '>
        Notification
      </span>
      {!data.loading ? (
        <Spin />
      ) : (
        <section className='z-0 max-h-[70vh]  overflow-auto '>
          {notifications.length === 0 ? (
            <div className='flex justify-center py-4'>No Notifications</div>
          ) : (
            <div className='grid grid-cols-1 gap-2'>
              {notifications.map((notification: any, index: any) => (
                <NotificationCard
                  title={notification.title}
                  date={notification.dateNotified}
                  message={notification.message}
                  key={index}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}
export default NotificationBar

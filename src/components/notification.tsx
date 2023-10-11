import React from 'react'
import NotificationCard from './notificationCard'

const NotificationBar: React.FC = () => {
  const datas = [
    {
      title: 'DATA UPDATE',
      date: '9/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
    {
      title: 'DATA UPDATE',
      date: '8/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
    {
      title: 'DATA UPDATE',
      date: '7/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
    {
      title: 'DATA UPDATE',
      date: '7/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
    {
      title: 'DATA UPDATE',
      date: '7/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
    {
      title: 'DATA UPDATE',
      date: '7/2/2023',
      message: 'Your data is not up to date it needs to be updated',
    },
  ]

  return (
    <div className=' w-[25rem] border-[#77777722]  '>
      <span className='sticky top-0 z-10 flex items-center justify-start   bg-[#ffffff] px-2 py-2 text-[1.3rem]  '>
        Notification
      </span>
      <section className='z-0 max-h-[70vh]  overflow-auto '>
        {datas.length === 0 ? (
          <div className='flex justify-center py-4'>No Notifications</div>
        ) : (
          <div className='grid grid-cols-1  gap-2 '>
            {datas.map((data, index) => (
              <NotificationCard
                title={data.title}
                date={data.date}
                message={data.message}
                key={index}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
export default NotificationBar

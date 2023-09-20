import React from 'react'
import NotificationCard from './notificationCard'

const NotificationBar: React.FC = () => {
  const datas = [
    {
      title: 'DATA UPDATE',
      date: '9/2/2023',
      message: 'Your data is not up to date it needs to be updated'
    },
    {
      title: 'DATA UPDATE',
      date: '8/2/2023',
      message: 'Your data is not up to date it needs to be updated'
    },
    {
      title: 'DATA UPDATE',
      date: '7/2/2023',
      message: 'Your data is not up to date it needs to be updated'
    }
  ]

  return (
    <div className=' max-h-[40rem]  border-[#77777722] bg-[#efefef] '>
      <div className='border-b-4 bg-[#ffffff]  py-2 text-[1.2rem] '>
        <span className='flex items-center justify-center font-semibold '>Notification</span>
      </div>

      <div className='grid grid-cols-1  gap-2 px-2'>
        {datas.length === 0 ? (
          <div className='flex justify-center py-4'>No Notifications</div>
        ) : (
          <div>
            {datas.map((data, index) => (
              <div key={index} className='py-[.5rem]'>
                <NotificationCard title={data.title} date={data.date} message={data.message} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default NotificationBar

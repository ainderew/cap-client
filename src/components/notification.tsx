import React from 'react'

interface data {
  title: string
  date: string
  message: string
}

const NotificationBar: React.FC<data[]> = (...props) => {
  return (
    <div className=' max-h-[40rem]  border-[#77777722] bg-[#efefef] '>
      <div className='border-b-4 bg-[#ffffff]  py-2 text-[1.2rem] '>
        <span className='flex items-center justify-center font-semibold '>Notification</span>
      </div>

      <div className='grid grid-cols-1 gap-2 px-2'>
        {(props.length as number) === 0 ? (
          <div>
            {props.map((data, index) => (
              <div className='w-auto rounded-md bg-white px-2 py-2' key={index}>
                <div className='flex justify-between'>
                  <h1 className='pb-2 text-[1rem] font-semibold'>{data.title}</h1>
                  <h1 className='pb-2 text-[1rem] font-semibold'>{data.date}</h1>
                </div>
                <p className='pl-2 text-[0.9]'>{data.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center py-4'>No Notifications</div>
        )}
      </div>
    </div>
  )
}
export default NotificationBar

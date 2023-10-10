import React from 'react'
import Image from 'next/image'
interface Data {
  title: string
  date: string // Assuming 'date' is in the format '10/2/2023'
  message: string
}

const calculateDateDisplay = (date: string): string => {
  const currentDate = new Date()
  const [month, day, year] = date.split('/').map(Number)
  const notificationDate = new Date(year, month - 1, day)
  const timeDifference = currentDate.getTime() - notificationDate.getTime()
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

  if (daysDifference < 7) {
    return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`
  } else if (daysDifference < 30) {
    const weeksDifference = Math.floor(daysDifference / 7)
    return `${weeksDifference} week${weeksDifference !== 1 ? 's' : ''} ago`
  } else {
    const formattedDate = notificationDate.toLocaleDateString()
    return `on ${formattedDate}`
  }
}

const NotificationCard: React.FC<Data> = (props) => {
  const formattedDate = calculateDateDisplay(props.date)

  return (
    <div className='grid min-h-[7rem] grid-cols-4  rounded-md bg-white py-2 pl-2  drop-shadow-md'>
      <div className='flex items-center   justify-center  rounded-full border-2 border-solid border-[#96969616]'>
        <div className='relative h-10 w-8 '>
          <Image src={'/logo.svg'} fill alt='chatxpert' />
        </div>
      </div>
      <div className='col-span-3 px-2 py-2 '>
        <h1 className='text-[.8rem] font-semibold'>{props.title}</h1>
        <p className=' text-[0.7rem]'>{props.message}</p>
        <h1 className=' text-[.7rem] font-semibold text-[#2B99FF]'>
          {formattedDate}
        </h1>
      </div>
    </div>
  )
}

export default NotificationCard

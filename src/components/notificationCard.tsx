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

const NotificationCard: React.FC<Data> = props => {
  const formattedDate = calculateDateDisplay(props.date)

  return (
    <div className='grid grid-cols-4 rounded-md bg-white px-2 py-2'>
      <div className='flex justify-center rounded-full border-2 border-solid border-[#96969616] bg-[#fff] shadow-md'>
        <div className='relative h-full  w-10 '>
          <Image src={'/logo.svg'} fill alt='chatxpert' />
        </div>
      </div>
      <div className='col-span-3 '>
        <h1 className='pb-2 text-[1rem] font-semibold'>{props.title}</h1>
        <p className='pl-2 text-[0.9]'>{props.message}</p>
        <h1 className='pb-2 text-[1rem] font-semibold text-[#2B99FF]'>{formattedDate}</h1>
      </div>
    </div>
  )
}

export default NotificationCard

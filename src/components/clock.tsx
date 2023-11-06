import React, { useState, useEffect } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('')
  const currentDate = new Date()

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = currentDate.toLocaleDateString(undefined, options)
  useEffect(() => {
    const updateClock = (): any => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')

      const currentTime = `${hours}:${minutes}:${seconds}`

      setTime(currentTime)
    }

    const intervalId = setInterval(updateClock, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <div>
        <div className='px-2 text-[2rem] font-bold  lg:text-[5rem] lg:leading-[7rem] lg:tracking-[-.5rem] xl:text-6xl xl:tracking-normal'>
          Business Data
        </div>
        <span className='px-2'>{formattedDate}</span>
        <div className='px-2 lg:text-[3.5rem]'>{time}</div>
      </div>
    </div>
  )
}

export default Clock

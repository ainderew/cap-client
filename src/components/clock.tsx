import React, { useState, useEffect } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('')

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
    <div >
      <p>{time}</p>
    </div>
  )
}

export default Clock

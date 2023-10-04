/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'

interface GetLocation {
  location: string | null
  loading: boolean
}

export function useGetLocation (): GetLocation {
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
          const data = await response.json()

          if (data?.address) {
            const { city, country }: { city: string, country: string } =
              data.address
            setLocation(`${city} ${country}`)
            setLoading(false)
          } else {
            console.error('No results found for the given coordinates.')
          }
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  return { location, loading }
}

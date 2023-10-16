import { useEffect, useState } from 'react'
import checkToken from '@/utils/functions/checkToken'
import { message } from 'antd'

interface fetchStateTypes {
  loading: boolean
  data: unknown
}
interface useFetchDataReturnType {
  loading: boolean
  data: unknown
  refetch: () => void
}

export default function useFetchData (endpoint: string): useFetchDataReturnType {
  const [fetchStates, setFetchedStates] = useState<fetchStateTypes>({
    loading: false,
    data: null
  })

  useEffect(() => {
    setFetchedStates(prev => {
      return {
        ...prev,
        loading: true
      }
    })
    refetch()
  }, [])

  function refetch (): void {
    setFetchedStates({
      ...fetchStates,
      loading: true
    })

    fetch(endpoint, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${checkToken() ?? ''}`
      }
    })
      .then(async res => await res.json())
      .then(data => {
        setFetchedStates({
          loading: false,
          data
        })
      })
      .catch((error) => {
        void message.error(error.message)
      })
  }

  return { ...fetchStates, refetch }
}

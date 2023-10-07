import { useState } from 'react'
import checkToken from '@/utils/checkToken'

interface fetchStateTypes {
  loading: boolean
  data: unknown
}

interface usePostDataReturnType {
  loading: boolean
  data: unknown
  handlePostRequest: (variables: Filter) => Promise<void>
}

type Filter = Record<string, unknown>

export default function usePostData (endpoint: string): usePostDataReturnType {
  const [fetchStates, setFetchedStates] = useState<fetchStateTypes>({
    loading: false,
    data: null
  })

  async function handlePostRequest (variables: Filter): Promise<void> {
    setFetchedStates(prev => {
      return {
        ...prev,
        loading: true
      }
    })

    const filter: Filter = variables ?? {}

    const res: any = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${checkToken() ?? ''}`
      },
      body: JSON.stringify(filter)
    })
    setFetchedStates({
      loading: false,
      data: res.json()
    })
  }

  return { ...fetchStates, handlePostRequest }
}

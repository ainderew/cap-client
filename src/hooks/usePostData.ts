import { useState } from 'react'
import checkToken from '@/utils/functions/checkToken'

interface FetchStateTypes {
  loading: boolean
  data: unknown
}

interface UsePostDataReturnType {
  loading: boolean
  data: unknown
  handlePostRequest: (variables: Filter) => Promise<any>
}

type Filter = Record<string, unknown>

export default function usePostData (endpoint: string): UsePostDataReturnType {
  const [fetchStates, setFetchedStates] = useState<FetchStateTypes>({
    loading: false,
    data: null
  })

  async function handlePostRequest (variables: Filter): Promise<any> {
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

    const response = res.json()
    setFetchedStates({
      loading: false,
      data: response
    })

    return response
  }

  return { ...fetchStates, handlePostRequest }
}

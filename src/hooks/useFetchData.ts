import { useEffect, useState } from 'react'
import { useStores } from '@/core/stores/UseStores'

interface fetchStateTypes {
  loading: boolean
  data: unknown
}

type Filter = Record<string, unknown>

export default function usePostData (endpoint: string, variables?: Filter): fetchStateTypes {
  const [fetchStates, setFetchedStates] = useState<fetchStateTypes>({
    loading: false,
    data: null
  })
  const { authStore: { userProfile } } = useStores()
  const accountId = userProfile?.profile._id

  const filter: Filter = variables ?? {}

  useEffect(() => {
    setFetchedStates(prev => {
      return {
        ...prev,
        loading: true
      }
    })

    if (accountId !== null) {
      filter.accountId = accountId
    }
  }, [])

  fetch(endpoint, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filter)
  })
    .then(async res => await res.json())
    .then(data => {
      setFetchedStates({
        loading: false,
        data
      })
    })
    .catch(err => {
      throw err
    })

  return fetchStates
}

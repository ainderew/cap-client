
import useStores from '@/core/stores/UseStores'
import { type SimpleBusiness } from '@/utils/types/base'

interface returnType {
  currentBusiness?: SimpleBusiness | null
}

export default function useSpecificChatModal (): returnType {
  const { uiStore: { currentBusiness } } = useStores()

  return {
    currentBusiness
  }
}

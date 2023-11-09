import { useEffect, useState } from 'react'
import useStores from '@/core/stores/UseStores'

interface useHandleWidgetReturnType {
  handleShowChat: () => void
  visible: boolean
}
function useHandleWidget (): useHandleWidgetReturnType {
  const [visible, setVisible] = useState<boolean>(true)
  const { uiStore: { clearConversation } } = useStores()

  useEffect(() => {
    if (!visible) {
      clearConversation()
    }
  }, [visible])

  function handleShowChat (): void {
    setVisible(prev => !prev)
  }

  return {
    handleShowChat,
    visible
  }
}

export default useHandleWidget

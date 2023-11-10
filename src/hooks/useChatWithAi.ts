import { useEffect, useState } from 'react'
import useStores from '@/core/stores/UseStores'
import usePostData from './usePostData'
import { config } from '../../config'
import { type ChatMessage } from '@/utils/types/base'
import { ResponseRoles } from '@/utils/enums'

export interface useChatWithAiReturnType {
  conversation: ChatMessage[]
  input: string
  loading: boolean
  initializeSpecificChat: (propmpt: ChatMessage) => void
  sendChat: (e: any, bypass?: boolean) => void
  handleInputChange: (e: any) => void
}

function useChatWithAi (): useChatWithAiReturnType {
  const { uiStore: { conversation, setConversation, currentBusiness }, authStore } = useStores()
  const { businessId } = currentBusiness ?? {}
  const { data, handlePostRequest, loading } = usePostData(`${config.BACKEND_ENDPOINT}/getReply`)

  const [input, setInput] = useState<string>('')

  useEffect(() => {
    if (data == null) return
    setConversation(data)
  }, [data])

  function handleInputChange (e: any): void {
    setInput(e.target.value)
  }

  async function sendChat (e: any, bypass?: boolean): Promise<void> {
    if (((e.key !== 'Enter' || loading)) && (bypass === false)) {
      return
    }

    console.log(businessId)

    const userChat: ChatMessage = { content: input, role: ResponseRoles.user }

    setConversation(userChat)
    console.log(conversation)

    const sendObj = {
      userInput: [...conversation, userChat],
      userId: authStore.userProfile?._id,
      specificBusinessId: businessId
    }
    setInput('')

    await handlePostRequest(sendObj)
  }

  async function initializeSpecificChat (prompt: any): Promise<void> {
    const sendObj = {
      userInput: [{ content: 'What Store is this', role: 'user' }],
      userId: authStore.userProfile?._id,
      specificBusinessId: businessId ?? null
    }

    await handlePostRequest(sendObj)
  }

  return {
    conversation,
    sendChat,
    handleInputChange,
    input,
    loading,
    initializeSpecificChat
  }
}

export default useChatWithAi

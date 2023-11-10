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
  doSpecific: (propmpt: ChatMessage) => void
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

    const userChat: ChatMessage = { content: input, role: ResponseRoles.user }

    setConversation(userChat)
    console.log(conversation)

    const sendObj = {
      userInput: [...conversation, userChat],
      userId: authStore.userProfile?._id,
      specificBusinessId: businessId ?? null
    }
    setInput('')

    await handlePostRequest(sendObj)
  }

  async function doSpecific (prompt: any): Promise<void> {
    const sendObj = {
      userInput: [prompt],
      userId: authStore.userProfile?._id,
      specificBusinessId: businessId ?? null
    }
    setInput('')

    await handlePostRequest(sendObj)
  }

  return {
    conversation,
    sendChat,
    handleInputChange,
    input,
    loading,
    doSpecific
  }
}

export default useChatWithAi

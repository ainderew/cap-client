import { useEffect, useState } from "react";
import useStores from "@/core/stores/UseStores";
import usePostData from "./usePostData";
import { config } from "../../config";
import { ChatMessage } from "@/utils/types/base";
import { ResponseRoles } from "@/utils/enums";

export interface useChatWithAiReturnType{
  conversation: ChatMessage[],
  input: string
  loading:boolean
  sendChat: (e:any) => void,
  handleInputChange: (e:any)=>void,
}

function useChatWithAi(): useChatWithAiReturnType{
  const {uiStore: {conversation, setConversation}, authStore} = useStores()
  const {data,handlePostRequest,loading} =usePostData(`${config.BACKEND_ENDPOINT}/getReply` )

  const [input, setInput] = useState<string>('');


  useEffect(() =>{
    if(!data) return;
    console.log(data)
    setConversation(data)
  },[data])

  function handleInputChange(e:any){
    setInput(e.target.value)
  }

  async function sendChat(e:any){
    if ((e.key !== 'Enter' || loading)) {
      console.log("RETURNING")
      return
    }

    const userChat:ChatMessage = { content: input, role: ResponseRoles.user }

    setConversation(userChat)
    console.log(conversation)

    const sendObj = {
      userInput: [...conversation,userChat],
      userId: authStore.userProfile?._id
    }
    setInput('')

    await handlePostRequest(sendObj)
  }

  return{
    conversation,
    sendChat,
    handleInputChange,
    input,
    loading
  }

}

export default useChatWithAi;
import React from 'react'
import ChatBubble from './chatBubble'
import LoadingResponse from './loadingResponse'

interface props {
  response: any
  userinputSetter: any
  sendChat: any
  searchInput: string
  loadingResponse: boolean
}

const ChatWindow: React.FC<props> = ({
  response,
  userinputSetter,
  sendChat,
  searchInput,
  loadingResponse
}) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden px-4 py-8 xl:px-72">
      <div className="scroll-container flex flex-col-reverse gap-6 overflow-auto px-2 pb-20 lg:gap-4">
        {loadingResponse ? <LoadingResponse /> : null}
        {response.map((el: any) => {
          return <ChatBubble key={el.message.content} content={el} />
        })}
      </div>

      <div className="relative mt-auto">
        <input
          onChange={(e) => userinputSetter(e.target.value)}
          onKeyDown={sendChat}
          value={searchInput}
          type="text"
          className="absolute bottom-0 h-11 w-full rounded-full border-2 px-4 outline-none "
        />
      </div>
    </div>
  )
}

export default ChatWindow

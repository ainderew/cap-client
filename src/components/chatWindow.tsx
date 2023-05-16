import React from 'react'
import ChatBubble from './chatBubble'

interface props {
  response: any
  userinputSetter: any
  sendChat: any
  searchInput: string
}

const ChatWindow: React.FC<props> = ({
  response,
  userinputSetter,
  sendChat,
  searchInput
}) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden px-72 py-8">
      <div className="scroll-container flex flex-col-reverse gap-4 overflow-auto px-2 pb-20">
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

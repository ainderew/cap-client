import React from 'react'
import Avatar from './avatar'

interface props {
  content: any
}
const ChatBubble: React.FC<props> = ({ content }) => {
  return (
    <div
      className={`${
        content.type === 'ai' ? 'flex-row' : 'flex-row-reverse'
      } flex items-end gap-4`}
    >
      {content.type === 'ai' ? (
        <Avatar />
      ) : (
        <Avatar image="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" />
      )}
      <div
        className={`${
          content.type === 'ai' ? 'border-2 bg-[#F6F6F6] text-gray-800' : 'bg-[#2B99FF]'
        }  min-h-min w-max min-w-[10px] max-w-[45%] self-start rounded-2xl px-4 py-2 text-white shadow-sm`}
      >
        {content.message.content}
      </div>
    </div>
  )
}

export default ChatBubble

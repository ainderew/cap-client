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
        <Avatar image="https://ca.slack-edge.com/TLYK33FD1-U03KWGK3EMS-c82179af8c3e-512" />
      )}
      <div
        className={`${
          content.type === 'ai' ? 'border-2 bg-[#F6F6F6] text-gray-800' : 'bg-[#2B99FF] text-white'
        }  min-h-min w-max min-w-[10px] max-w-[45%] self-start rounded-2xl px-4 py-2  shadow-sm`}
      >
        {content.message.content}
      </div>
    </div>
  )
}

export default ChatBubble

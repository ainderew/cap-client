import React from 'react'
import Avatar from './avatar'
import SpecificBusinessLink from './specificBusinessLink'

interface props {
  content: any
  modalOpener?: any
  small?: boolean
}
const ChatBubble: React.FC<props> = ({ content, modalOpener,small=false }) => {
  return (
    <div
      className={`${
        content.role === 'ai' ? 'flex-row' : 'flex-row-reverse'
      } flex items-end gap-4`}
    >
      {content.role === 'ai' ? (
        <Avatar />
      ) : (
        <Avatar image="https://ca.slack-edge.com/TLYK33FD1-U03KWGK3EMS-c82179af8c3e-512" />
      )}
      <div
        className={`${
          content.role === 'ai' ? 'border-2 bg-[#F6F6F6] text-gray-800' : 'bg-[#2B99FF] text-white'
        }  min-h-min min-w-[10px] ${small ? "max-w-full" : "max-w-[70%]"} self-start rounded-2xl px-4 py-2 shadow-sm lg:${small ? "max-w-full" : "max-w-[45%]"}`}
      >
        <SpecificBusinessLink
          modalOpener={modalOpener}
          response={content.content}
        />
      </div>
    </div>
  )
}

export default ChatBubble
